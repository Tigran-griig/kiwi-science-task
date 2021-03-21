import React,{createContext,useContext,useState,useEffect} from 'react';
import firebase from './database/firebase'

export const ToggleProvider = createContext()
export const ToggleProviderAuth = createContext()

export const useMyContext = () =>{
    return useContext(ToggleProvider)
}
export const useMyContextAuth = () =>{
    return useContext(ToggleProviderAuth)
}
const Context = ({ children }) => {
    const [isAuth,setIsAuth] = useState(false)

    const toggle = (auth) => setIsAuth(auth)

    // useEffect(()=>{
    //     if(firebase.auth().currentUser){
    //         setIsAuth(true)
    //     }else {
    //         setIsAuth(false)
    //     }
    // },[firebase.auth().currentUser])
    return (
        <ToggleProvider.Provider value={isAuth}>
                <ToggleProviderAuth.Provider value={toggle}>
                   { children }
                </ToggleProviderAuth.Provider>
        </ToggleProvider.Provider>
    );
};

export default Context;