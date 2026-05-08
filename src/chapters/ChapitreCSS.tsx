import CodeBlock from "../components/CodeBlock";
import InfoBox from "../components/InfoBox";
import QuizComponent from "../components/QuizComponent";
import { quizzes } from "../data/chapters";

export default function ChapitreCSS() {
  return (
    <div className="fade-in space-y-10">
      <h1 className="text-3xl font-extrabold mb-2">🎨 CSS3 – Design & mise en page</h1>
      <p style={{ color: "var(--text-secondary)" }}>
        CSS (Cascading Style Sheets) permet de styliser vos pages HTML : couleurs, tailles, positions, animations... C'est l'habillage visuel de votre site.
      </p>

      <InfoBox type="tip" title="💡 Analogie">
        <p>Si HTML est le squelette de la maison, CSS est la peinture, la décoration et l'aménagement intérieur.</p>
      </InfoBox>

      {/* Styles de base */}
      <section id="styles">
        <h2 className="text-2xl font-bold mb-4">🖌️ Les bases du CSS</h2>

        <h3 className="text-lg font-bold mb-2">3 façons d'ajouter du CSS :</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
            <h4 className="font-bold text-sm mb-1" style={{ color: "var(--accent)" }}>1. Fichier externe ✅</h4>
            <p className="text-xs" style={{ color: "var(--text-secondary)" }}>Méthode recommandée</p>
            <code className="text-xs block mt-2">&lt;link rel="stylesheet" href="style.css"&gt;</code>
          </div>
          <div className="p-4 rounded-xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
            <h4 className="font-bold text-sm mb-1" style={{ color: "var(--warning)" }}>2. Balise style</h4>
            <p className="text-xs" style={{ color: "var(--text-secondary)" }}>Dans le head</p>
            <code className="text-xs block mt-2">&lt;style&gt; h1 {"{"} color: red; {"}"} &lt;/style&gt;</code>
          </div>
          <div className="p-4 rounded-xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
            <h4 className="font-bold text-sm mb-1" style={{ color: "var(--error)" }}>3. En ligne ❌</h4>
            <p className="text-xs" style={{ color: "var(--text-secondary)" }}>À éviter</p>
            <code className="text-xs block mt-2">&lt;h1 style="color: red"&gt;</code>
          </div>
        </div>

        <CodeBlock
          language="css"
          filename="style.css"
          code={`/* Sélecteur par balise */
h1 {
    color: #2563eb;          /* Couleur du texte */
    font-size: 2rem;         /* Taille de la police */
    font-weight: bold;       /* Graisse */
    text-align: center;      /* Alignement */
    margin-bottom: 20px;     /* Marge extérieure en bas */
}

/* Sélecteur par classe (.) */
.carte {
    background-color: #f8fafc;  /* Couleur de fond */
    border: 1px solid #e2e8f0;  /* Bordure */
    border-radius: 12px;        /* Coins arrondis */
    padding: 20px;              /* Marge intérieure */
    box-shadow: 0 4px 6px rgba(0,0,0,0.1); /* Ombre */
}

/* Sélecteur par ID (#) */
#titre-principal {
    font-size: 3rem;
    color: #1e293b;
}

/* Sélecteur multiple */
h1, h2, h3 {
    font-family: 'Arial', sans-serif;
}`}
        />

        <InfoBox type="info">
          <p><strong>Classe (.)</strong> = réutilisable sur plusieurs éléments. <strong>ID (#)</strong> = unique, pour un seul élément.</p>
        </InfoBox>
      </section>

      {/* Couleurs */}
      <section id="couleurs">
        <h2 className="text-2xl font-bold mb-4">🎨 Les couleurs</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
            <h4 className="font-bold mb-2">Par nom</h4>
            <div className="flex flex-wrap gap-2">
              {["red", "blue", "green", "orange", "purple"].map(c => (
                <span key={c} className="px-3 py-1 rounded text-white text-xs font-mono" style={{ background: c }}>{c}</span>
              ))}
            </div>
          </div>
          <div className="p-4 rounded-xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
            <h4 className="font-bold mb-2">Hexadécimal</h4>
            <div className="flex flex-wrap gap-2">
              {[["#3b82f6", "Bleu"], ["#ef4444", "Rouge"], ["#22c55e", "Vert"]].map(([c, _n]) => (
                <span key={c} className="px-3 py-1 rounded text-white text-xs font-mono" style={{ background: c }}>{c}</span>
              ))}
            </div>
          </div>
          <div className="p-4 rounded-xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
            <h4 className="font-bold mb-2">RGB / RGBA</h4>
            <code className="text-xs block" style={{ color: "var(--text-secondary)" }}>
              rgb(59, 130, 246)<br/>rgba(59, 130, 246, 0.5)
            </code>
          </div>
        </div>

        <CodeBlock
          language="css"
          filename="couleurs.css"
          code={`/* Propriétés de couleur importantes */
.element {
    color: #333;                  /* Couleur du texte */
    background-color: #f0f0f0;   /* Couleur de fond */
    border-color: #ddd;          /* Couleur de bordure */
    
    /* Dégradé */
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    
    /* Couleur avec transparence */
    background-color: rgba(59, 130, 246, 0.1);
}`}
        />
      </section>

      {/* Flexbox */}
      <section id="flexbox">
        <h2 className="text-2xl font-bold mb-4">📐 Flexbox – Mise en page moderne</h2>
        <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
          Flexbox est la méthode moderne pour aligner et distribuer les éléments dans une page. C'est l'outil essentiel pour la mise en page.
        </p>

        <CodeBlock
          language="css"
          filename="flexbox.css"
          code={`/* Conteneur flex */
.conteneur {
    display: flex;              /* Active Flexbox */
    justify-content: center;    /* Centre horizontalement */
    align-items: center;        /* Centre verticalement */
    gap: 20px;                  /* Espace entre éléments */
    flex-wrap: wrap;            /* Retour à la ligne auto */
}

/* Éléments flex */
.element {
    flex: 1;                    /* Prend l'espace disponible */
    min-width: 200px;           /* Largeur minimum */
}

/* Navigation horizontale */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    background-color: #1e293b;
}

/* Centrer parfaitement */
.centre-parfait {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;  /* Toute la hauteur de l'écran */
}`}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="p-4 rounded-xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
            <h4 className="font-bold mb-2 text-sm">justify-content (axe horizontal)</h4>
            {["flex-start", "center", "flex-end", "space-between", "space-around"].map(val => (
              <div key={val} className="mb-2">
                <code className="text-xs" style={{ color: "var(--accent)" }}>{val}</code>
                <div className="flex mt-1 p-2 rounded" style={{ justifyContent: val as any, background: "var(--bg-primary)", border: "1px dashed var(--border-color)" }}>
                  {[1,2,3].map(n => (
                    <div key={n} className="w-6 h-6 rounded flex items-center justify-center text-white text-xs" style={{ background: "var(--accent)" }}>{n}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
            <h4 className="font-bold mb-2 text-sm">align-items (axe vertical)</h4>
            {["flex-start", "center", "flex-end", "stretch"].map(val => (
              <div key={val} className="mb-2">
                <code className="text-xs" style={{ color: "var(--accent)" }}>{val}</code>
                <div className="flex mt-1 p-2 rounded h-16 gap-1" style={{ alignItems: val as any, background: "var(--bg-primary)", border: "1px dashed var(--border-color)" }}>
                  {[1,2,3].map(n => (
                    <div key={n} className="w-6 rounded flex items-center justify-center text-white text-xs" style={{ background: "var(--accent)", height: val === "stretch" ? "auto" : "24px" }}>{n}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsive */}
      <section id="responsive">
        <h2 className="text-2xl font-bold mb-4">📱 Responsive Design</h2>
        <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
          Le responsive design permet à votre site de s'adapter automatiquement à toutes les tailles d'écran (mobile, tablette, PC).
        </p>

        <CodeBlock
          language="css"
          filename="responsive.css"
          code={`/* Design de base (mobile first) */
.grille {
    display: flex;
    flex-direction: column;  /* Empilé sur mobile */
    gap: 20px;
}

.carte {
    width: 100%;  /* Pleine largeur sur mobile */
    padding: 20px;
    border-radius: 12px;
    background: white;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

/* Tablette (768px et plus) */
@media (min-width: 768px) {
    .grille {
        flex-direction: row;  /* Côte à côte */
        flex-wrap: wrap;
    }
    .carte {
        width: calc(50% - 10px);  /* 2 colonnes */
    }
}

/* PC (1024px et plus) */
@media (min-width: 1024px) {
    .carte {
        width: calc(33.33% - 14px);  /* 3 colonnes */
    }
}

/* Cacher sur mobile */
@media (max-width: 768px) {
    .sidebar {
        display: none;
    }
}`}
        />

        <InfoBox type="tip">
          <p><strong>Mobile First</strong> : commencez toujours par le design mobile, puis ajoutez les adaptations pour les plus grands écrans avec <code>@media</code>.</p>
        </InfoBox>
      </section>

      {/* Exercice */}
      <div className="p-6 rounded-2xl" style={{ background: "linear-gradient(135deg, #3b82f620, #8b5cf620)", border: "1px solid var(--accent)" }}>
        <h3 className="text-xl font-bold mb-3">🏋️ Mini-exercice CSS</h3>
        <p className="mb-3" style={{ color: "var(--text-secondary)" }}>
          Stylisez votre page HTML de l'exercice précédent :
        </p>
        <ol className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
          <li>1. Changez la couleur du titre en bleu</li>
          <li>2. Ajoutez un fond gris clair à la page</li>
          <li>3. Stylisez le formulaire avec des bordures arrondies</li>
          <li>4. Centrez le contenu avec Flexbox</li>
          <li>5. Rendez la page responsive</li>
        </ol>
      </div>

      <QuizComponent quizzes={quizzes.css} title="CSS" />
    </div>
  );
}
