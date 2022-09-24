import React, { useContext } from "react"

export const AuthContext = React.createContext({})
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  return <AuthContext.Provider value={{ auth: true }}>{children}</AuthContext.Provider>
}
