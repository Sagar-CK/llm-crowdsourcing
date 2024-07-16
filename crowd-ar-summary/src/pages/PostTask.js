import React, { useState } from "react";
import Layout from "./Layout";

const PostTask = () => {
  const [questionnaire1, setQuestionnaire1] = useState("");
  const [questionnaire2, setQuestionnaire2] = useState("");

  const handleQuestionnaire1Change = (e) => {
    setQuestionnaire1(e.target.value);
  };

  const handleQuestionnaire2Change = (e) => {
    setQuestionnaire2(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Layout>
      <h1>Post Task</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="questionnaire1">Questionnaire 1:</label>
        <textarea
          id="questionnaire1"
          value={questionnaire1}
          onChange={handleQuestionnaire1Change}
        ></textarea>

        <label htmlFor="questionnaire2">Questionnaire 2:</label>
        <textarea
          id="questionnaire2"
          value={questionnaire2}
          onChange={handleQuestionnaire2Change}
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </Layout>
  );
};

export default PostTask;
