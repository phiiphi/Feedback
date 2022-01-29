import "./App.css";
import FeedbackData from "./Data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import React, { useState } from "react";
import Header from "./components/Header";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const onDelete = (id) => {
    if (window.confirm("are you sure to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="App">
      <Header />
      <FeedbackList feedback={feedback} onDelete={onDelete} />
    </div>
  );
}

export default App;
