import WelcomeImage from "../images/welcome.png";
import "../style/welcome.css";

function Welcome() {
 
  return (
    <main>
      <div className="container-welcome">
        <div className="image-container">
          <img src={WelcomeImage} alt="Welcome" />
        </div>
        <div className="text-container">
          <div className="title-style">
            <h1>¡Bienvenido al desafío del conocimiento!</h1>
            <span>¿Listo para poner a prueba tus conocimientos? ¡Comienza ahora y diviértete aprendiendo!</span>
          </div>
          <div className="container-button">
            <button>Iniciar</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Welcome;

  