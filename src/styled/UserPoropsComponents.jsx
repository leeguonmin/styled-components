import styled from "styled-components";

// 실제 DOM에 전달하면 안되는 prop 은 별도로 전개한다
const CustomDiv = ({ dark, ...props }) => {
  return <div {...props}>{dark ? "Dark mode " : "Light mode "}버튼</div>;
};

const StyledDiv = styled(CustomDiv)`
  background-color: ${(props) => (props.dark ? "black" : "while")};
  color: ${(props) => (props.dark ? "white" : "black")};
`;

export default StyledDiv;
