import { useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, useerroe] = useState('');
    const [loading, setLoding] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsinggoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .finally(() => {
                setLoding(false)
            })
    }
    const signoutuser = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
            console.log('Sign-out successful.')
        }).catch((error) => {
            // An error happened.
        });
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log(user);
                setUser(user);
            } else {
                setUser({})
            }
            setLoding(false)
        })
    }, [])
    return {
        signInUsinggoogle,
        user,
        error,
        signoutuser,
        loading
    }

}
export default useFirebase;