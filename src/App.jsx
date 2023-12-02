import React from "react";
import OpenCloseHighLowTable from "./ochlTable";
import SRTable from "./SRTable";
import EMATable from "./EMATable";
import NSECurrDayTable from "./NSECurrDayTable";
import FinalButtons from "./FinalButtons";
import DisplayFinalTable from "./FinalTable";
import { SRDataProvider } from "../src/contexts/SRValuesContext";
import { NIFTYValueDataProvider } from "../src/contexts/NIFTYValueContext";
import { EMAValueDataProvider } from "../src/contexts/EMAValueContext";
import { FinalValuesDataProvider } from "../src/contexts/FinalContext";
import { GapDirectionDataProvider } from "../src/contexts/GapDirectionContext";
import { NSECurrentDataProvider } from "../src/contexts/NSECurrDayContext";
import { OCHLDataProvider } from "../src/contexts/ochlContext";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <SRDataProvider>
      <NIFTYValueDataProvider>
        <EMAValueDataProvider>
          <FinalValuesDataProvider>
            <GapDirectionDataProvider>
              <NSECurrentDataProvider>
                <OCHLDataProvider>
                  <div>
                        <h2 className="text-center">NIFTY SR Calculator</h2>
                        <table style={{width:'100%'}} className="text-center">
                          <tr >
                          <td align="center" style={{padding:'1%'}} rowSpan={2}>
                          <OpenCloseHighLowTable />
                          </td>
                          <td align="center" style={{padding:'1%'}}>
                          <NSECurrDayTable />
                          </td>
                          </tr>
                          <tr>
                          <td style={{alignItems: 'center'}}> <FinalButtons /></td>
                          </tr>
                          <tr><td align="center" style={{padding:'1%'}}>
                          <SRTable />
                          <EMATable />
                          </td>
                          <td align="center" style={{padding:'1%'}}>
                          <DisplayFinalTable />
                          </td>
                          </tr>
                        </table>
                  </div>
                </OCHLDataProvider>
              </NSECurrentDataProvider>
           </GapDirectionDataProvider>
          </FinalValuesDataProvider>
        </EMAValueDataProvider>
      </NIFTYValueDataProvider>
    </SRDataProvider>
  )
}

export default App;