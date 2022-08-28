import { createContext } from "react";

import useAuth from "../hooks/useAuth";

const Context = createContext();

const UserProvider = ({ children }) => {
  const {
    login,
    user,
    logout,
    chats,
    setChats,
    selectRoom,
    setSelectRoom,
    text,
    setText,
    showForm,
    setShowForm,
    choice,
    setChoice,
    changes,
    setChanges,
  } = useAuth();

  return (
    <Context.Provider
      value={{
        login,
        user,
        logout,
        chats,
        setChats,
        selectRoom,
        setSelectRoom,
        text,
        setText,
        showForm,
        setShowForm,
        choice,
        setChoice,
        changes,
        setChanges,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, UserProvider };
