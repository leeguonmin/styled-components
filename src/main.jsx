import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx"; //root 끌어와서

//                                    받아온 root 를 render 한다는 뜻임
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
