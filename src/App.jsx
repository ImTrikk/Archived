import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/Mainpage";
import { WriteMessage } from "./pages/WriteMessage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/write" element={<WriteMessage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
