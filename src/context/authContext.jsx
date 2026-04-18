import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase";
import { currentTimestamp } from "firebase/firestore/pipelines";

// create Context 
const AuthContext = createContext();

// Provider component 
export function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        // giving current user
        const unsubscribe = onAuthStateChanged(auth,(currentUser) => {set(currentUser);})
    },[]);

    return 
    <AuthContext.Provider value={{user}}>
        {!loading && children}
    </AuthContext.Provider>
}
export function useAuth() {
    return useContext(AuthContext);
}