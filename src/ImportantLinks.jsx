import styled from "styled-components";

const StyledLinkDiv = styled.div`
  width: 80vw;
  margin: auto;
  background: linear-gradient(rgba(2, 2, 2, 0.5), rgba(39, 39, 39, 0.5));
  color: white;
  padding-bottom: 10px;
  padding-top: 10px;
  border-radius: 10px;
  border: 2px solid #d50c24;
  font-size: 1vw;
  display: flex;
  justify-content: space-evenly;
`;

const ImportantLinks = () => {
  return (
    <>
      <StyledLinkDiv>
        <div>
          <a
            href="https://docs.playtheatria.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wiki
          </a>
        </div>
        <div>
          <a
            href="https://discord.gg/xegrV85Au4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </a>
        </div>
        <div>
          <a
            href="https://store.playtheatria.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Feature Shop
          </a>
        </div>
        <div>
          <a
            href="https://map.playtheatria.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dynmap
          </a>
        </div>
        <div>
          <a
            href="https://www.instagram.com/theatriaofficial/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
        <div>
          <a
            href="https://shopdb.playtheatria.com/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shop DB
          </a>
        </div>
      </StyledLinkDiv>
    </>
  );
};

export default ImportantLinks;
