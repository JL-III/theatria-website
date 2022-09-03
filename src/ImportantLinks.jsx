import styled from "styled-components";

const StyledLinkDiv = styled.div`
  width: fit-content;
  margin: auto;
  background: linear-gradient(rgba(2, 2, 2, 0.5), rgba(39, 39, 39, 0.5));
  color: white;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 6%;
  padding-right: 6%;
  border-radius: 10px;
  border: 2px solid #d50c24;
  font-size: 2vh;
  display: flex;
  justify-content: space-evenly;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

const ImportantLinks = () => {
  return (
    <>
      <StyledLinkDiv>
        <div style={{ padding: "1%" }}>
          <a
            className="button-49"
            href="https://docs.playtheatria.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wiki
          </a>
        </div>
        <div style={{ padding: "1%" }}>
          <a
            className="button-49"
            href="https://discord.gg/xegrV85Au4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </a>
        </div>
        <div style={{ padding: "1%" }}>
          <a
            className="button-49"
            href="https://store.playtheatria.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Features
          </a>
        </div>
        <div style={{ padding: "1%" }}>
          <a
            className="button-49"
            href="https://map.playtheatria.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dynmap
          </a>
        </div>
        <div style={{ padding: "1%" }}>
          <a
            className="button-49"
            href="https://www.instagram.com/theatriaofficial/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
        <div style={{ padding: "1%" }}>
          <a
            className="button-49"
            href="https://shopdb.playtheatria.com/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            ShopDB
          </a>
        </div>
      </StyledLinkDiv>
    </>
  );
};

export default ImportantLinks;
