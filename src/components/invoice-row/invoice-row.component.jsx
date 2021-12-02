import { totalHoursPassed } from 'utils/helper';
import './invoice-row.styles.scss';


const InvoiceRow = ({
  startDate,
  endDate,
  startTime,
  endTime,
  onInvoiceChange,
  memo,
  onDelete
}) => {
  const totalHours = totalHoursPassed(startTime, endTime, startDate, endDate);
  return (
    <div className="invoice-row">
      {/* Start Date */}
      <time className="start-date">
        <input
          type="date"
          name="startDate"
          onChange={onInvoiceChange}
          value={startDate}
        />
      </time>

      {/* Start Time */}
      <time className="start-time">
        <input
          type="time"
          name="startTime"
          onChange={onInvoiceChange}
          value={startTime}
        />
      </time>

      {/* Finish Date */}
      <time className="end-date">
        <input
          type="date"
          name="endDate"
          min={startDate}
          onChange={onInvoiceChange}
          value={endDate}
        />
      </time>

      {/* Finish Time */}
      <time className="end-time">
        <input
          type="time"
          name="endTime"
          min={startTime}
          onChange={onInvoiceChange}
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
          onChange={onInvoiceChange}
          value={memo}
          re
        ></textarea>
      </div>

      {/* Actions */}
      <div className="actions">
        <button className="delete-btn" onClick={onDelete}>Delete</button>
      </div>
    </div>
  )
}

export default InvoiceRow;