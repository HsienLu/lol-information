import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HeroDetails from "./pages/HeroDetails";
import HeroList from "./pages/HeroList";
import { VersionContext } from "./context/versionContext";
import { useEffect, useState } from "react";
function App() {
  const [version,setVersion] = useState("")
  useEffect(() => {
    fetch("https://ddragon.leagueoflegends.com/api/versions.json")
      .then((response) => response.json())
      .then((data) => {
        setVersion(data[0]);
      });
      console.log("version",version)
  },[])
  return (
    <VersionContext.Provider value={version}>
    <Router>
      <Header />
      <Routes>
        <Route path="/hero-list" element={<HeroList />} />
        <Route path="/hero-detail/:heroname" element={<HeroDetails />} />
      </Routes>
    </Router>
    </VersionContext.Provider>
  );
}

export default App;