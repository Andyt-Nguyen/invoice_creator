import { StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 50
  },
  section: {
    margin: '0 10px',
    padding: 10,
    flexDirection: 'row',
    borderBottom: '1px solid black'
  },

  textStyle: {
    fontSize: 10,
    width: 100,
  },

  title: {
    fontSize: 40,
    marginBottom: 20
  }
});

export default styles;