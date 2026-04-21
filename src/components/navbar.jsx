import "./Dashboard.css"
import { useState } from "react";
import { logoutUser } from "../services/authServices";
import { useNavigate } from "react-router-dom";
import NotificationPopup from "../components/Notification";
import { useAuth } from "../context/authContext";


// logo profile pic home key section

export default function Navbar() {
  const { user } = useAuth();
  const [showPopup, setShowPopup] = useState(false);
  const [logoutMsg, setLogoutMsg] = useState("");
  const navigate = useNavigate();
  const handleLogout = async (e) => {
    e.preventDefault();
    const username = user?.user || "user";
    try {
      setLogoutMsg(`${username} is logged out`);
      setShowPopup(true);

      setTimeout(async () => {
        await logoutUser();
        navigate("/login");
        setShowPopup(false);
      }, 1200);
    } catch (error) {
      console.error(error);
      setLogoutMsg("Logout Failed! Try again");
      setShowPopup(true);
    }
  };
  return (
    <>
    {showPopup && <NotificationPopup value={logoutMsg} />}
      <div className="user-profile">
        <span>
          <img src="#" alt="profile photo" /> <p>{user?.user|| "Guest"}</p>
        </span>
      </div>
      <button className="button-type2" onClick={handleLogout}>
        logout
      </button>
    </>
  );
}
