import { useEffect, useState } from "react";
import "./styles.css";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function createRandomNumber(length) {
    return Math.floor(Math.random() * length);
  }

  function handleGenerateHexRandomColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[createRandomNumber(hex.length)];
    }

    setColor(hexColor);
  }
  function handleGenerateRgbRandomColor() {
    const r = createRandomNumber(256);
    const g = createRandomNumber(256);
    const b = createRandomNumber(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  useEffect(() => {
    if (typeOfColor == "hex") {
      handleGenerateHexRandomColor();
    } else {
      handleGenerateRgbRandomColor();
    }
  }, [typeOfColor]);

  return (
    <div className="content" style={{ backgroundColor: color }}>
      <div className="flex flex-col">
        <h1 className="header self-center rounded-lg my-2">Random Color</h1>
        <div className="button">
          <button
            onClick={() => {
              setTypeOfColor("hex");
            }}
          >
            Generate HEX Color
          </button>
          <button
            onClick={() => {
              setTypeOfColor("rgb");
            }}
          >
            Generate RGB Color
          </button>
          <button
            onClick={() => {
              typeOfColor == "hex"
                ? handleGenerateHexRandomColor()
                : handleGenerateRgbRandomColor();
            }}
          >
            Generate Random Color
          </button>
        </div>
      </div>
      <div className="h-svh flex items-center">
        <h1 className="text-white text-5xl opacity-70">
          {typeOfColor} : {color}
        </h1>
      </div>
    </div>
  );
}
