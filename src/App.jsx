import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/Mainpage";
import { WriteMessage } from "./pages/WriteMessage";
import { AllMessages } from "./pages/AllMessages";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/write" element={<WriteMessage />} />
          <Route path="/allmessages" element={<AllMessages />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
