import CodeBlock from "../components/CodeBlock";
import InfoBox from "../components/InfoBox";
import QuizComponent from "../components/QuizComponent";
import { quizzes } from "../data/chapters";

export default function ChapitreHTML() {
  return (
    <div className="fade-in space-y-10">
      <h1 className="text-3xl font-extrabold mb-2">🌐 HTML5 – Structure des pages web</h1>
      <p style={{ color: "var(--text-secondary)" }}>
        HTML (HyperText Markup Language) est le langage qui structure le contenu de vos pages web. C'est le squelette de tout site internet.
      </p>

      <InfoBox type="tip" title="💡 Analogie">
        <p>Si un site web était une maison, HTML serait les murs, le toit et la charpente – la structure de base.</p>
      </InfoBox>

      {/* Structure */}
      <section id="structure">
        <h2 className="text-2xl font-bold mb-4">📄 Structure d'une page HTML</h2>
        <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
          Toute page HTML suit une structure standard. Voici le squelette minimal :
        </p>

        <CodeBlock
          language="html"
          filename="index.html"
          code={`<!DOCTYPE html>
<html lang="fr">
<head>
    <!-- Métadonnées (invisibles pour l'utilisateur) -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ma première page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Contenu visible de la page -->
    <h1>Bienvenue sur mon site !</h1>
    <p>Ceci est mon premier paragraphe.</p>
    
    <script src="script.js"></script>
</body>
</html>`}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="p-4 rounded-xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
            <h4 className="font-bold mb-2">🏷️ <code>&lt;head&gt;</code></h4>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Contient les métadonnées : titre, encodage, liens CSS. <strong>Invisible</strong> pour l'utilisateur.
            </p>
          </div>
          <div className="p-4 rounded-xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
            <h4 className="font-bold mb-2">📝 <code>&lt;body&gt;</code></h4>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Contient le contenu visible : textes, images, formulaires. C'est ce que l'utilisateur <strong>voit</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Balises */}
      <section id="balises">
        <h2 className="text-2xl font-bold mb-4">🏷️ Les balises essentielles</h2>

        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm rounded-xl overflow-hidden" style={{ border: "1px solid var(--border-color)" }}>
            <thead>
              <tr style={{ background: "var(--accent)", color: "white" }}>
                <th className="p-3 text-left">Balise</th>
                <th className="p-3 text-left">Rôle</th>
                <th className="p-3 text-left">Exemple</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["<h1> à <h6>", "Titres", "<h1>Grand titre</h1>"],
                ["<p>", "Paragraphe", "<p>Texte...</p>"],
                ["<strong>", "Gras", "<strong>Important</strong>"],
                ["<em>", "Italique", "<em>Emphase</em>"],
                ["<br>", "Retour à la ligne", "Ligne 1<br>Ligne 2"],
                ["<hr>", "Ligne horizontale", "<hr>"],
                ["<div>", "Conteneur bloc", "<div>Section</div>"],
                ["<span>", "Conteneur en ligne", "<span>Texte</span>"],
                ["<img>", "Image", '<img src="photo.jpg" alt="Description">'],
                ["<ul> / <ol>", "Listes", "<ul><li>Item</li></ul>"],
              ].map(([balise, role, exemple], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "var(--bg-secondary)" : "transparent" }}>
                  <td className="p-3 font-mono text-xs" style={{ color: "var(--accent)" }}>{balise}</td>
                  <td className="p-3">{role}</td>
                  <td className="p-3 font-mono text-xs">{exemple}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <CodeBlock
          language="html"
          filename="balises.html"
          code={`<body>
    <!-- Titres de différents niveaux -->
    <h1>Titre principal</h1>
    <h2>Sous-titre</h2>
    <h3>Sous-sous-titre</h3>
    
    <!-- Paragraphes et mise en forme -->
    <p>Ceci est un <strong>texte en gras</strong> et en <em>italique</em>.</p>
    
    <!-- Image -->
    <img src="photo.jpg" alt="Description de l'image" width="300">
    
    <!-- Liste non ordonnée -->
    <ul>
        <li>Élément 1</li>
        <li>Élément 2</li>
        <li>Élément 3</li>
    </ul>
    
    <!-- Liste ordonnée -->
    <ol>
        <li>Première étape</li>
        <li>Deuxième étape</li>
        <li>Troisième étape</li>
    </ol>
</body>`}
        />
      </section>

      {/* Formulaires */}
      <section id="formulaires">
        <h2 className="text-2xl font-bold mb-4">📋 Les formulaires</h2>
        <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
          Les formulaires permettent à l'utilisateur d'envoyer des données au serveur (inscription, connexion, recherche...).
        </p>

        <CodeBlock
          language="html"
          filename="formulaire.html"
          code={`<form action="traitement.php" method="POST">
    <!-- Champ texte -->
    <label for="nom">Nom :</label>
    <input type="text" id="nom" name="nom" placeholder="Votre nom" required>
    
    <!-- Champ email -->
    <label for="email">Email :</label>
    <input type="email" id="email" name="email" placeholder="votre@email.com" required>
    
    <!-- Champ mot de passe -->
    <label for="mdp">Mot de passe :</label>
    <input type="password" id="mdp" name="mdp" required>
    
    <!-- Menu déroulant -->
    <label for="filiere">Filière :</label>
    <select id="filiere" name="filiere">
        <option value="">-- Choisir --</option>
        <option value="info">Informatique</option>
        <option value="reseaux">Réseaux</option>
        <option value="gestion">Gestion</option>
    </select>
    
    <!-- Zone de texte -->
    <label for="message">Message :</label>
    <textarea id="message" name="message" rows="4" placeholder="Votre message..."></textarea>
    
    <!-- Bouton d'envoi -->
    <button type="submit">Envoyer</button>
</form>`}
        />

        <InfoBox type="info">
          <p><code>action</code> = où envoyer les données (fichier PHP). <code>method</code> = comment les envoyer (POST pour les données sensibles, GET pour les recherches).</p>
        </InfoBox>

        <div className="p-4 rounded-xl mt-4" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
          <h4 className="font-bold mb-3">🎯 Types d'input courants :</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            {[
              ["text", "Texte simple"],
              ["email", "Adresse email"],
              ["password", "Mot de passe"],
              ["number", "Nombre"],
              ["date", "Date"],
              ["tel", "Téléphone"],
              ["file", "Fichier"],
              ["checkbox", "Case à cocher"],
              ["radio", "Bouton radio"],
            ].map(([type, desc]) => (
              <div key={type} className="flex items-center gap-2 p-2 rounded" style={{ background: "var(--bg-primary)" }}>
                <code className="text-xs font-bold" style={{ color: "var(--accent)" }}>{type}</code>
                <span className="text-xs" style={{ color: "var(--text-secondary)" }}>{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tableaux */}
      <section id="tableaux">
        <h2 className="text-2xl font-bold mb-4">📊 Les tableaux</h2>

        <CodeBlock
          language="html"
          filename="tableau.html"
          code={`<table border="1">
    <thead>
        <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Note</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Dupont</td>
            <td>Marie</td>
            <td>16/20</td>
        </tr>
        <tr>
            <td>Martin</td>
            <td>Pierre</td>
            <td>14/20</td>
        </tr>
    </tbody>
</table>`}
        />
      </section>

      {/* Liens */}
      <section id="liens">
        <h2 className="text-2xl font-bold mb-4">🔗 Les liens</h2>

        <CodeBlock
          language="html"
          filename="liens.html"
          code={`<!-- Lien vers un autre site -->
<a href="https://google.com">Aller sur Google</a>

<!-- Lien vers une autre page du site -->
<a href="contact.html">Page Contact</a>

<!-- Lien qui s'ouvre dans un nouvel onglet -->
<a href="https://google.com" target="_blank">
    Ouvrir dans un nouvel onglet
</a>

<!-- Lien vers une section de la même page -->
<a href="#section2">Aller à la section 2</a>

<!-- Lien email -->
<a href="mailto:contact@example.com">Envoyer un email</a>`}
        />
      </section>

      {/* Exercice */}
      <div className="p-6 rounded-2xl" style={{ background: "linear-gradient(135deg, #3b82f620, #8b5cf620)", border: "1px solid var(--accent)" }}>
        <h3 className="text-xl font-bold mb-3">🏋️ Mini-exercice HTML</h3>
        <p className="mb-3" style={{ color: "var(--text-secondary)" }}>
          Créez une page HTML qui contient :
        </p>
        <ol className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
          <li>1. Un titre <code>&lt;h1&gt;</code> avec votre nom</li>
          <li>2. Un paragraphe de présentation</li>
          <li>3. Une liste de vos 3 loisirs préférés</li>
          <li>4. Un formulaire avec nom, email et bouton "Envoyer"</li>
        </ol>
      </div>

      <QuizComponent quizzes={quizzes.html} title="HTML" />
    </div>
  );
}
