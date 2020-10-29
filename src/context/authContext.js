import React,{useState} from 'react';
import { useHistory } from "react-router-dom";



export const AuthContext = React.createContext({
    isAuth: false,
    signin: () => { },
});



const AuthContextProvider = props => {

    const history = useHistory()

    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem('isAuth'));
    
    const loginHandler = () => {
        setIsAuthenticated(true);
        sessionStorage.setItem('isAuth', true);
        history.push('/')
    }
    

    return (<AuthContext.Provider value={{
        isAuth: isAuthenticated,
        signin: loginHandler,
    }}>
        {props.children}
    </AuthContext.Provider>)
}

export default AuthContextProvider


