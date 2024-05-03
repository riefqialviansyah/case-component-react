import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="content">
        <h1 className="header">Accordian</h1>
        {data &&
          data.map((item) => {
            return (
              <div key={item.id} className="box-content">
                <div className="box-question">
                  <h3>{item.question}</h3>
                  <span>+</span>
                </div>
                <div className="box-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
