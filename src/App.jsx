import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  return <>
  <div className="flex ">
     <Sidebar/>
     <Routes>
    
      <Route path="/" element={ <Home/>}/>
      <Route path="/favorite" element={ <Favorites/>}/>
     </Routes>
  </div>
  
  </>;
}

export default App;
