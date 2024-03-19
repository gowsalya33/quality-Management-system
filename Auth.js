import React,{useContext,useState} from 'react'
const AuthContext=React.createContext(null)
export const Auth=({children})=>{
    const[user,setuser]=useState(null)
    const login=(user)=>{
        setuser(user)
    }
    const logout=()=>{
        setuser(null)
    }
    return (
        <div>
            <AuthContext.Provider value={{user,login,logout}}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}
export const useAuth=()=>{
    return useContext(AuthContext)
}




