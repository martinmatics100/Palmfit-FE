import React, { useEffect, useState } from "react";
import "./Feedback.scss";

const FeedbackList = () => {
  const [feedbackData, setFeedbackData] = useState([
    {
      id: 1,
      userName: "John Doe",
      feedbackType: "Suggestion",
      dateSubmitted: new Date().toISOString(),
      status: "Pending",
    },
    {
      id: 2,
      userName: "Jane Smith",
      feedbackType: "Complaint",
      dateSubmitted: new Date().toISOString(),
      status: "Resolved",
    },
  ]);
  const [loading, setLoading] = useState(true);
  const [replyToId, setReplyToId] = useState(null); // Track which feedback is being replied to
  const [replyMessage, setReplyMessage] = useState(""); // Track the reply message

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await fetch("YOUR_BACKEND_API_ENDPOINT"); // Replace with your backend API endpoint
        const data = await response.json();
        setFeedbackData(data);
      } catch (error) {
        console.error("Error fetching feedback data:", error);
      } finally {
        setLoading(false);
      }
    };

    // Uncomment the following line to fetch real data when ready
    // fetchFeedback();
    setLoading(false); // Simulate loading complete for default data
  }, []);

  const handleReply = (id) => {
    setReplyToId(id); // Set the feedback ID to reply to
  };

  const handleResolve = (id) => {
    console.log("Resolve feedback ID:", id);
    // Implement resolve logic here
  };

  const handleSendReply = (id) => {
    console.log("Send reply to feedback ID:", id);
    console.log("Reply message:", replyMessage);
    // Implement logic to send the reply message to the user
    setReplyToId(null); // Clear the reply ID after sending
    setReplyMessage(""); // Clear the reply message after sending
  };

  if (loading) {
    return <div>Loading feedback...</div>; // Loading state
  }

  return (
    <div className="container my-5">
      <h3 className="mb-4">User Feedback</h3>
      <div className="table-responsive">
        <table className="table table-striped w-100">
          <thead className="table-light">
            <tr>
              <th>User Name</th>
              <th>Feedback Type</th>
              <th>Date Submitted</th>
              <th>Status</th>
              <th>Actions</th>
              <th>Reply</th>
            </tr>
          </thead>
          <tbody>
            {feedbackData.length > 0 ? (
              feedbackData.map((feedback) => (
                <tr key={feedback.id}>
                  <td>{feedback.userName}</td>
                  <td>{feedback.feedbackType}</td>
                  <td>
                    {new Date(feedback.dateSubmitted).toLocaleDateString()}
                  </td>
                  <td>
                    <span
                      className={`badge ${
                        feedback.status === "Resolved"
                          ? "bg-success"
                          : "bg-warning"
                      }`}
                    >
                      {feedback.status}
                    </span>
                  </td>
                  <td>
                    <button
                      className="btn btn-primary btn-sm me-2"
                      onClick={() => handleReply(feedback.id)}
                    >
                      Reply
                    </button>
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => handleResolve(feedback.id)}
                    >
                      Resolve
                    </button>
                  </td>
                  <td>
                    {replyToId === feedback.id && (
                      <div className="mt-2">
                        <textarea
                          className="form-control"
                          rows="2"
                          value={replyMessage}
                          onChange={(e) => setReplyMessage(e.target.value)}
                          placeholder="Type your reply here..."
                        />
                        <button
                          className="btn btn-secondary btn-sm mt-2"
                          onClick={() => handleSendReply(feedback.id)}
                        >
                          Send Reply
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No feedback available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeedbackList;
