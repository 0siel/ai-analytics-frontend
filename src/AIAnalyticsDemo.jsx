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
      className={`min-h-screen py-8 px-4 md:px-8 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Top controls */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <label className="font-medium">{t.languageLabel}</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="border rounded p-1 bg-inherit text-current"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-blue-500 text-white rounded-md px-4 py-2"
          >
            {t.toggleDark}
          </button>
        </div>

        {/* Title and Description */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-center">{t.title}</h1>
          <p className="text-center text-gray-600 dark:text-gray-300">
            {t.description}
          </p>
        </div>

        {/* Input Section */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder={t.placeholder}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-3 bg-inherit text-current"
          />
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full sm:w-auto bg-blue-500 text-white rounded-md px-6 py-3 disabled:opacity-50"
          >
            {loading ? t.loading : t.button}
          </button>
        </div>

        {/* Answer Section */}
        {answer && (
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              {t.responseTitle}
            </h2>
            <div
              className="text-gray-800 dark:text-gray-200"
              dangerouslySetInnerHTML={{ __html: marked(answer) }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
