import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [arrSelected, setArrSelected] = useState([]); // for multiple selection
  const [isMultiple, setIsMultiple] = useState(false); // for multiple selection

  function handlerSingleSelection(id) {
    if (selected === id) {
      setSelected(null);
    } else {
      setSelected(id);
    }
  }

  function handlerMultipleSelection(id) {
    let cpyArrSelected = [...arrSelected];
    const idxOfCurrentId = cpyArrSelected.indexOf(id);

    if (idxOfCurrentId === -1) {
      cpyArrSelected.push(id);
    } else {
      cpyArrSelected.splice(idxOfCurrentId, 1);
    }

    setArrSelected(cpyArrSelected);
  }
  return (
    <>
      <div className="contentAccordian">
        <h1 className="header" style={{ color: "black" }}>
          Accordian
        </h1>
        {isMultiple ? (
          <>
            <div
              onClick={() => {
                setIsMultiple(false);
                setArrSelected([]);
              }}
              className="btn"
            >
              Allow Multiple Selection
            </div>
          </>
        ) : (
          <>
            <div
              onClick={() => {
                setIsMultiple(true);
                setSelected(null);
              }}
              className="btn"
            >
              Disable multiple Selection
            </div>
          </>
        )}
        {data && data.length > 0 ? (
          data.map((item) => {
            return (
              <div key={item.id} className="box-content">
                <div
                  onClick={() => {
                    if (isMultiple) {
                      handlerMultipleSelection(item.id);
                    } else {
                      handlerSingleSelection(item.id);
                    }
                  }}
                  className="box-question"
                >
                  <h3 className="question">{item.question}</h3>
                  <span>+</span>
                </div>
                {selected === item.id || arrSelected.indexOf(item.id) != -1 ? (
                  <div className="box-answer">
                    <p>{item.answer}</p>
                  </div>
                ) : null}
              </div>
            );
          })
        ) : (
          <div>No data found</div>
        )}
      </div>
    </>
  );
}
