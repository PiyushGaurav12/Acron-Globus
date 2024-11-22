import React from "react";
import "../css/QuestionItem.css";

const QuestionItem = ({ question }) => (
  <div className="question-item">
    <h3>{question.title}</h3>
    <p>
      {question.tags.map((tag) => (
        <span className="tag" key={tag}>{tag}</span>
      ))}
    </p>
    <div className="stats">
      <span>{question.score} votes</span>
      <span>{question.answer_count} answers</span>
      <span>{question.view_count} views</span>
    </div>
  </div>
);

export default QuestionItem;
