import React from 'react';
import './App.css';
import {Routes} from "react-router"
import {Route, BrowserRouter} from "react-router-dom"
import UiKit from "./components/ui-kit/UiKit";
import Brigades from "./components/Brigades/Brigades";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/ui-kit' element={<UiKit/>}/>
              <Route path='/' element={<Brigades/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
