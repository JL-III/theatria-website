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
      <h1 style={{ fontSize: "4vh" }}>Theatria - an economy survival server.</h1>
      <div style={{ width: "75%", margin: "auto", fontSize: "2vh" }}>
          Are you looking for a Minecraft server that offers a small, friendly community and a relaxed atmosphere, but still has plenty of fun activities? Look no further! Our server is the perfect place for you! With a variety of minigames, custom maps, and events, you'll never be bored. Plus, our friendly staff and players make sure everyone feels welcome and respected. So come join us and experience the best of both worlds - a peaceful, cozy environment and plenty of fun!
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
    </StyledDiv>
  );
};

export default News;
