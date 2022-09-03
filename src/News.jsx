import styled from "styled-components";

const StyledDiv = styled.div`
  position: inherit;
  margin: auto;
  width: 70vw;
  height: fit-content;
  border-radius: 10px;
  border: 2px solid #d50c24;
  color: white;
  background: linear-gradient(rgba(2, 2, 2, 0.5), rgba(39, 39, 39, 0.5));
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;
const News = () => {
  return (
    <StyledDiv>
      <h1 style={{ fontSize: "4vh" }}>About us</h1>
      <h2 style={{ fontSize: "2.5vh" }}>
        We are an economy survival server with a focus on fair gameplay.
      </h2>
      <div style={{ width: "75%", margin: "auto", fontSize: "2vh" }}>
        Theatria was created for two main reasons:
      </div>
      <div style={{ width: "75%", margin: "auto", fontSize: "1.5vh" }}>
        Create a stable server where people can build safely for years to come.
      </div>
      <div style={{ width: "75%", margin: "auto", fontSize: "1.5vh" }}>
        Provide an economy that isn't tainted with p2w aspects.
      </div>
      <div
        style={{
          width: "75%",
          margin: "auto",
          fontSize: "1.5vh",
          padding: "2vh",
        }}
      >
        -------------------------------------------
      </div>
      <div
        style={{
          width: "75%",
          margin: "auto",
          fontSize: "3vh",
          padding: "2vh",
        }}
      >
        Is Theatria right for you?
      </div>
      <div
        style={{
          width: "75%",
          margin: "auto",
          fontSize: "1.5vh",
          padding: "2vh",
        }}
      >
        Theatria is for anyone who wants a stable place to build with reliable
        server performance and uptime. It is for anyone who doesn't want to be
        subjected to money grabbing tactics found on many Minecraft servers.
        Theatria is a place where you can participate in an economy without
        being put at a disadvantage with wallet warriors. If these things sound
        good to you, then you are in the right place!
      </div>
    </StyledDiv>
  );
};

export default News;
