import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/UserContext";
import { S_HOME } from "./style";
import Message from "../../components/messages/Message";

interface chat {
  id: string;
  author: string;
  image: string;
  description: string;
  like: number;
  title: string;
}

export default function Home() {
  const { user, chats, setChats, selectRoom, setSelectRoom } =
    useContext(Context);
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState(false);  

  useEffect(() => {
    listRooms();
  }, []);

  async function listRooms() {
    const data = await fetch(`${process.env.REACT_APP_API_HOST}/rooms`);
    const res = await data.json();
    setRooms(res.rooms);
  }

  async function enterRoom(room: string) {
    const data = await fetch(`${process.env.REACT_APP_API_HOST}/all/${room}`);
    const res = await data.json();
    setChats(res);
    setSelectRoom(room);
  }

  async function addLike(id: string) {
    if (!user.token) {
      setError(true);
    } else {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_HOST}/like/${id}/${selectRoom}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        });
      
        const message = await res.json()
        console.log(message);
        
        enterRoom(selectRoom);
      } catch (error) {
        setError(true);
      }
    }
  }

  async function deleteMessage(id: string) {
    if (!user.token) {
      setError(true);
    } else {
      try {
        await fetch(
          `${process.env.REACT_APP_API_HOST}/delete/${id}/${selectRoom}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        enterRoom(selectRoom);
      } catch (error) {
        setError(true);
      }
    }
  }

  return (
    <S_HOME>
      {error && <></>}
      <aside>
        <h2>Salas</h2>
        <div>
          {rooms.length &&
            rooms.map((room) => (
              <div key={room} onClick={() => enterRoom(room)}>
                <span>{room}</span>
              </div>
            ))}
        </div>
      </aside>
      <main>
        {chats &&
          chats.map((chat: chat) => (
            <Message
              chat={chat}
              handleLike={addLike}
              handleDelete={deleteMessage}
              key={chat.id}
            />
          ))}
      </main>
    </S_HOME>
  );
}
