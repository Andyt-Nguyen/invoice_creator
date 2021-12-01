import { useState } from 'react';
import InvoiceRow from '../invoice-row/invoice-row.component';
import './invoice.styles.scss';

const Invoice = () => {
  const [invoices, setInvoices] = useState([
    {
      id: 1,
      memo: "Hello world",
      startDate: '2021-12-02',
      endDate: '2021-12-02',
      startTime: '19:43',
      endTime: '20:04'
    }, {
      id: 2,
      memo: "Test world",
      startDate: '2021-12-02',
      endDate: '2021-12-02',
      startTime: '05:43',
      endTime: '09:04'
    }, {
      id: 3,
      memo: "Tester worlds",
      startDate: '2021-12-02',
      endDate: '2021-12-02',
      startTime: '15:43',
      endTime: '16:00'
    }
  ]);

  const addInvoiceRow = () => {
    const newId = Number((Math.random() * 1000) + 4).toFixed(0);
    const newInvoice = {
      id: newId,
      startDate: '',
      endDate: '',
      startTime: '',
      endTime: ''
    };
    setInvoices([...invoices, newInvoice]);
  };

  const removeInvoiceRow = (invoiceId) => {
    const removedInvoiceRow = invoices.filter(({ id }) => id !== invoiceId)
    setInvoices(removedInvoiceRow);
  }

  const onInvoiceChange = (evt, id) => {
    const { name, value } = evt.target;
    const editedInvoice = invoices.map(invoice => (
      invoice.id === id
        ? { ...invoice, [name]: value }
        : invoice
    ));
    setInvoices(editedInvoice);
  };

  return (
    <div className="invoice">
      <div>
        <button onClick={addInvoiceRow}>add invoice</button>
      </div>
      <header>
        <p>Start Date</p>
        <p>Start Time</p>
        <p>Finish Date</p>
        <p>Finish Time</p>
        <p>Total</p>
        <p>Memo</p>
        <p>Actions</p>
      </header>
      {
        invoices.map(invoice => (
          <InvoiceRow
            key={invoice.id}
            onDelete={() => removeInvoiceRow(invoice.id)}
            onInvoiceChange={evt => onInvoiceChange(evt, invoice.id)}
            {...invoice}
          />
        ))
      }
    </div>
  )
}

export default Invoice;