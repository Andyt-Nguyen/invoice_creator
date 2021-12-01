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
  const totalTimePassed = () => {
    let hours = 0;
    const startHrs = Number(startTime.slice(0, 2));
    const startMin = Number(startTime.slice(-2));
    const endHrs = Number(endTime.slice(0, 2));
    const endMin = Number(endTime.slice(-2));

    if (startDate === endDate) {
      const diffHrs = endHrs - startHrs;
      hours = diffHrs
    }
    else if (endDate > startDate) {
      const dayMultiplier = Number(endDate.slice(-2)) - Number(startDate.slice(-2));
      const diffDayOne = (24 * dayMultiplier) - startHrs;
      const diffDayTwo = (24 * dayMultiplier) + endHrs;
      const sumOfTwoDays = diffDayOne + diffDayTwo;
      hours = sumOfTwoDays - (24 * dayMultiplier);
    }
    const diffMin = endMin > startMin
      ? endMin - startMin
      : startMin - endMin;

    return `${hours}.${diffMin < 10 ? 0 : ''}${diffMin}`;
  }

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
        {totalTimePassed()}
      </div>

      {/* Memo */}
      <div className="memo">
        <textarea
          name="memo"
          cols="30"
          rows="2"
          onChange={onInvoiceChange}
          value={memo}
        ></textarea>
      </div>

      {/* Actions */}
      <div className="actions">
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  )
}

export default InvoiceRow;