"use client";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { App } from "../Layout";

export const Context = createContext({ user: {} });
export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    try{
      fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setUser(data.user);
      });
    }
    catch(error){
      console.log(error);
    }
    
  }, []);

  return (
    <Context.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const LogoutButton = () => {
  const { user, setUser } = useContext(Context);
  const logoutHandler = async () => {
    try {
      const res = await fetch("/api/auth/logout");
      const data = await res.json();

      if (!data.success) toast.error(data.message);
      setUser({});
      toast.success(data.message);
    } catch (error) {
      toast.error(data.message);
    }
  };
  const ThemeToggler = useContext(App);

  const router = useRouter();
  return (
    <>
      {user._id ? (
        <button className="btn" onClick={logoutHandler} style={{
          color: 'white',
          backgroundColor: ThemeToggler.theme=='light' ? 'white':'black',
        }}>
          LogOut
        </button>
      ) : (
        <button className="btn" onClick={() => router.push("/login")} style={{
          color: 'white',
          backgroundColor: ThemeToggler.theme=='light' ? 'white':'black',
        }}>LogIn</button>
      )}
    </>
  );
};

