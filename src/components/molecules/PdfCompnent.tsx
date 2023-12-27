import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    width: '40vh',
  },
  section: {
    // margin: 10,
    // padding: 10,
    flexGrow: 1,
  },
  header: {},
});

// Create Document Component
const MyDocument = ({ data }: { data: StudentDataInt[] }) => (
  <PDFViewer className="mt-6 h-[80vh] w-full">
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.header}> Student Report</Text>
        </View>
        {data.map((item) => (
          <View key={item.key}>
            <Text>
              {item?.firstName}
              {' '}
            </Text>
          </View>
        ))}
      </Page>
    </Document>
  </PDFViewer>
);

export default MyDocument;
