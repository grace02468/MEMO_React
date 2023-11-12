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
      {/* <div className="app"> */}
      <Nav />
      <Routes>
        {/* 加上exact，網址要嚴格等於根目錄/才符合條件，可避免組件同時渲染(現在好像不加也行) */}
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/memo" element={<Memo />} />
      </Routes>
      {/* </div> */}
    </Router>
  );
};

const Home = () => {
  // const imgStyle = {
  //   width: "250px",
  // };
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
