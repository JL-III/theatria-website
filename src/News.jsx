import styled from "styled-components";

const StyledDiv = styled.div`
  position: inherit;
  margin: auto;
  width: 33%;
  height: 50vh;
  border-radius: 10px;
  border: 2px solid #d50c24;
  color: white;
  background: linear-gradient(rgba(2, 2, 2, 0.5), rgba(39, 39, 39, 0.5));
`;
const News = () => {
  return <StyledDiv>News article</StyledDiv>;
};

export default News;
