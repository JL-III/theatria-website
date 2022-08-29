import styled from "styled-components";

const StyledNavbar = styled.div`
  width: 20%;
  margin: auto;
  font-size: 2vh;
  display: flex;
  justify-content: space-around;
  padding: 10px;
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <div style={{ padding: "10%" }}>
        <a href="/" rel="noopener noreferrer">
          Home
        </a>
      </div>
      <div style={{ padding: "10%" }}>
        <a href="/#/voting">Voting</a>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
