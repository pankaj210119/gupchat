import { useAuth } from "../context/authContext";
import "../pages/Dashboard.css"
export default function Profilepopup() {
  const { user } = useAuth();
  return (
    <div className="profile-popup">
      <img src="#" alt="profile photo" />
      <div className="user-info">
        <h4>User: {user?.displayName || "Guest"}</h4>
        <h4>Email: {user?.email ?? "No email"}</h4>
      </div>
      <div className="actions">
        <button className="btn-type3">Edit profile</button>
        <button className="btn-typee">Logout</button>
      </div>
    </div>
  );
}
