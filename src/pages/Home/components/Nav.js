import React from "react";
import { Link } from "react-router-dom"; // Link => 從哪裡點擊
import "../nav.css";
import { auth } from "../../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import logo from "../../../image/logo.png";

const Nav = () => {
  const [user, setUser] = React.useState(null);
  const navigate = useNavigate();

  const logoStyle = {
    width: "32px",
  };

  React.useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <nav className="nav-bar">
      <ul className="nav-links">
        <li className="logo">
          <img src={logo} alt="logo" style={logoStyle} />
        </li>
        <li className="register">
          {user ? (
            <>
              <Link
                className="register-link"
                onClick={() =>
                  signOut(auth)
                    .then(() => {
                      navigate("/");
                    })
                    .catch((error) => {
                      // An error happened.
                    })
                }
              >
                Sign out
              </Link>
            </>
          ) : (
            <>
              <Link className="register-link" to="/login">
                Sign up / Log in
              </Link>
            </>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
