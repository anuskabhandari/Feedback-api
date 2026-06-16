import { useEffect, useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";

const BASE_URL = "http://127.0.0.1:8000/api";

function App() {
  const [allFeedbacks, setAllFeedbacks] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // FETCH ALL
  const fetchFeedbacks = async () => {
    const res = await fetch(`${BASE_URL}/feedback/`);
    const data = await res.json();
    setAllFeedbacks(data);
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  // SEARCH (DOES NOT DESTROY ORIGINAL DATA)
  useEffect(() => {
    const delay = setTimeout(() => {
      if (search.trim() === "") {
        fetchFeedbacks();
      } else {
        fetch(`${BASE_URL}/feedback/search/?q=${search}`)
          .then((res) => res.json())
          .then((data) => setAllFeedbacks(data));
      }
    }, 300);

    return () => clearTimeout(delay);
  }, [search]);

  // FILTER ONLY ON UI
  const filteredFeedbacks = allFeedbacks.filter((item) => {
    if (filter === "All") return true;
    return item.sentiment === filter;
  });

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>AI Feedback System</h1>

      <FeedbackForm fetchFeedbacks={fetchFeedbacks} />

      <hr />

      {/* SEARCH + FILTER */}
      <input
        placeholder="Search feedback..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", width: "250px" }}
      />

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ marginLeft: "10px", padding: "8px" }}
      >
        <option value="All">All</option>
        <option value="Positive">Positive</option>
        <option value="Negative">Negative</option>
        <option value="Neutral">Neutral</option>
      </select>

      <button
        onClick={() => {
          setSearch("");
          setFilter("All");
          fetchFeedbacks();
        }}
        style={{ marginLeft: "10px", padding: "8px" }}
      >
        Reset
      </button>

      {/* LIST */}
      <FeedbackList
        feedbacks={filteredFeedbacks}
        fetchFeedbacks={fetchFeedbacks}
      />
    </div>
  );
}

export default App;