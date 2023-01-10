import News from "../News";
import Swiper from "../swiper";
import './Home.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord} from "@fortawesome/free-brands-svg-icons";


const Home = () => {
  return (
    <>

      <span style={{ fontSize: "3.5vh", marginTop:"1vh", marginRight:"1vw", color:"#FFB800" }}>mc.playtheatria.com</span><button onClick={() =>  navigator.clipboard.writeText('mc.playtheatria.com')}>
        Copy to Clipboard
    </button>
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
