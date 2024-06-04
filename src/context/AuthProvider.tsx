import React , { useState } from 'react';

export const AuthContext = React.createContext<any>(null);

type Props = {
    children: React.ReactNode | JSX.Element
}

const AuthProvider = ( { children }: Props ) => {
    const [auth , setAuth] = useState({});

    return (
        <AuthContext.Provider value={{auth , setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;