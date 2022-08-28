import { S_ERROR } from "./style";
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <S_ERROR>
      <h2>Uhmmm...Parece que esta página não existe :(</h2>
      <Link to="/">Voltar para home</Link>
    </S_ERROR>
  );
}
