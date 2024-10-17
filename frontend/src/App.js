import './App.css';
import Information from "./components/Information";
import Request from "./components/request";
import Delivery from "./components/delivery";
import Review from "./components/review";
import Fpge from "./components/Fpge";
import Revi from "./components/Reviewpg";

import {BrowserRouter as Router,Route, Routes} from "react-router-dom"


function App() {
  return (
    
    <div className="container">
      <br></br>
           
      
      <Routes>
      
      <Route path="/" exact element={<Information/>}></Route> 
      <Route path="/r" exact element={<Request/>}></Route>
      <Route path="/h" exact element={<Delivery/>}></Route>
      <Route path="/y" exact element={<Review/>}></Route>
      <Route path="/finl" exact element={<Fpge/>}></Route>
      <Route path="/f" exact element={<Revi/>}></Route>
      
      
      </Routes>
      
    </div>
    

  );
}

export default App;
