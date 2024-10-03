import React from "react";
import "./styles.css";

export const Card = ({
  id,
  question,
  answer,
  showAnswer = false,
  onShowAnswer,
}) => {
  return (
    <div className="card-container">
      <div className={showAnswer ? "card-question-selected" : "card-question"}>
        <h5>{question}</h5>
        <div style={{ cursor: "pointer" }} onClick={() => onShowAnswer(id)}>
          {showAnswer ? "-" : "+"}
        </div>
      </div>
      {showAnswer && <div>{answer}</div>}
    </div>
  );
};
