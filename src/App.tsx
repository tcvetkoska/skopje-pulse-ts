import { Route, Routes } from "react-router-dom";
import NoMatch from "./lib/global/NoMatch";
import SensorDetailsContainer from "./pages/sensorDetails/UI/SensorDetailsContainer";
import SensorsContainer from "./pages/sensorsList/UI/SensorsContainer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SensorsContainer />} />
        <Route path="/:id" element={<SensorDetailsContainer />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
