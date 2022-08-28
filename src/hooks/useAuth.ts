import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../config/firebase-config";

interface UserProps {
  id: string;
  name: string;
  email: string;
  photo: string;
  token: string;
}

export interface chatProps {
  id: string;
  author: string;
  image: string;
  description: string;
  like: number;
  title: string;
}

export default function useAuth() {
  const [user, setUser] = useState({});
  const [chats, setChats] = useState<chatProps[]>([]);
  const [selectRoom, setSelectRoom] = useState("");
  const [text, setText] = useState<"próximo" | "Enviar">("próximo");
  const [choice, setChoice] = useState<"update" | "insert" | "">("");
  const [showForm, setShowForm] = useState(false);
  const [changes, setChanges] = useState<chatProps | {}>({});

  const navigate = useNavigate();

  useEffect(() => {
    const storage = sessionStorage.getItem("auth");
    if (storage) {
      const token = JSON.parse(storage);
      setUser(token);
    }
  }, []);

  async function logout() {
    await signOut(auth).then(
      function () {
        window.sessionStorage.removeItem("auth");
        setUser({});
        localStorage.removeItem("auth");
        navigate("/");
      },
      function (error) {
        // An error happened.
      }
    );
  }

  async function authUser(data: UserProps) {
    sessionStorage.setItem("auth", JSON.stringify(data));
    setUser(data);
    navigate("/");
  }

  async function login() {
    const result = await signInWithPopup(auth, provider);

    if (result) {
      result.user.getIdToken().then((token) => {
        let userGoogle = {
          id: `${result.user.uid}`,
          name: `${result.user.displayName}`,
          email: `${result.user.email}`,
          photo: `${result.user.photoURL}`,
          token: `${token}`,
        };
        authUser(userGoogle);
      });
    }
  }

  return {
    user,
    login,
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
  };
}
