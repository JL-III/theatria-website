import News from "../News";
import Swiper from "../swiper";
import './Home.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord} from "@fortawesome/free-brands-svg-icons";


const Home = () => {
  return (
    <>
      <h1 style={{ fontSize: "5vh" }}>Theatria</h1>
      <h2 style={{ fontSize: "3.5vh" }}>mc.playtheatria.com</h2>
        <div>
        </div>
      <div>
          <a  style={{ fontSize: "3.5vh" }} href="https://discord.gg/xegrV85Au4"><h2 className="discordLink" style={{ display:"inline" }}><FontAwesomeIcon icon={faDiscord}/></h2></a>
          <Swiper></Swiper>
        <News></News>
      </div>
    </>
  );
};


export default Home;
