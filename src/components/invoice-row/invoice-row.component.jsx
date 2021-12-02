import { useContext } from 'react';
import { InvoiceContext } from 'providers/invoice/invoice.provider';
import { totalHoursPassed } from 'utils/helper';
import './invoice-row.styles.scss';

const InvoiceRow = ({
  id,
  startDate,
  endDate,
  startTime,
  endTime,
  memo,
}) => {
  const { onInvoiceChange, removeInvoice } = useContext(InvoiceContext);
  const totalHours = totalHoursPassed(startTime, endTime, startDate, endDate);

  const onInputChange = (evt) => {
    const { name, value } = evt.target;
    onInvoiceChange({ [name]: value }, id);
  };

  return (
    <div className="invoice-row">
      {/* Start Date */}
      <time className="start-date">
        <input
          type="date"
          name="startDate"
          onChange={onInputChange}
          value={startDate}
        />
      </time>

      {/* Start Time */}
      <time className="start-time">
        <input
          type="time"
          name="startTime"
          onChange={onInputChange}
          value={startTime}
        />
      </time>

      {/* Finish Date */}
      <time className="end-date">
        <input
          type="date"
          name="endDate"
          min={startDate}
          onChange={onInputChange}
          value={endDate}
        />
      </time>

      {/* Finish Time */}
      <time className="end-time">
        <input
          type="time"
          name="endTime"
          min={startTime}
          onChange={onInputChange}
          value={endTime}
        />
      </time>

      {/* Total Hours */}
      <div>
        {totalHours}
      </div>

      {/* Memo */}
      <div className="memo">
        <textarea
          name="memo"
          cols="30"
          rows="3"
          onChange={onInputChange}
          value={memo}
        ></textarea>
      </div>

      {/* Actions */}
      <div className="actions">
        <button
          className="danger-btn"
          onClick={() => removeInvoice(id)}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default InvoiceRow;