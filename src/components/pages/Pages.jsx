import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../common/Header";
import Home from "../home/Home";

function Pages() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default Pages;
