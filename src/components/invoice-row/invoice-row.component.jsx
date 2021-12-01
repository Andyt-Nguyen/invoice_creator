import './invoice-row.styles.scss';


const InvoiceRow = ({ startDate, endDate, startTime, endTime, onInvoiceChange }) => {
  return (
    <div className="invoice-row">
      {/* Start Date */}
      <time>
        <input
          type="date"
          name="startDate"
          onChange={onInvoiceChange}
          value={startDate}
        />
      </time>

      {/* Start Time */}
      <time>
        <input
          type="time"
          name="startTime"
          onChange={onInvoiceChange}
          value={startTime}
        />
      </time>

      {/* Finish Date */}
      <time>
        <input
          type="date"
          name="endDate"
          min={startDate}
          onChange={onInvoiceChange}
          value={endDate}
        />
      </time>

      {/* Finish Time */}
      <time>
        <input
          type="time"
          name="endTime"
          min={startTime}
          onChange={onInvoiceChange}
          value={endTime}
        />
      </time>

      {/* Total */}
      <div>
        0
      </div>

      {/* Memo */}
      <div>
        <textarea name="" id="" cols="30" rows="2"></textarea>
      </div>

      {/* Actions */}
      <div>
        <button>Delete</button>
      </div>
    </div>
  )
}

export default InvoiceRow;