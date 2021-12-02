import { createContext, useState, useEffect } from 'react';
import invoiceData from './invoice.data.json'
import {
  createNewInvoice,
  deleteInvoice,
  handleInvoiceChange,
  calculateInvoiceHours
} from './invoice.utils';

export const InvoiceContext = createContext({
  invoices: [],
  totalHours: 0,
  createInvoice: () => { },
  removeInvoice: () => { },
  onInvoiceChange: () => { }
});

const InvoiceProvider = ({ children }) => {
  const [invoices, setInvoices] = useState(invoiceData.invoices);
  const [totalHours, setTotalHours] = useState(0);
  const createInvoice = () => setInvoices(createNewInvoice(invoices));
  const removeInvoice = (id) => setInvoices(deleteInvoice(invoices, id));
  const onInvoiceChange = (obj, id) => setInvoices(handleInvoiceChange(invoices, obj, id));

  useEffect(() => {
    setTotalHours(calculateInvoiceHours(invoices));
  }, [invoices]);

  return (
    <InvoiceContext.Provider
      value={{
        invoices,
        totalHours,
        createInvoice,
        removeInvoice,
        onInvoiceChange
      }}
    >
      {children}
    </InvoiceContext.Provider>
  )
}

export default InvoiceProvider;