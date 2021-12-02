import { useContext } from 'react';
import { InvoiceContext } from 'providers/invoice/invoice.provider';

import { PDFDownloadLink } from '@react-pdf/renderer'
import InvoiceRow from 'components/invoice-row/invoice-row.component';
import InvoicePdf from 'components/invoice-pdf/invoice-pdf.component';

import './invoice.styles.scss';

const Invoice = () => {
  const { invoices, createInvoice, totalHours } = useContext(InvoiceContext);

  const renderDownloadBtn = ({ loading, error }) => {
    if (loading) {
      return <p>Loading...</p>
    } else if (error) {
      return <p>Unable to download invoice</p>
    }
    return <button className="success-btn">Download</button>
  }

  return (
    <div className="invoice">
      <aside className="btn-container">
        <button className="primary-btn" onClick={createInvoice}>
          Add Invoice
        </button>
        <PDFDownloadLink
          filename="invoice.pdf"
          document={<InvoicePdf invoices={invoices} totalHours={totalHours} />}
        >
          {renderDownloadBtn}
        </PDFDownloadLink>
      </aside>

      <header>
        <p>Start Date</p>
        <p>Start Time</p>
        <p>Finish Date</p>
        <p>Finish Time</p>
        <p>Total(Hrs)</p>
        <p>Memo</p>
        <p>Actions</p>
      </header>

      {invoices.map(invoice => <InvoiceRow key={invoice.id} {...invoice} />)}

      <h2>Total Hours: {totalHours}</h2>
    </div>
  )
}

export default Invoice;