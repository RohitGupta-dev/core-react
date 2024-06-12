import { useState } from "react";


function App() {
  const [color, SetColor] = useState("olive")
  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={() => SetColor("red")}
            style={{ backgroundColor: "red" }}>red</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={() => SetColor("green")}
            style={{ backgroundColor: "green" }}>green</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={() => SetColor("yellow")}
            style={{ backgroundColor: "yellow" }}>yellow</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={() => SetColor("blue")}
            style={{ backgroundColor: "blue" }}>blue</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={() => SetColor("pink")}
            style={{ backgroundColor: "pink" }}>pink</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={() => SetColor("grey")}
            style={{ backgroundColor: "grey" }}>grey</button>

          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            onClick={() => SetColor("white")}
            style={{ backgroundColor: "white" }}>white</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={() => SetColor("Lavender")}
            style={{ backgroundColor: "Lavender" }}>Lavender</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={() => SetColor("black")}
            style={{ backgroundColor: "black" }}>black</button>

          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            onClick={() => SetColor("orange")}
            style={{ backgroundColor: "orange" }}>orange</button>

        </div>
      </div>
    </div>
  );
}

export default App;
