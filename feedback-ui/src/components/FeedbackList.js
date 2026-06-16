import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api";

function FeedbackList({ feedbacks, fetchFeedbacks }) {

  // DELETE FEEDBACK
  const deleteFeedback = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/feedback/delete/${id}/`);
      fetchFeedbacks(); // refresh after delete
    } catch (err) {
      console.log(err);
      alert("Delete failed");
    }
  };

  // COLOR BASED ON SENTIMENT
  const getColor = (sentiment) => {
    if (sentiment === "Positive") return "green";
    if (sentiment === "Negative") return "red";
    return "orange";
  };

  return (
    <div>
      <h2>All Feedback</h2>

      {feedbacks.length === 0 ? (
        <p>No feedback found</p>
      ) : (
        feedbacks.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              margin: "10px",
              padding: "10px",
              borderRadius: "6px",
            }}
          >
            <h4>{item.title}</h4>

            <p>
              <strong>Name:</strong> {item.name}
            </p>

            <p>
              <strong>Message:</strong> {item.message}
            </p>

            <p>
              <strong>Rating:</strong> {item.rating}
            </p>

            <p>
              <strong>Sentiment:</strong>{" "}
              <span style={{ color: getColor(item.sentiment) }}>
                {item.sentiment}
              </span>
            </p>

            <p>
              <strong>Emotion:</strong> {item.emotion}
            </p>

            <small>
              {item.created_at
                ? new Date(item.created_at).toLocaleString()
                : ""}
            </small>

            <br />

            <button
              onClick={() => deleteFeedback(item.id)}
              style={{
                marginTop: "8px",
                padding: "5px 10px",
                background: "red",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default FeedbackList;