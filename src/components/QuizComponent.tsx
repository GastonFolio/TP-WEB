import { useState } from "react";
import { CheckCircle, XCircle, RotateCcw, Trophy } from "lucide-react";
import type { Quiz } from "../data/chapters";

interface QuizComponentProps {
  quizzes: Quiz[];
  title: string;
}

export default function QuizComponent({ quizzes, title }: QuizComponentProps) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleSelect = (idx: number) => {
    if (showResult) return;
    setSelected(idx);
    setShowResult(true);
    if (idx === quizzes[currentQ].correct) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQ < quizzes.length - 1) {
      setCurrentQ((c) => c + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      setFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentQ(0);
    setSelected(null);
    setShowResult(false);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    const percent = Math.round((score / quizzes.length) * 100);
    return (
      <div className="my-8 p-8 rounded-2xl text-center" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
        <Trophy size={64} className="mx-auto mb-4" style={{ color: percent >= 70 ? "var(--success)" : "var(--warning)" }} />
        <h3 className="text-2xl font-bold mb-2">Quiz terminé !</h3>
        <p className="text-lg mb-2" style={{ color: "var(--text-secondary)" }}>
          Score : <strong>{score}/{quizzes.length}</strong> ({percent}%)
        </p>
        <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
          {percent === 100 ? "🎉 Parfait ! Vous maîtrisez le sujet !" : percent >= 70 ? "👏 Bien joué ! Continuez ainsi !" : "📚 Révisez les concepts et réessayez !"}
        </p>
        <button onClick={handleReset} className="flex items-center gap-2 mx-auto px-6 py-3 rounded-xl text-white font-semibold" style={{ background: "var(--accent)" }}>
          <RotateCcw size={18} /> Recommencer
        </button>
      </div>
    );
  }

  const q = quizzes[currentQ];

  return (
    <div className="my-8 p-6 rounded-2xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold">🧠 Quiz – {title}</h3>
        <span className="text-sm px-3 py-1 rounded-full font-semibold" style={{ background: "var(--accent-light)", color: "var(--accent)" }}>
          {currentQ + 1}/{quizzes.length}
        </span>
      </div>

      <p className="text-lg font-medium mb-4">{q.question}</p>

      <div className="space-y-3">
        {q.options.map((opt, idx) => (
          <div
            key={idx}
            onClick={() => handleSelect(idx)}
            className={`quiz-option flex items-center gap-3 ${showResult && idx === q.correct ? "correct" : ""} ${showResult && idx === selected && idx !== q.correct ? "incorrect" : ""}`}
          >
            <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: "var(--accent-light)", color: "var(--accent)" }}>
              {String.fromCharCode(65 + idx)}
            </span>
            <span className="flex-1">{opt}</span>
            {showResult && idx === q.correct && <CheckCircle size={20} style={{ color: "var(--success)" }} />}
            {showResult && idx === selected && idx !== q.correct && <XCircle size={20} style={{ color: "var(--error)" }} />}
          </div>
        ))}
      </div>

      {showResult && (
        <div className="mt-4 p-4 rounded-xl" style={{ background: selected === q.correct ? "#dcfce733" : "#fef2f233", border: `1px solid ${selected === q.correct ? "var(--success)" : "var(--error)"}` }}>
          <p className="font-semibold mb-1">{selected === q.correct ? "✅ Correct !" : "❌ Incorrect"}</p>
          <p style={{ color: "var(--text-secondary)" }}>{q.explanation}</p>
        </div>
      )}

      {showResult && (
        <button onClick={handleNext} className="mt-4 px-6 py-2.5 rounded-xl text-white font-semibold" style={{ background: "var(--accent)" }}>
          {currentQ < quizzes.length - 1 ? "Question suivante →" : "Voir le résultat"}
        </button>
      )}
    </div>
  );
}
