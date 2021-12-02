import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: '50px'
  },
  section: {
    margin: '0 10px',
    padding: 10,
    flexDirection: 'row',
    borderBottom: '1px solid black'
  },

  textStyle: {
    fontSize: '10px',
    width: '100px',
  }
});

// Create Document Component
const InvoicePdf = () => {
  const hello = [
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
  ]
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={{ fontSize: 40, marginBottom: 20 }}>Invoice</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.textStyle}>Start Date</Text>
          <Text style={styles.textStyle}>Start Time</Text>
          <Text style={styles.textStyle}>Finish Date</Text>
          <Text style={styles.textStyle}>Finish Time</Text>
          <Text style={styles.textStyle}>Total</Text>
          <Text style={styles.textStyle}>Memo</Text>
        </View>
        <View style={{ flexDirection: 'row', margin: '0 10px', padding: '10px', borderBottom: '1px solid black' }}>
          <Text style={styles.textStyle}>2021-12-02</Text>
          <Text style={styles.textStyle}>19:43</Text>
          <Text style={styles.textStyle}>2021-12-02</Text>
          <Text style={styles.textStyle}>09:04</Text>
          <Text style={styles.textStyle}>12.4</Text>
          <Text style={styles.textStyle}>Hello world</Text>
        </View>
        <View style={{ flexDirection: 'row', margin: '0 10px', padding: '10px', borderBottom: '1px solid black' }}>
          <Text style={styles.textStyle}>2021-12-02</Text>
          <Text style={styles.textStyle}>19:43</Text>
          <Text style={styles.textStyle}>2021-12-02</Text>
          <Text style={styles.textStyle}>09:04</Text>
          <Text style={styles.textStyle}>12.4</Text>
          <Text style={styles.textStyle}>Hello world</Text>
        </View>
        <View style={{ flexDirection: 'row', margin: '0 10px', padding: '10px', borderBottom: '1px solid black' }}>
          <Text style={styles.textStyle}>2021-12-02</Text>
          <Text style={styles.textStyle}>19:43</Text>
          <Text style={styles.textStyle}>2021-12-02</Text>
          <Text style={styles.textStyle}>09:04</Text>
          <Text style={styles.textStyle}>12.4</Text>
          <Text style={styles.textStyle}>Hello world</Text>
        </View>
      </Page>
    </Document>
  )
};

export default InvoicePdf;