//create a context component called store for reactjs
import React, { createContext, useReducer } from "react";
import { reducer, initialState } from "../Reducers/reducer";


//create a context component called store for reactjs
export const Store = createContext();

//change display name to store
Store.displayName = "GameStore";

//create a useStore function that uses the store component
export const useStore = () => React.useContext(Store);

//create a provider component called storeprovider for reactjs
export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state)    
    return (
        <Store.Provider value={{ state, dispatch }}>
            
            {children}
        </Store.Provider>
    );

};

