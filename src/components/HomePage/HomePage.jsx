import { Home } from "./styles";
import imagem from "../../assets/HomeImage.svg";
import { ImgHome } from "./styles";
import InsertButton from "../InsertButton/button";

function HomePage({ setIsLogged }) {
  function login() {
    setIsLogged(true);
  }

  return (
    <Home>
      <div>
        <h2> <span>Neja</span> <span>Finance</span></h2>

        <h1>Centralize o controle das suas finanças</h1>

        <h1> de forma rápida e segura</h1>

        <InsertButton action={login} name="Iniciar" width={240} />
      </div>

      <ImgHome className="imagem" src={imagem} alt="" />
    </Home>
  );
}

export default HomePage;
