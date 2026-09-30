import { useState, useEffect, useCallback } from "react";
import { Menu, X, Sun, Moon, ChevronLeft, ChevronRight, GraduationCap, Printer, Search, Check } from "lucide-react";
import { chapters } from "./data/chapters";
import Accueil from "./chapters/Accueil";
import ReseauxOSI from "./chapters/ReseauxOSI";
import NiveauxWeb from "./chapters/NiveauxWeb";
import SecuriteWeb from "./chapters/SecuriteWeb";
import IntroTheorie from "./chapters/IntroTheorie";
import InstallXampp from "./chapters/InstallXampp";
import ChapitreHTML from "./chapters/ChapitreHTML";
import ChapitreCSS from "./chapters/ChapitreCSS";
import ChapitreJS from "./chapters/ChapitreJS";
import ChapitrePHP from "./chapters/ChapitrePHP";
import ChapitreMySQL from "./chapters/ChapitreMySQL";
import ProjetFinal from "./chapters/ProjetFinal";
import ProjetPython from "./chapters/ProjetPython";

const chapterComponents: Record<string, React.FC> = {
  accueil: Accueil,
  reseaux: ReseauxOSI,
  niveaux: NiveauxWeb,
  securite: SecuriteWeb,
  intro: IntroTheorie,
  xampp: InstallXampp,
  html: ChapitreHTML,
  css: ChapitreCSS,
  javascript: ChapitreJS,
  php: ChapitrePHP,
  mysql: ChapitreMySQL,
  projet: ProjetFinal,
  python: ProjetPython,
};

export default function App() {
  const [currentChapter, setCurrentChapter] = useState("accueil");
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [completedChapters, setCompletedChapters] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem("completedChapters");
      return saved ? new Set(JSON.parse(saved)) : new Set<string>();
    } catch {
      return new Set<string>();
    }
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("completedChapters", JSON.stringify([...completedChapters]));
  }, [completedChapters]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentChapter]);

  const navigateTo = useCallback((chapterId: string) => {
    // La progression est manuelle (bouton "Marquer comme terminé") : pas d'auto-validation
    setCurrentChapter(chapterId);
    setSidebarOpen(false);
  }, []);

  const markCompleted = useCallback(() => {
    if (currentChapter !== "accueil") {
      setCompletedChapters((prev) => new Set([...prev, currentChapter]));
    }
  }, [currentChapter]);

  const filteredChapters = chapters.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  const currentIndex = chapters.findIndex((c) => c.id === currentChapter);
  const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;

  const progress = Math.round((completedChapters.size / (chapters.length - 1)) * 100);

  const CurrentComponent = chapterComponents[currentChapter] || Accueil;

  return (
    <div className="min-h-screen flex" style={{ background: "var(--bg-primary)", color: "var(--text-primary)" }}>
      {/* Overlay mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:sticky top-0 left-0 h-screen w-72 z-50 flex flex-col transition-transform duration-300 md:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
        style={{ background: "var(--bg-sidebar)", borderRight: "1px solid var(--border-color)" }}
      >
        {/* Sidebar Header */}
        <div className="p-5 flex items-center justify-between" style={{ borderBottom: "1px solid var(--border-color)" }}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }}>
              <GraduationCap size={22} color="white" />
            </div>
            <div>
              <h2 className="font-bold text-sm leading-tight">Services Internet</h2>
              <p className="text-xs" style={{ color: "var(--text-secondary)" }}>TP Complet</p>
            </div>
          </div>
          <button className="md:hidden p-1" onClick={() => setSidebarOpen(false)} aria-label="Fermer le menu">
            <X size={20} />
          </button>
        </div>

        {/* Progress */}
        <div className="px-5 py-3" style={{ borderBottom: "1px solid var(--border-color)" }}>
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span style={{ color: "var(--text-secondary)" }}>Progression</span>
            <span className="font-bold" style={{ color: "var(--accent)" }}>{progress}%</span>
          </div>
          <div className="w-full h-2 rounded-full overflow-hidden" style={{ background: "var(--border-color)" }}>
            <div className="progress-bar h-full rounded-full" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-2" aria-label="Chapitres du cours">
          <div className="px-5 pb-2">
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm" style={{ background: "var(--bg-primary)", border: "1px solid var(--border-color)" }}>
              <Search size={16} style={{ color: "var(--text-secondary)" }} />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Rechercher un chapitre…"
                aria-label="Rechercher un chapitre"
                className="bg-transparent outline-none flex-1 text-sm"
              />
            </div>
          </div>
          {filteredChapters.map((ch, i) => (
            <button
              key={ch.id}
              onClick={() => navigateTo(ch.id)}
              className={`sidebar-link w-full text-left px-5 py-3 flex items-center gap-3 text-sm ${currentChapter === ch.id ? "active" : ""}`}
            >
              <span className="text-lg">{ch.icon}</span>
              <span className="flex-1">{ch.title}</span>
              {completedChapters.has(ch.id) && <span className="text-green-500 text-xs">✓</span>}
              {i > 0 && !completedChapters.has(ch.id) && currentChapter !== ch.id && (
                <span className="w-5 h-5 rounded-full text-xs flex items-center justify-center" style={{ background: "var(--border-color)", color: "var(--text-secondary)" }}>
                  {i}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Theme Toggle */}
        <div className="p-4" style={{ borderTop: "1px solid var(--border-color)" }}>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all"
            style={{ background: "var(--bg-primary)", border: "1px solid var(--border-color)" }}
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            {darkMode ? "Mode clair" : "Mode sombre"}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        {/* Top bar */}
        <header
          className="sticky top-0 z-30 flex items-center justify-between px-4 md:px-8 py-3 backdrop-blur-md"
          style={{ background: "var(--bg-primary)ee", borderBottom: "1px solid var(--border-color)" }}
        >
          <div className="flex items-center gap-3">
            <button className="md:hidden p-2 rounded-lg no-print" style={{ background: "var(--bg-secondary)" }} onClick={() => setSidebarOpen(true)} aria-label="Ouvrir le menu">
              <Menu size={20} />
            </button>
            <div>
              <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                Chapitre {currentIndex + 1} / {chapters.length}
              </p>
              <h1 className="font-bold text-lg">
                {chapters[currentIndex]?.icon} {chapters[currentIndex]?.title}
              </h1>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4 no-print">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all hover:opacity-80"
              style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}
              aria-label="Imprimer ou exporter le chapitre en PDF"
            >
              <Printer size={16} /> Imprimer / PDF
            </button>
            <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <div className="w-2 h-2 rounded-full bg-green-500" />
              {completedChapters.size}/{chapters.length - 1} complétés
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-8">
          <CurrentComponent />

          {/* Validation manuelle de progression */}
          {currentChapter !== "accueil" && (
            <div className="text-center mt-12 no-print">
              {completedChapters.has(currentChapter) ? (
                <p className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold" style={{ background: "#dcfce7", color: "#166534", border: "1px solid #86efac" }}>
                  <Check size={18} /> Chapitre terminé ✓ — passez au suivant !
                </p>
              ) : (
                <button
                  onClick={markCompleted}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)" }}
                  aria-label="Marquer ce chapitre comme terminé"
                >
                  <Check size={18} /> J'ai terminé ce chapitre (quiz ≥ 60% conseillé)
                </button>
              )}
            </div>
          )}

          {/* Navigation bottom */}
          <div className="flex items-center justify-between mt-12 pt-6" style={{ borderTop: "1px solid var(--border-color)" }}>
            {prevChapter ? (
              <button
                onClick={() => navigateTo(prevChapter.id)}
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all hover:opacity-80"
                style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}
              >
                <ChevronLeft size={18} />
                <div className="text-left">
                  <p className="text-xs" style={{ color: "var(--text-secondary)" }}>Précédent</p>
                  <p className="text-sm font-semibold">{prevChapter.icon} {prevChapter.title}</p>
                </div>
              </button>
            ) : <div />}

            {nextChapter ? (
              <button
                onClick={() => navigateTo(nextChapter.id)}
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-white transition-all hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }}
              >
                <div className="text-right">
                  <p className="text-xs opacity-80">Suivant</p>
                  <p className="text-sm font-semibold">{nextChapter.icon} {nextChapter.title}</p>
                </div>
                <ChevronRight size={18} />
              </button>
            ) : (
              <div className="px-5 py-3 rounded-xl text-center" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
                <p className="text-sm font-semibold">🎉 Fin du TP !</p>
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>Félicitations !</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center py-6 text-sm" style={{ color: "var(--text-secondary)", borderTop: "1px solid var(--border-color)" }}>
          <p>📚 TP Services Internet & Développement Web – Formation pratique complète</p>
          <p className="text-xs mt-1">HTML • CSS • JavaScript • PHP • MySQL • XAMPP</p>
        </footer>
      </main>
    </div>
  );
}
