import React , {useState} from "react";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import FileUpload from "./FileUpload";
import { useEMAValueContext } from "./contexts/EMAValueContext";
import { useNIFTYValueContext } from "./contexts/NIFTYValueContext";
import { useSRValuesContext } from "./contexts/SRValuesContext";
import { useFinalValuesContext } from "./contexts/FinalContext";
import { useOCHLContext } from "./contexts/ochlContext";
import { useNSECurrentContext } from "./contexts/NSECurrDayContext";
import { useGapDirectionContext } from "./contexts/GapDirectionContext";
import readcsv from "./utils/readcsvfile";

const FinalButtons = () => {

    const {EMAValue,updateEMAValue} = useEMAValueContext();
    const {SRValues , updateSRValues} = useSRValuesContext();
    const {NIFTYValue, updateNIFTYValue} = useNIFTYValueContext();
    const { FinalValues , updateFinalValues } = useFinalValuesContext();
    const {OCHLValues, updateOCHLValues} = useOCHLContext();
    const { NSECurrValues, updateNSECurrValues } = useNSECurrentContext();
    const {GapDirectionValue, updateGapDirectionValue} = useGapDirectionContext();

    const [ UploadedFile , addFile ] = useState(null);

    const resetStates = [
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      '',
      '',
      {
        "P": ['', '', '', 'P'],
        "S1": ['', '', '', 'S1'],
        "R1": ['', '', '', 'R1'],
        "S2": ['', '', '', 'S2'],
        "R2": ['', '', '', 'R2'],
        "1m EMA 200": ['', '', 'blue', '1m EMA'],
        "5m EMA 200": ['', '', 'green', '5m EMA'],
        "30m EMA 200": ['', '', 'gray', '30m EMA'],
        "2H EMA 200": ['', '', 'brown', '2H EMA'],
        "D EMA 200": ['', '', 'red', 'D EMA'],
        "Nifty Futures": ['', '', 'yellow', 'Nifty Futures']
      },
      ['', ''],
      ['', '', '', '']
      ];
      
      const OnResetClick = () => {
        updateEMAValue(-1,resetStates[0]);
        updateSRValues(resetStates[1]);
        updateNIFTYValue(resetStates[2]);
        updateGapDirectionValue(resetStates[3]);
        updateNSECurrValues(-1,resetStates[5]);
        updateFinalValues(resetStates[4]);
        updateOCHLValues(-1,resetStates[6]);
        addFile(null);
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) {
          fileInput.value = null;
        }
      };

      const OnSaveClick = () => {
        localStorage.setItem('EMAValue', JSON.stringify(EMAValue));
        localStorage.setItem('SRValues', JSON.stringify(SRValues));
        localStorage.setItem('NIFTYValue', JSON.stringify(NIFTYValue));
        localStorage.setItem('FinalValues', JSON.stringify(FinalValues));
        localStorage.setItem('OCHLValues', JSON.stringify(OCHLValues));
        localStorage.setItem('NSECurrValues', JSON.stringify(NSECurrValues));
        localStorage.setItem('GapDirectionValue',JSON.stringify(GapDirectionValue));
      }
      

    const TagNames = [  {id: "oneEMA200"},
                        {id: "fiveEMA200"},
                        {id: "thirtyEMA200"},
                        {id: "twoHEMA200"},
                        {id: "dayEMA200"},
                        { id: 'P' },
                        { id: 'R1' },
                        { id: 'S1' },
                        { id: 'R2' },
                        { id: 'S2' },
                        { id: 'niftyFutures'}]

    const FinalSendValues = [
        ...EMAValue.map((item) => item),
        ...SRValues.map((item) => item),
        NIFTYValue,
    ];

      const convertToDict = (values, tagNames) => {
        const dictionary = {};
        tagNames.forEach((tag, index) => {
            const name = tag.id;
            dictionary[name] = [Number(values[index])];
        });
        return dictionary;
    };

    const sendData = async (data) => {
        try {
            const response = await Axios.post(
                'https://niftysr.onrender.com/NSRCal/api/v1/displaySortedSRValues',
              data,
              {
                withCredentials: true,
                headers: { 'Content-Type': 'application/json' },
              }
            );
            let values = response.data.sortedSRValues
            console.log(values)
            updateFinalValues(values);
      
          } catch (error) {
            console.error('Error:', error);
            alert('Error sending data!');
          }
    };

    const SaveFunction = () => {
        OnSaveClick();
        alert('Values saved')
    }

    const ResetFunction = () => {
        OnResetClick();
    }

    const ProcessFunction = () => {
        let data = convertToDict(FinalSendValues,TagNames);
        let finaldict = {
            SRV: data,
            nifty: NIFTYValue,
        };
        sendData(JSON.stringify(finaldict));
    }

    const SendFileFunction = async () => {
      if (UploadedFile != null) {
          let response = await readcsv(UploadedFile);
          console.log(response);
          let csvEMA = [];
          for (let i = 0; i < response.emaValues.length; i++) {
              csvEMA.push(Number(response.emaValues[i]));
          }
          let csvOCHL = [];
          for (let i = 0; i < response.ochlValues.length; i++) {
              csvOCHL.push(Number(response.ochlValues[i]));
          }
          console.log(csvOCHL);
          updateEMAValue(-1, csvEMA);
          updateOCHLValues(-1, csvOCHL);
      } else {
          alert('No file selected.');
      }
  };  

    return(
      <div style={{ marginTop: '5%', display: 'flex', alignItems: 'center' , justifyContent : "center" }}>
      <div>
        <button onClick={() => SaveFunction()} className="btn btn-primary">
          Save
        </button>
        <button
          onClick={() => ResetFunction()}
          className="btn btn-primary"
          style={{ marginRight: '10px', marginLeft: '10px' }}
        >
          Reset
        </button>
        <button onClick={() => ProcessFunction()} className="btn btn-primary" style={{ marginRight: '10px' }}>
          Process
        </button>
        <button onClick={()=>SendFileFunction()} className="btn btn-primary" style={{marginRight: '10px'}}>
          CSV
        </button>
        </div>
      <div>
        <FileUpload
        onFileUpload={addFile}
        />
      </div> 
    </div>
    
    )

}

export default FinalButtons;