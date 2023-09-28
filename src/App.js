import { Routes, Route } from "react-router-dom";
import useSWR from "swr";
import { SWRConfig } from "swr";
import Header from "./components/Header";
import Bookmarks from "./pages/Bookmarks";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Profil from "./pages/Profil";
import Footer from "./components/Footer";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function App() {
  const { data, error, isLoading } = useSWR(
    "https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple",
    fetcher
  );

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>loading...</p>;

  console.log(data.results);

  return (
    <>
      <SWRConfig
        value={{
          fetcher,
          refreshInterval: 10000,
        }}
      ></SWRConfig>

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
