import { logoutUser } from "../services/authServices";
import NotificationPopup from "../components/Notification";
import Navbar from "../components/navbar/Navbar";
import { useState } from "react";
import { useAuth } from "../context/authContext";
import "./Dashboard.css";
import ChatBox from "../components/ChatBox";
import ChatList from "../components/ChatList";
export default function Dashboard() {
  return (
    <>
      <div className="dashboard-box">
        <Navbar />
        <div className="list-chat-container">
          <ChatList />
          <ChatBox />
        </div>
      </div>
    </>
  );
}
