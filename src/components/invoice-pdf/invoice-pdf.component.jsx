import { Document, Page, Text, View } from '@react-pdf/renderer';
import { totalHoursPassed } from 'utils/helper';

import styles from './invoice-pdf.styles';

const InvoicePdf = () => {
  const invoices = [
    {
      id: 1,
      memo: "Hello world",
      startDate: '2021-12-02',
      endDate: '2021-12-02',
      startTime: '19:43',
      endTime: '20:04'
    }, {
      id: 2,
      memo: "Test world",
      startDate: '2021-12-02',
      endDate: '2021-12-02',
      startTime: '05:43',
      endTime: '09:04'
    }, {
      id: 3,
      memo: "Tester worlds",
      startDate: '2021-12-02',
      endDate: '2021-12-02',
      startTime: '15:43',
      endTime: '16:00'
    }
  ];

  const totalHours = () => {
    return invoices.reduce((acummulator, invoice) => {
      const { startTime, endTime, startDate, endDate } = invoice;
      return (
        acummulator + Number(totalHoursPassed(startTime, endTime, startDate, endDate))
      )
    }, 0).toFixed(2);
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.title}>Invoice</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.textStyle}>Start Date</Text>
          <Text style={styles.textStyle}>Start Time</Text>
          <Text style={styles.textStyle}>Finish Date</Text>
          <Text style={styles.textStyle}>Finish Time</Text>
          <Text style={styles.textStyle}>Total</Text>
          <Text style={styles.textStyle}>Memo</Text>
        </View>
        {
          invoices.map(({ id, memo, startDate, endDate, startTime, endTime }) => (
            <View key={id} style={styles.section}>
              <Text style={styles.textStyle}>{startDate}</Text>
              <Text style={styles.textStyle}>{startTime}</Text>
              <Text style={styles.textStyle}>{endDate}</Text>
              <Text style={styles.textStyle}>{endTime}</Text>
              <Text style={styles.textStyle}>
                {totalHoursPassed(startTime, endTime, startDate, endDate)}
              </Text>
              <Text style={styles.textStyle}>{memo}</Text>
            </View>
          ))
        }

        <View>
          <Text style={{ textAlign: 'right', marginRight: 20, marginTop: 20 }}>
            Total Hours: {totalHours()}
          </Text>
        </View>
      </Page>
    </Document>
  )
};

export default InvoicePdf;