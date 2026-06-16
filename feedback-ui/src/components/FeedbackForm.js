import { useState } from "react";

function FeedbackForm({ fetchFeedbacks }) {
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    message: "",
    rating: 5,
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "http://127.0.0.1:8000/api/feedback/add/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            rating: Number(formData.rating),
          }),
        }
      );

      const data = await res.json();

      setResult(data.ai);

      fetchFeedbacks();

      setFormData({
        title: "",
        name: "",
        message: "",
        rating: 5,
      });
    } catch (err) {
      console.log(err);
      alert("Error submitting feedback");
    }

    setLoading(false);
  };

  const getColor = (sentiment) => {
    if (sentiment === "Positive") return "green";
    if (sentiment === "Negative") return "red";
    return "orange";
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Add Feedback</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <br /><br />

        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <br /><br />

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />
        <br /><br />

        <select name="rating" value={formData.rating} onChange={handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <br /><br />

        <button disabled={loading}>
          {loading ? "Analyzing..." : "Submit"}
        </button>
      </form>

      {result && (
        <div style={{ marginTop: "15px" }}>
          <h3>AI Result</h3>
          <p>
            Sentiment:{" "}
            <span style={{ color: getColor(result.sentiment) }}>
              {result.sentiment}
            </span>
          </p>
          <p>Emotion: {result.emotion}</p>
        </div>
      )}
    </div>
  );
}

export default FeedbackForm;