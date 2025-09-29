import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Services/Firebase/firebase.config";

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)

    // create new users
    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // login user
    const logIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {
        signUp,
        loading,
        logIn
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;