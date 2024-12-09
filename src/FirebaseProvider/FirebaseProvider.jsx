import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import { axiosPublic } from "../Hooks/useAxiosPublic";
import axios from "axios";




export const AuthContext = createContext(null)

const FirebaseProvider = ({children}) => {

    const [user,setUser] = useState(null);
    // console.log(user)
    
    const [loading, setLoading] = useState(true)
    // console.log(loading);
    
    
const gooleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

    const createUser =(email, password) =>{
        setLoading(true)
         return createUserWithEmailAndPassword(auth, email, password)
    }

    const sinInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //goole singin
    const gooleSingIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, gooleProvider)
    }
    //github sinIn
    const githubSingIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    //logUot
    const logOut = () => {
     setUser(null)
     return signOut(auth)
    }




    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log(currentUser)
            setUser(currentUser);
            if (currentUser) {
                // get token and store client
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                            setLoading(false);
                        }
                    })
            }
            else {
                // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
                localStorage.removeItem('access-token');
                setLoading(false);
            }

        });
        return () => unsubscribe();
    },[])
    
    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (user) => {
    //         const useremail = user?.email;
    //         console.log(user)
    //         const loggedUser = {email:user?.email};
    //         if (user && user?.email) {
    //             setUser(user)
    //             setLoading(false)
    //         } 
    //         if(user && user?.email){

    //             axios.post('http://localhost:5000/jwt',loggedUser,{withCredentials: true})
    //             .then(res => {
    //                 console.log('token response', res.data);
    //             })
    //         }
    //         else{
    //             axios.post('http://localhost:5000/log',loggedUser,{
    //                 withCredentials:true
    //             })
    //             .then(res =>{
    //                 console.log(res.data)
    //             })
    //         }
    //     });
    //     return () => unsubscribe();
    // },[])


    const allvalue = {
        createUser,
        githubSingIn,
        gooleSingIn,
        sinInUser,
        logOut,
        loading,
        user,
     }
     
    return (
        <AuthContext.Provider value={allvalue}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;