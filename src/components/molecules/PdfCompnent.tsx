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
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    width: '40vh',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
const MyDocument = ({
  data,
}: {
  data: { firstName: string; key: string }[];
}) => (
  <PDFViewer className="mt-6 h-[80vh] w-full">
    <Document>
      <Page size="A4" style={styles.page}>
        {data.map((item) => (
          <View key={item.key} style={styles.section}>
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
