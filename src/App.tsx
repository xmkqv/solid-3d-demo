import { JSX } from "solid-js";
import Perspective from "./Perspective";
import ThreeJs from "./ThreeJs";

import "./app.css";

const App = () => {
  return (
    <div class="app-container">
      <div class="side-panel">
        <Perspective />
      </div>
      <div class="side-panel">
        <ThreeJs />
      </div>
    </div>
  );
};

export default App;
