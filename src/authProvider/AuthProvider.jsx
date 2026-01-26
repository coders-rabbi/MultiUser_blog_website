import React, { createContext, useEffect, useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    onAuthStateChanged, // এটি যোগ করা হয়েছে
    signOut
} from "firebase/auth";
import app from "../firebase/firebase.config";

// ১. Context তৈরি করুন
export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // অ্যারে [] এর বদলে null ব্যবহার করুন
    const [loading, setLoading] = useState(true);

    // ২. গুগলের মাধ্যমে লগইন
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const createAccount = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        return signOut(auth);
    };

    // ৩. ইউজারের অবস্থা পর্যবেক্ষণ (Observer)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        loading,
        createAccount,
        login,
        googleLogin,
        logOut
    };

    // ৪. সঠিক রিটার্ন পদ্ধতি
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;