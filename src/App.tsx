import {HashRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HeroDetails from "./pages/HeroDetails";
import HeroList from "./pages/HeroList";
import ItemList from "./pages/ItemList";
import {VersionContext} from "./context/versionContext";
import {useEffect, useState} from "react";
import HomePage from "./pages/HomePage";
function App() {
  const [version, setVersion] = useState("");
  useEffect(() => {
    fetch("https://ddragon.leagueoflegends.com/api/versions.json")
      .then((response) => response.json())
      .then((data) => {
        setVersion(data[0]);
        document.cookie = `lol-information-version=${data[0]}; path=/`;
      });
  }, []);
  return (
    <VersionContext.Provider value={version}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hero-list" element={<HeroList />} />
          <Route path="/hero-detail/:heroname" element={<HeroDetails />} />
          <Route path="/item-list" element={<ItemList />} />
        </Routes>
      </Router>
    </VersionContext.Provider>
  );
}

export default App;
