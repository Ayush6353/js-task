import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Chart1 from "./chart/Chart1";
import AxisWithComposition from "./chart/Chart1";
import NameData from "./components/NameData";
import StandData from "./components/StandData";
import PrData from "./components/PrData";
import ShowData from "./components/ShowData";
import ArrayLength from "./task/ArrayLength";
import AxiosApiNews from "./task/AxiosApiNews";
import BoxChart from "./task/BoxChart";
import Boxs from "./task/Boxs";
import HeadTaill from "./task/HeadTaill";
import Stepper from "./StepperH";
import StepperH from "./StepperH";
import FormikAndYup from "./task/FormikAndYup";
import ModalBox from "./task/ModelBox";
import BillingAndPlans from "./task/BillingAndPlans";
import ModalAddBox from "./task/ModalAddBox";
import ChangeBillingMethod from "./task/ChangeBillingMethid";
import ChangeSubscription from "./task/ChangeSubscription";
import NavBar from "./task/NavBar";
// import Practianimation from "./compo/practianimation";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<NameData/>}/>
        <Route path="/std" element={<StandData/>}/>
        <Route path="/pr" element={<PrData/>}/>
        <Route path="/show" element={<ShowData/>}/>
      </Routes>
      </BrowserRouter> */}
      <NavBar/>
      {/* <ChangeSubscription/> */}
      {/* <StepperH/> */}
      {/* <FormikAndYup/> */}
      {/* <ModalBox/> */}
      {/* <BillingAndPlans/> */}
      
  
      {/* <ChangeBillingMethod/> */}
      {/* <ModalAddBox/> */}
      {/* <Boxs/> */}
      {/* <BoxChart/> */}
      {/* <AxiosApiNews/> */}
      {/* <NameData/> */}
      {/* <HeadTaill /> */}
      {/* <ArrayLength /> */}
    </div>
  );
}

export default App;
