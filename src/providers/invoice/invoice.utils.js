import { totalHoursPassed } from "utils/helper";

export const createNewInvoice = (invoices) => {
  const newId = Number((Math.random() * 1000) + 4).toFixed(0);
  const newInvoice = {
    id: newId,
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: ''
  };
  return [...invoices, newInvoice];
};

export const deleteInvoice = (invoices, invoiceId) => {
  const removedInvoice = invoices.filter(({ id }) => id !== invoiceId)
  return removedInvoice;
};

export const handleInvoiceChange = (invoices, obj, id) => {
  const editedInvoice = invoices.map(invoice => (
    invoice.id === id
      ? { ...invoice, ...obj }
      : invoice
  ));
  return editedInvoice;
};

export const calculateInvoiceHours = (invoices) => {
    const sum = invoices.reduce((acummulator, invoice) => {
    const { startTime, endTime, startDate, endDate } = invoice;
    return (
      acummulator + Number(totalHoursPassed(startTime, endTime, startDate, endDate))
    )
  }, 0).toFixed(2);
  return sum;
}