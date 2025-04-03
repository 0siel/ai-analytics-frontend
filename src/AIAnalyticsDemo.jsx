import { useState } from "react";
import { marked } from "marked";
import { useNavigate } from "react-router-dom";

export default function AIAnalyticsDemo() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState("en");
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

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

        {/* View data */}
        <div className="text-center mt-4">
          {/* Table icon*/}
          <a
            href="https://docs.google.com/spreadsheets/d/1EZRn6JUyjsLha0deegBTLvslDs0t0ZDQsKX0Of0UD-c/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            View Data
            <img
              src="https://img.icons8.com/fluent/512/google-sheets--v2.png"
              alt="Google Sheets"
              className="inline-block w-4 h-4 ml-2"
            />
          </a>
          <a
            href="https://www.appsheet.com/start/498c0ee8-f043-4696-8a27-9f309a75ec8e"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline ml-4"
          >
            App
            <img
              src="https://cdn-icons-png.freepik.com/512/5058/5058674.png?q=tbn:ANd9GcTZsQCAaPYyUrQfHWDjmkZUcvN9BAcD5HaYAbNqngLkhE0xYm7DHM2D74fGxUz2mDoEaPo&usqp=CAU"
              alt="AppSheet"
              className="inline-block w-5 h-6 ml-2"
            />
          </a>
        </div>

        <div className="text-center mt-4">
          <button
            onClick={() => navigate("/work-with-me")}
            className="mt-4 bg-blue-500 text-white rounded-md px-6 py-3"
          >
            Quiero hacer un proyecto!
          </button>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 dark:text-gray-400 mt-8">
          <p>
            Powered by{" "}
            <a
              href="https://openai.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              OpenAI
            </a>
          </p>
          <span className="text-gray-400"> </span>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            My porfolio:{" "}
            <a
              href="https://portfolio-seven-rose-88.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              osiel.dev
            </a>
          </p>
          <p>
            Whatsapp Me:{" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="inline-block w-4 h-4 mr-1"
            />
            <a
              href="https://wa.me/524428703447?text=Hola Osiel,%20%20quiero%20desarrollar%20un%20proyecto!%20"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              442 870 3447
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
