import { createContext, useState, useEffect } from 'react';

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
  const [invoices, setInvoices] = useState([]);
  const [totalHours, setTotalHours] = useState(0);
  const createInvoice = () => setInvoices(createNewInvoice());
  const removeInvoice = (id) => setInvoices(deleteInvoice(id));
  const onInvoiceChange = (obj, id) => setInvoices(handleInvoiceChange(invoices, obj, id));

  useEffect(() => {
    setTotalHours(calculateInvoiceHours(invoices));
  }, [invoices]);

  return (
    <InvoiceContext.Provider
      value={
        invoices,
        totalHours,
        createInvoice,
        removeInvoice,
        onInvoiceChange
      }
    >
      {children}
    </InvoiceContext.Provider>
  )
}

export default InvoiceProvider;