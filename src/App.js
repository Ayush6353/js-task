import "./App.css";
import AxisWithComposition from "./chart/Chart1";
import ArrayLength from "./task/ArrayLength";
import BoxChart from "./task/BoxChart";
import Boxs from "./task/Boxs";
import HeadTaill from "./task/HeadTaill";

function App() {
  return (
    <div className="App">
      <Boxs/>
      <BoxChart/>
      {/* <HeadTaill />
      <ArrayLength /> */}
    </div>
  );
}

export default App;
