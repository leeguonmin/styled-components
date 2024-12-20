import styled from "styled-components";

// 컴포넌트의 prop을 통해 전달된 속성들을 이용 ,
// 동적 스타일링이 가능

const Button = styled.button`
  color: ${(props) => (props.dark ? "white" : "black")};
  background: ${(props) => (props.dark ? "black" : "white")};
`;

function PropsComponents() {
  // 렌러딩부터
  return (
    <div>
      <Button>일반 버튼</Button>
      <Button dark>Dark 버튼</Button>
    </div>
  );
}

export default PropsComponents;
