import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/Mainpage";
import WriteMessage from "./components/WriteMessage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/write" element={<WriteMessage />} />
      </Routes>
    </Router>
  );
}

export default App;
