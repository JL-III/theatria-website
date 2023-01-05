import News from "../News";

const Home = () => {
  return (
    <>
      <h1 style={{ fontSize: "5vh" }}>Theatria</h1>
      <h2 style={{ fontSize: "3.5vh" }}>mc.playtheatria.com</h2>
        <a style={{ fontSize: "3.5vh" }} href={"https://discord.gg/xegrV85Au4"}> Discord </a>
      <div>
        <News></News>
      </div>
    </>
  );
};

export default Home;
