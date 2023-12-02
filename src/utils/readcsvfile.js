import Papa from 'papaparse';

const emaOrderedTags = ['1ema200', '5ema200', '3ema200', '2ema200', 'dema200'];
const ochlOrderedTags = ['open', 'close', 'high', 'low'];

const readcsv = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const fileContents = event.target.result;

      Papa.parse(fileContents, {
        complete: (result) => {
          // Access the parsed CSV data
          const csvParsedData = result.data[0];
          console.log('Parsed CSV Data:', csvParsedData);

          // Handle the parsed data here
          const emaValues = emaOrderedTags.map((tag) => csvParsedData[tag]);
          const ochlValues = ochlOrderedTags.map((tag) => csvParsedData[tag]);

          console.log('EMA Values:', emaValues);
          console.log('OCHL Values:', ochlValues);

          resolve({ emaValues, ochlValues });
        },
        header: true, // Set this option if your CSV has a header row
      });
    };

    reader.onerror = (error) => {
      console.error('Error reading file:', error);
      reject(error);
    };

    reader.readAsText(file);
  });
};

export default readcsv;
