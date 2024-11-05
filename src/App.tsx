import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import CountryDetail from "./pages/CountryDetail";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:countryCode" element={<CountryDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
