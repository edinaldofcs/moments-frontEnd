import { S_MESSAGE } from "./style";
import { useContext } from "react";
import { Context } from "../../context/UserContext";
import { FaEdit, FaHandHoldingHeart, FaTrashAlt } from "react-icons/fa";
import { chatProps } from "../../hooks/useAuth";
import Form from "../form/Form";

export default function Message(props: {
  chat: chatProps;
  handleLike: (id: string) => Promise<void>;
  handleDelete: (id: string) => Promise<void>;
}) {
  const chat = props.chat;
  const {
    user,
    setChats,
    selectRoom,
    setSelectRoom,
    showForm,
    setShowForm,
    choice,
    setChoice,
    changes,
    setChanges,
  } = useContext(Context);
  
  async function enterRoom(room: string) {
    const data = await fetch(`http://localhost:5000/instant/all/${room}`);
    const res = await data.json();
    setChats(res);
    setSelectRoom(room);
  }

  async function editPost() {
    try {
      await fetch(`http://localhost:5000/instant/update/${changes.id}/${selectRoom}`, {
        method: "PATCH",
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

  return (
    <S_MESSAGE>
      <p>
        <b>Usuario:</b> {chat.author}
      </p>
      <p>
        <b>Titulo:</b> {chat.title}
      </p>
      <img src={`${chat.image}`} alt={chat.author} />
      <p>
        <b>Descrição:</b>
      </p>
      <p>{chat.description}</p>
      <div>
        <div>
          <FaHandHoldingHeart onClick={() => props.handleLike(chat.id)} />
          <span>{chat.like}</span>
        </div>
        {user.name === chat.author && (
          <div>
            <FaEdit
              onClick={() => {
                setShowForm(true);
                setChoice("update");
                setChanges(chat)
              }}
            />
            <FaTrashAlt onClick={() => props.handleDelete(chat.id)} />
          </div>
        )}
      </div>
      {showForm && choice === "update" && (
        <Form chat={changes} handleClick={editPost} />
      )}
    </S_MESSAGE>
  );
}
