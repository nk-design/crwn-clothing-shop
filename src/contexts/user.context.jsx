import { createContext, useEffect, useReducer } from "react";
import {createUserDocumentFromAuth, onAuthStateChangeListener} from "../utils/firebase.utils"

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: "SET_CURRENT_USER"
}

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state, action) => {
    const {type, payload} = action;

    switch(type){
        case "SET_CURRENT_USER":
            return {
                currentUser: payload
            }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`)
    }
}

export const UserProvider = ({children}) => {
    const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE)    

    const setCurrentUser = (user) => {
        dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user})
    }

    const value = {currentUser, setCurrentUser};

    useEffect(()=>{
        const unsubscribe = onAuthStateChangeListener((user)=>{
            if(user){
                createUserDocumentFromAuth(user)
            }

            setCurrentUser(user);
            console.log(user);
        })

        return unsubscribe;

    },[])

    return(
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}