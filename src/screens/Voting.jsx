const Voting = () => {
  return (
    <>
      <h1>Voting Links</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "space-evenly",
          background:
            "linear-gradient(rgba(2, 2, 2, 0.5), rgba(39, 39, 39, 0.5))",
          borderRadius: "10px",
          width: "33%",
          margin: "auto",
          border: "2px solid #d50c24",
        }}
      >
        <a
          href="https://topminecraftservers.org/vote/18343"
          target="_blank"
          rel="noopener noreferrer"
          style={{ padding: "10px" }}
        >
          Top Minecraft Servers
        </a>
        <a
          href="https://minecraftservers.org/server/616834"
          target="_blank"
          rel="noopener noreferrer"
          style={{ padding: "10px" }}
        >
          MinecraftServers.org
        </a>
        <a
          href="https://minecraft-server-list.com/server/478026/vote/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ padding: "10px" }}
        >
          Minecraft Server List
        </a>
        <a
          href="https://minecraft-mp.com/server/284521/vote/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ padding: "10px" }}
        >
          Minecraft Multiplayer
        </a>
        <a
          href="https://topg.org/minecraft-servers/server-630138"
          target="_blank"
          rel="noopener noreferrer"
          style={{ padding: "10px" }}
        >
          Top G
        </a>
        <a
          href="https://www.planetminecraft.com/server/theatria/vote/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ padding: "10px" }}
        >
          Planet Minecraft
        </a>
      </div>
    </>
  );
};

export default Voting;
