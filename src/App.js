import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Navbar";
import Home from "./components/Home";
import Login from "./components/Login"
import Axios from "axios";
import About from "./components/About";
import Work from "./components/Work";
import Team from "./components/Team";
import Inspire from "./components/Inspire";
import Status from "./components/Status";
import Service from "./components/Service";
import Contact from "./components/Contact";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />      
          <Route path="/work" element={<Work />} />   
          <Route path="/team" element={<Team />} />    
          <Route path="/inspire" element={<Inspire />} />       
          <Route path="/status" element={<Status />} />        
          <Route path="/service" element={<Service />} />      
          <Route path="/contact" element={<Contact />} />          
    
   
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);