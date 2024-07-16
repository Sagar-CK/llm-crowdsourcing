import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import "./posttask.css";

const PostTask = () => {
  const navigate = useNavigate();
  const [questionnaireResponses, setQuestionnaireResponses] = useState({
    question1: "",
    question2: "",
    question3: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuestionnaireResponses({
      ...questionnaireResponses,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Questionnaire Responses:", questionnaireResponses);
    // Add further form submission logic here

    // Redirect to the completion page
    navigate("/completion");
  };

  return (
    <Layout>
      <div id="post-task-container">
        <h1>Post Task Questionnaire</h1>
        <form onSubmit={handleSubmit} className="questionnaire">
          <div className="form-group">
            <label htmlFor="question1">
              Question 1: How did you find the task?
            </label>
            <input
              type="text"
              id="question1"
              name="question1"
              value={questionnaireResponses.question1}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="question2">
              Question 2: What did you learn from the task?
            </label>
            <input
              type="text"
              id="question2"
              name="question2"
              value={questionnaireResponses.question2}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="question3">
              Question 3: Any suggestions for improvement?
            </label>
            <input
              type="text"
              id="question3"
              name="question3"
              value={questionnaireResponses.question3}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </Layout>
  );
};

export default PostTask;
