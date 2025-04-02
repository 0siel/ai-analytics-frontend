import { useState } from "react";
import { marked } from "marked";

export default function AIAnalyticsDemo() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setAnswer("");

    const response = await fetch("http://localhost:8000/api/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question }),
    });

    const data = await response.json();
    setAnswer(data.answer);
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">AI Business Analytics Q&A</h1>
      <p className="text-gray-600">
        Ask a question about the business data in the connected Google Sheet.
      </p>

      <input
        type="text"
        placeholder="Ask a question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="border border-gray-300 rounded-md p-2 w-full"
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-blue-500 text-white rounded-md p-2 disabled:opacity-50"
      >
        {loading ? "Analyzing..." : "Ask AI"}
      </button>

      {answer && (
        <div className="p-4 bg-gray-100 rounded-xl shadow">
          <h2 className="font-semibold mb-2">AI Response</h2>
          <div
            className="prose prose-sm"
            dangerouslySetInnerHTML={{ __html: marked(answer) }}
          />
        </div>
      )}
    </div>
  );
}
