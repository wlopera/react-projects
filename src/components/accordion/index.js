import React, { useState } from "react";
import { data } from "./data";
import { Card } from "./Card";

import "./styles.css";

export const Accordion = () => {
  const [listDisplay, setListDisplay] = useState(["1"]);
  const [enableMultiple, setEnabledMultiple] = useState(false);
  const records = data;

  const handleSetListDisplay = (id) => {
    if (enableMultiple) {
      let list = [...listDisplay];
      if (listDisplay.includes(id)) {
        list = list.filter((item) => item !== id);
      } else {
        list.push(id);
      }
      setListDisplay(list);
    } else {
      setListDisplay([id]);
    }
  };

  const handleSetEnabledMultiple = () => {
    if (enableMultiple) {
      setListDisplay(["1"]);
    }
    setEnabledMultiple(!enableMultiple);
  };

  return (
    <div className="container">
      <button onClick={handleSetEnabledMultiple} className="button">
        {enableMultiple ? "Selección Multiple" : "Selección Simple"}
      </button>
      {records &&
        records.length > 0 &&
        records.map((record) => (
          <Card
            key={record.id}
            id={record.id}
            question={record.question}
            answer={record.answer}
            showAnswer={listDisplay.includes(record.id)}
            onShowAnswer={handleSetListDisplay}
          />
        ))}
    </div>
  );
};
