import "./App.css";
import Home from "./pages/Home_page/Home";
import RedirectPage from "./pages/OtherPage/RedirectPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/RedirectPage" element={<RedirectPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
