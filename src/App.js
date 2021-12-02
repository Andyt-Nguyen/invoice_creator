import Invoice from './components/invoice/invoice.component';
// import { PDFDownloadLink } from '@react-pdf/renderer'
// import InvoicePdf from './components/invoice-pdf/invoice-pdf.component';

function App() {
  return (
    <div>
      <Invoice />
      {/* <PDFDownloadLink filename="invoice.pdf" document={<InvoicePdf />}>
      {({ loading, error }) =>
        loading ? 'Loading document...' : <button>'Download now!'</button>
      }
      </PDFDownloadLink> */}
      {/* <PDFViewer style={{ width: '100%', height: '100vh'}}>
        <InvoicePdf />
      </PDFViewer> */}
    </div>
  );
}

export default App;
