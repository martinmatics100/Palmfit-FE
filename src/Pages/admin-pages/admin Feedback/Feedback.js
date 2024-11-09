import React from "react";
import FeedbackList from "./FeedbackList";

const Feedback = () => {
  const feedbackData = [
    {
      id: 1,
      userName: "John Doe",
      feedbackType: "Bug Report",
      dateSubmitted: "2024-07-28",
      status: "Pending",
    },
    {
      id: 2,
      userName: "Jane Smith",
      feedbackType: "Feature Request",
      dateSubmitted: "2024-07-30",
      status: "Resolved",
    },
    // Add more feedback data as needed
  ];
  return (
    <div>
      <FeedbackList feedbackData={feedbackData} />
    </div>
  );
};

export default Feedback;
