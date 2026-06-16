import { useState } from "react";
import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api";

function AddFeedback() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post(`${BASE_URL}/feedback/add/`, {
      name,
      message,
      rating,
    });

    alert("Feedback submitted!");
  };

  return (
    <div>
      <h2>Add Feedback</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <textarea
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />

        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddFeedback;