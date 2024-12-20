// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import StyledComponents from "/src/styled/StyledComponents";
import PropsComponents from "/src/styled/PropsComponents";
import StyledDiv from "/src/styled/UserPoropsComponents";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <h1>StyledComponents</h1>
      <StyledComponents />
      {/* <h1>PropsComponents</h1>
      <PropsComponents /> */}
      <h1>UserPoropsComponents</h1>
      <StyledDiv dark={false} />
      <StyledDiv dark={true} />
    </div>
  );
}

export default App;
