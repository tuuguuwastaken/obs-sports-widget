import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SportsCounter from "./components/sportsCounter";
import "./assets/main.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<SportsCounter />} path="/sports/counter"></Route>
        <Route path="/">Home</Route>
      </Routes>
    </Router>
  );
}

export default App;
