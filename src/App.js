import { useState } from "react";
import Slide from "./Components/Slide";
import "./styles.css";

// set this as the
const data = [
  {
    id: 1,
    title: "Intro to React",
    description: "React is a Javascript UI library"
  },
  {
    id: 2,
    title: "Intro to Props",
    description: "Props are just properties"
  },
  {
    id: 3,
    title: "Sate management",
    description: "Learn how to manage state"
  }
];

export default function App() {
  // let count = 0;
  const [count, setCount] = useState(0);

  let next = () => {
    setCount(count + 1);
  };

  let prev = () => {
    setCount(count - 1);
  };
  // console.log(count);
  return (
    <div className="App">
      <h1 data-testid="header">Slides</h1>
      <Slide count={count} details={data} />
      <button disabled={count === 0} onClick={prev} data-testid="prev">
        Prev
      </button>
      <button disabled={count === 2} onClick={next} data-testid="next">
        Next
      </button>
    </div>
  );
}
