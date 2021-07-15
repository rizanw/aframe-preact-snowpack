import { h, render } from "preact";
import "preact/devtools";
import "./styles/index.css";
import "aframe";
import App from "./App";

render(
  <div className="app">
    <App />
  </div>,
  document.getElementById("root")
);
