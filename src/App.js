import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Bookmarks from "./pages/Bookmarks";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Profil from "./pages/Profil";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Bookmarks" element={<Bookmarks />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Profil" element={<Profil />} />
      </Routes>
    </>
  );
}

export default App;
