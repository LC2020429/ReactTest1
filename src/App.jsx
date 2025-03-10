import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const formattedCount = count < 10 ? `0${count}` : count;

  return (
    <div className="app-container">
      <video autoPlay loop muted className="background-video">
        <source src="/assets/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="counter-container">
        <button
          onClick={() => setCount((prevCount) => (prevCount + 1) % 100)}
          className="counter"
        >
          {formattedCount}
        </button>
      </div>
    </div>
  );
}

export default App;
