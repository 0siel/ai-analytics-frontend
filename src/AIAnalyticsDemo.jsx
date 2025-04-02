import { useState } from "react";
import { marked } from "marked";

export default function AIAnalyticsDemo() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState("en");
  const [darkMode, setDarkMode] = useState(false);

  const translations = {
    en: {
      title: "AI Business Analytics Q&A",
      description:
        "Ask a question about the business data in the connected Google Sheet.",
      placeholder: "Ask a question...",
      button: "Ask AI",
      loading: "Analyzing...",
      responseTitle: "AI Response",
      toggleDark: darkMode ? "Light Mode" : "Dark Mode",
      languageLabel: "Language:",
    },
    es: {
      title: "Preguntas y Respuestas de Análisis de Negocios con IA",
      description:
        "Haz una pregunta sobre los datos de negocio en la Hoja de Google conectada.",
      placeholder: "Haz una pregunta...",
      button: "Preguntar a la IA",
      loading: "Analizando...",
      responseTitle: "Respuesta de la IA",
      toggleDark: darkMode ? "Modo Claro" : "Modo Oscuro",
      languageLabel: "Idioma:",
    },
  };

  const t = translations[language];

  const handleSubmit = async () => {
    setLoading(true);
    setAnswer("");

    const response = await fetch(
      "https://ai-analytics-backend-8j6m.onrender.com/api/analyze",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      }
    );

    const data = await response.json();
    setAnswer(data.answer);
    setLoading(false);
  };

  return (
    <div
      className={`min-h-screen p-4 space-y-4 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <div className="flex justify-between items-center">
        <div>
          <label className="mr-2 font-medium">{t.languageLabel}</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border rounded p-1"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-blue-500 text-white rounded-md p-2"
        >
          {t.toggleDark}
        </button>
      </div>

      <h1 className="text-2xl font-bold">{t.title}</h1>
      <p className="text-gray-600 dark:text-gray-300">{t.description}</p>

      <input
        type="text"
        placeholder={t.placeholder}
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="border border-gray-300 dark:border-gray-600 rounded-md p-2 w-full bg-inherit text-current"
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-blue-500 text-white rounded-md p-2 disabled:opacity-50"
      >
        {loading ? t.loading : t.button}
      </button>

      {answer && (
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow">
          <h2 className="font-semibold mb-2:font-semibold mb-2 text-gray-100 dark:text-gray-200">
            {t.responseTitle}
          </h2>
          <div
            className="text-gray-800 dark:text-gray-200"
            dangerouslySetInnerHTML={{ __html: marked(answer) }}
          />
        </div>
      )}
    </div>
  );
}
