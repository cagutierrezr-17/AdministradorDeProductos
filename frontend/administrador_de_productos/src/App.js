import { BrowserRouter, Routes, Route } from "react-router-dom"
import CreateProduct from "./pages/createProduct/createProduct"
import "./App.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<CreateProduct></CreateProduct>}></Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
