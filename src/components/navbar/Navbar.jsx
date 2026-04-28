import { useState } from "react";
import { logoutUser } from "../../services/authServices";
import { useNavigate } from "react-router-dom";
import NotificationPopup from "../Notification";
import Profilepopup from "../Profilepopup";
import { useAuth } from "../../context/authContext";
import "./Navbar.module.css";

// logo profile pic home key section

export default function Navbar() {
  const { user } = useAuth();
  const [showPopup, setShowPopup] = useState(false);
  const [logoutMsg, setLogoutMsg] = useState("");
  const [profilePopup, setProfilePopup] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    const username = user?.name || "user";

    setLogoutMsg(`Logging out ${username} `);
    setShowPopup(true);

    setTimeout(() => {
      logoutUser()
        .then(() => {
          navigate("/login");
          setShowPopup(false);
        })
        .catch((error) => {
          console.error(error);
          setLogoutMsg("Logout Failed! Try again");
          setShowPopup(true);
        });
    }, 1200);
  };
  return (
    <>
      {showPopup && <NotificationPopup value={logoutMsg} />}
      {profilePopup && <Profilepopup />}
      <div className="navbar">
        <div className="app-logo.div">
          <img className="app-logo" src="/logo.png" alt="app logo" />
        </div>
        <div className="nav-left">
          <img
            src="#"
            alt="profile photo"
            onClick={() => setProfilePopup(true)}
          />
          <span>
            <p>{user?.name || "guest"}</p>
          </span>
        </div>
        <div className="nav-right">
          <button onClick={handleLogout} type="button" className="btn-type2">
            logout
          </button>
        </div>
      </div>
    </>
  );
}
