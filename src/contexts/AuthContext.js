import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
const user = {
  email: "llsdkf@hd.com",
  password: "12345",
};

export const AuthContextProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState("");

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
