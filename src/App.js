import {Routes, BrowserRouter, Route} from "react-router-dom";
import FrontPage from "./Pages/FrontPage";
import FirstPage from "./Pages/FirstPage";
import EndPage from "./Pages/EndPage";

function App() {


  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element ={<FirstPage/>}></Route>
              <Route path="/main" element ={<FrontPage/>}></Route>
              <Route path="/end" element ={<EndPage/>}></Route>
          </Routes>

      </BrowserRouter>
  );
}

export default App;
