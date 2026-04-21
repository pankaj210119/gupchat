import { logoutUser } from "../services/authServices";
import { useNavigate } from "react-router-dom";
import NotificationPopup from "../components/Notification";
import { useState } from "react";
import { useAuth } from "../context/authContext";
export default function Dashboard() {
  const [showPopup, setShowPopup] = useState(false);
  const [logoutMsg, setLogoutMsg] = useState("");
  const { user } = useAuth();
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
      <h1>dashboard</h1>
      <button className="button-type2" onClick={handleLogout}>
        logout
      </button>
    </>
  );
}
