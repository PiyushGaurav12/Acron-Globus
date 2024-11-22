import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";
import axios from "axios";
import "../css/QuestionList.css";

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow")
      .then((response) => setQuestions(response.data.items))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="question-list">
      {questions.map((question) => (
        <QuestionItem key={question.question_id} question={question} />
      ))}
    </div>
  );
};

export default QuestionList;
