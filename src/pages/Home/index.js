import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Login from "./components/Login";
import Nav from "./components/Nav";
import Memo from "../Memo";
import home_img from "../../image/home_img.svg";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Nav />
      <Home />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/memo" element={<Memo />} />
      </Routes>
    </Router>
  );
};

const Home = () => {
  const navigate = useNavigate();
  function goToLogin() {
    navigate("/login");
  }

  return (
    <div className="homepage">
      <div className="home_content">
        <h1>
          PLAN YOUR DAY,
          <br />
          QUICKLY.
        </h1>
        <h3>Your own personal memo hub.</h3>
        <button onClick={goToLogin}>get started</button>
      </div>
      <div className="home_content">
        <img className="home_img" src={home_img} alt="logo" />
      </div>
    </div>
  );
};

export default App;
