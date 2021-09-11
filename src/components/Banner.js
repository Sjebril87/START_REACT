import logo from "../assets/logo.png";
import "../styles/banner.css";
import Recommandation from "./Recommandations";

function Banner() {
  const title = "La maison jungle";
  return (
    <div className="lmj-banner">
      <img src={logo} alt="La maison jungle" className="lmj-logo" />
      <h1 className="lmj-title">{title}</h1>
      <div>
        <Recommandation />
      </div>
    </div>
  );
}

export default Banner;
