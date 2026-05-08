import { BookOpen, Code, Database, Globe, Monitor, Server, Rocket, CheckCircle } from "lucide-react";

export default function Accueil() {
  const techs = [
    { icon: "🌐", name: "HTML5", desc: "Structure des pages", color: "#e34c26" },
    { icon: "🎨", name: "CSS3", desc: "Design & mise en page", color: "#264de4" },
    { icon: "⚡", name: "JavaScript", desc: "Interactivité", color: "#f7df1e" },
    { icon: "🐘", name: "PHP", desc: "Logique serveur", color: "#777bb4" },
    { icon: "🗄️", name: "MySQL", desc: "Base de données", color: "#e48e00" },
    { icon: "⚙️", name: "XAMPP", desc: "Serveur local", color: "#fb7a24" },
  ];

  const objectives = [
    "Comprendre le fonctionnement d'Internet et du Web",
    "Maîtriser le modèle Client / Serveur",
    "Installer et configurer un serveur local (XAMPP)",
    "Créer des pages web avec HTML5 et CSS3",
    "Ajouter de l'interactivité avec JavaScript",
    "Développer une logique serveur avec PHP",
    "Gérer une base de données MySQL",
    "Créer une application web complète (CRUD)",
  ];

  return (
    <div className="fade-in">
      {/* Hero */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ background: "var(--accent-light)", color: "var(--accent)" }}>
          <Rocket size={16} /> TP Complet – Formation Pratique
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Services Internet &<br />
          <span style={{ color: "var(--accent)" }}>Développement Web</span>
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
          Un parcours pédagogique complet pour apprendre à créer des applications web de A à Z.
          Du navigateur à la base de données, maîtrisez toute la chaîne du développement web.
        </p>
      </div>

      {/* Result Preview */}
      <div className="mb-12 p-6 rounded-2xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Monitor size={24} style={{ color: "var(--accent)" }} />
          🎯 Résultat final attendu
        </h2>
        <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
          À la fin de ce TP, vous aurez créé une <strong>application web de gestion d'étudiants</strong> complète avec :
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {["Formulaire d'inscription (HTML)", "Design professionnel (CSS)", "Validation des données (JavaScript)", "Traitement serveur (PHP)", "Stockage en base de données (MySQL)", "Opérations CRUD complètes"].map((item, i) => (
            <div key={i} className="flex items-center gap-2 p-3 rounded-xl" style={{ background: "var(--bg-primary)" }}>
              <CheckCircle size={18} style={{ color: "var(--success)" }} />
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies */}
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Code size={24} style={{ color: "var(--accent)" }} />
        Technologies utilisées
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
        {techs.map((tech) => (
          <div key={tech.name} className="tech-card">
            <div className="text-4xl mb-2">{tech.icon}</div>
            <h3 className="font-bold text-lg" style={{ color: tech.color }}>{tech.name}</h3>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{tech.desc}</p>
          </div>
        ))}
      </div>

      {/* Objectives */}
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <BookOpen size={24} style={{ color: "var(--accent)" }} />
        Objectifs pédagogiques
      </h2>
      <div className="space-y-3 mb-12">
        {objectives.map((obj, i) => (
          <div key={i} className="flex items-start gap-3 p-4 rounded-xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
            <div className="step-number text-sm">{i + 1}</div>
            <span className="font-medium pt-1">{obj}</span>
          </div>
        ))}
      </div>

      {/* Prérequis */}
      <div className="p-6 rounded-2xl mb-8" style={{ background: "linear-gradient(135deg, #3b82f620, #8b5cf620)", border: "1px solid var(--accent)" }}>
        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
          <Server size={24} style={{ color: "var(--accent)" }} />
          Prérequis
        </h2>
        <ul className="space-y-2" style={{ color: "var(--text-secondary)" }}>
          <li className="flex items-center gap-2"><Globe size={16} /> Un ordinateur avec un navigateur web moderne</li>
          <li className="flex items-center gap-2"><Database size={16} /> Aucune connaissance préalable en programmation requise</li>
          <li className="flex items-center gap-2"><Rocket size={16} /> De la motivation et de la curiosité !</li>
        </ul>
      </div>
    </div>
  );
}
