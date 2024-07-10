import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HeroDetails from "./pages/HeroDetails";
import HeroList from "./pages/HeroList";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HeroList />} />
        <Route path="/hero-detail" element={<HeroDetails />} />
      </Routes>
    </Router>
  );
}

export default App;