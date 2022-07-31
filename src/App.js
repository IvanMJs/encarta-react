import React from "react";
import { Routes, Route} from "react-router-dom";
import Animals from "./page/animals/animals";
import Countries from "./page/countries/countries";
import History from "./page/history/history";
import Index from "./page/index";
import Science from "./page/science/science";
import Technology from "./page/technology/technology";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="/animals" element={<Animals/>}/>
      <Route path="/countries" element={<Countries/>}/>
      <Route path="/history" element={<History/>}/>
      <Route path="/science" element={<Science/>}/>
      <Route path="/technology" element={<Technology/>}/>
    </Routes>
  );
}

export default App;
