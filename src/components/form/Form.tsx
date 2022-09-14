import { useContext, useState } from "react";
import { Context } from "../../context/UserContext";
import { S_FORM } from "./style";
import { chatProps } from "../../hooks/useAuth";

export default function Form(props: {
  chat: chatProps;
  handleClick: () => Promise<void>;
}) {
  const { text, setText, setShowForm, changes, setChanges } =
    useContext(Context);
  const chat = props.chat;
  const [pageForm, setPageForm] = useState(0);

  function handleChange(e: any) {
    setChanges({ ...changes, [e.target.name]: e.target.value });
  }

  function changeImage(e: any) {
    let fReader = new FileReader();

    fReader.readAsDataURL(e.target.files[0]);
    fReader.onloadend = (event: any) => {
      setChanges({ ...changes, image: event.target.result });
    };
  }

  function close() {
    setShowForm(false);
    setText("próximo");
    setPageForm(0);
  }

  async function send(e: any) {
    e.preventDefault();
    if (pageForm === 0) {
      setText("Enviar");
      setPageForm(1);
    } else {
      props.handleClick();
      setShowForm(false);
      setText("próximo");
      setPageForm(0);
    }
  }

  return (
    <S_FORM>
      <div>
        <span onClick={close}>x</span>
        {text === "próximo" ? (
          <>
            <label htmlFor="image">
              <p>Alterar imagem:</p>
              <img src={`${changes.image}`} alt={chat.author} />
            </label>
            <input
              type="file"
              name="image"
              id="image"
              onChange={(e) => changeImage(e)}
            />
          </>
        ) : (
          <>
            <p>Titulo:</p>
            <textarea
              name="title"
              value={changes.title}
              onChange={handleChange}
              id="title"
            />
            <p>Descrição:</p>
            <textarea
              name="description"
              value={changes.description}
              onChange={handleChange}
              id="description"
            />
          </>
        )}

        <button type="submit" onClick={send}>
          {text}
        </button>
      </div>
    </S_FORM>
  );
}
