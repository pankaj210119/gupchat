import {useAuth} from "../context/authContext"

export default function ChatBox() {
    const {user} = useAuth();
    return <>
    <div className="chat-container">
        <div className="chat-nav">
        <div className="profile-img">
            <span><img src="#" alt="profileDp" />
            {user?.displayName || "Guest"}</span> 
        </div>
        </div>

    </div>
    </>
}