import styled from "styled-components";

const StyledNavbar = styled.div`
  width: 20%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  padding: 10px;
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <div>
        <a href="./" rel="noopener noreferrer">
          Home
        </a>
      </div>
      <div>
        <a href="./voting">Voting</a>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
