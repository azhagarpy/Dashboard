import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import HomePage from "./pages/HomePage";
import SideBar from "./components/SideBar";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products" element={<ProductPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
