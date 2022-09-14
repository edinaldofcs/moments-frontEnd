import { S_NAV } from "./style";
import { useContext } from "react";
import { Context } from "../../context/UserContext";
import { chatProps } from "../../hooks/useAuth";
import Form from "../form/Form";

export default function NavBar() {
  const {
    login,
    user,
    logout,
    showForm,
    setShowForm,
    choice,
    setChoice,
    changes,
    setChanges,
    selectRoom,
    setSelectRoom,
    setChats,
  } = useContext(Context);

  const chat: chatProps = {
    id: "",
    author: user.name,
    image: "https://ismap.com.br/img/add-image.eaa5cfff.png",
    description: "",
    like: 0,
    title: "",
  };

  function handleLogin() {
    login();
  }
  function handleLogOut() {
    logout();
  }

  async function enterRoom(room: string) {
    const data = await fetch(`${process.env.REACT_APP_API_HOST}/all/${room}`);
    const res = await data.json();
    setChats(res);
    setSelectRoom(room);
  }

  async function insert() {
    try {
      await fetch(`${process.env.REACT_APP_API_HOST}/insert/${selectRoom}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ ...changes }),
      });
      enterRoom(selectRoom);
    } catch (error) {}
  }

  async function show() {
    setShowForm(true);
    setChoice("insert");
    setChanges(chat);
  }

  return (
    <S_NAV>
      {user.name ? (
        <div>
          <img src={user.photo} alt={user.name} />
          <span>{user.name}</span>
        </div>
      ) : (
        <div>Registre seus momentos</div>
      )}
      <h1>Moments</h1>
      <ul>
        {user.name ? (
          <>
            <li onClick={show}>Postar</li>
            <li onClick={handleLogOut}>Logout</li>
          </>
        ) : (
          <li onClick={handleLogin}>Login</li>
        )}
      </ul>
      {showForm && choice === "insert" && (
        <Form chat={changes} handleClick={insert} />
      )}
    </S_NAV>
  );
}
