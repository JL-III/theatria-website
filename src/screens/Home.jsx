import News from "../News";
import Swiper from "../swiper";
import './Home.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord} from "@fortawesome/free-brands-svg-icons";


const Home = () => {
  return (
    <>



      <div>
          <Swiper></Swiper>
          <div style={{paddingBottom: "5vh"}}>
              <div>
                  <span className="blink_me" style={{ fontSize: "3.5vh", marginRight:"1vw", background: "#560000", borderRadius:"10px", color:"#FFB800" }}>mc.playtheatria.com</span><button onClick={() =>  navigator.clipboard.writeText('mc.playtheatria.com')}>
                  Copy to Clipboard
              </button>
              </div>
              <a  style={{ fontSize: "3.5vh", textDecoration:"none" }} href="https://discord.gg/xegrV85Au4"><h2 className="discordLink" style={{ display:"inline" }}>Join our Discord ➠<FontAwesomeIcon icon={faDiscord}/></h2></a>
          </div>
          <News></News>
      </div>
    </>
  );
};


export default Home;
