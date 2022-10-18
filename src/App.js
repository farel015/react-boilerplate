import NavbarComp from "./components/NavbarComp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TentangPage from "./pages/TentangPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComp />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="tentang" element={<TentangPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
