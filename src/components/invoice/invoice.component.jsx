import { useState } from 'react';
import InvoiceHeader from '../invoice-header/invoice-header.component';
import InvoiceRow from '../invoice-row/invoice-row.component';
import './invoice.styles.scss';

const Invoice = () => {
  const [invoices, setInvoices] = useState([
    {
      id: 1,
      startDate: '2021-12-02',
      endDate: '2021-12-02',
      startTime: '19:43',
      endTime: '20:04'
    }, {
      id: 2,
      startDate: '2021-12-02',
      endDate: '2021-12-02',
      startTime: '05:43',
      endTime: '09:04'
    }, {
      id: 3,
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
            onInvoiceChange={evt => onInvoiceChange(evt, invoice.id)}
            {...invoice}
          />
        ))
      }
    </div>
  )
}

export default Invoice;