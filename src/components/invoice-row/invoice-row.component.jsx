import { useState } from 'react';
// import { DatePicker, TimePicker } from 'antd';
import './invoice-row.styles.scss';

const InvoiceRow = () => {
  const [dateAndTimes, setDateAndTimes] = useState({
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: ''
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setDateAndTimes({
      ...dateAndTimes,
      [name]: value
    })
  }


  const { startDate, endDate, startTime, endTime } = dateAndTimes;
  return (
    <div className="invoice-row">
      {/* Start Date */}
      <time>
        <input
          id="start"
          type="date"
          name="startDate"
          onChange={onChange}
          value={startDate}
        />
      </time>

      {/* Start Time */}
      <time>
        <input
          type="time"
          name="startTime"
          required
          onChange={onChange}
          value={startTime}
        />
      </time>

      {/* Finish Date */}
      <time>
        <input
          id="start"
          type="date"
          name="endDate"
          min={startDate}
          onChange={onChange}
          value={endDate}
        />
      </time>

      {/* Finish Time */}
      <time>
        <input
          type="time"
          name="endTime"
          min={startTime}
          required
          onChange={onChange}
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

      <div>
        {/* Actions */}
        <button>x</button>
      </div>
    </div>
  )
}

export default InvoiceRow;