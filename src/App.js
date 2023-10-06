import { Routes, Route } from "react-router-dom";
import useSWR from "swr";
import Header from "./components/Header";
import Bookmarks from "./pages/Bookmarks";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Profil from "./pages/Profil";
import Footer from "./components/Footer";

function App() {
  const apiUrl =
    "https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple";

  const { data, error } = useSWR(apiUrl, async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  });

  if (error) {
    return <p>Fehler beim Laden der Daten</p>;
  }
  if (!data) {
    return <p>Daten werden geladen...</p>;
  }

  const results = data.results;

  return (
    <>
      <Header />
      <Footer />
      <Routes>
        <Route path="/" element={<Home results={results} />} />
        <Route path="/Bookmarks" element={<Bookmarks />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Profil" element={<Profil />} />
      </Routes>
    </>
  );
}

export default App;
