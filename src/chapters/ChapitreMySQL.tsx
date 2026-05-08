import CodeBlock from "../components/CodeBlock";
import InfoBox from "../components/InfoBox";
import QuizComponent from "../components/QuizComponent";
import { quizzes } from "../data/chapters";

export default function ChapitreMySQL() {
  return (
    <div className="fade-in space-y-10">
      <h1 className="text-3xl font-extrabold mb-2">🗄️ MySQL – Base de données</h1>
      <p style={{ color: "var(--text-secondary)" }}>
        MySQL est un système de gestion de base de données relationnelle. Il permet de stocker, organiser et retrouver les données de votre application.
      </p>

      <InfoBox type="tip" title="💡 Analogie">
        <p>MySQL, c'est un grand classeur bien organisé : les <strong>bases de données</strong> sont les classeurs, les <strong>tables</strong> sont les tiroirs, les <strong>lignes</strong> sont les fiches, et les <strong>colonnes</strong> sont les champs sur chaque fiche.</p>
      </InfoBox>

      {/* Création DB */}
      <section id="creation-db">
        <h2 className="text-2xl font-bold mb-4">📁 Créer une base de données</h2>
        <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
          Vous pouvez créer une base de données via phpMyAdmin ou en SQL.
        </p>

        <h3 className="font-bold mb-2">Méthode 1 : Via phpMyAdmin (interface graphique)</h3>
        <div className="p-4 rounded-xl mb-4" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
          <ol className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
            <li><span className="font-bold" style={{ color: "var(--accent)" }}>1.</span> Ouvrez <code>http://localhost/phpmyadmin</code></li>
            <li><span className="font-bold" style={{ color: "var(--accent)" }}>2.</span> Cliquez sur <strong>"Nouvelle base de données"</strong> dans le menu gauche</li>
            <li><span className="font-bold" style={{ color: "var(--accent)" }}>3.</span> Tapez le nom : <code>gestion_etudiants</code></li>
            <li><span className="font-bold" style={{ color: "var(--accent)" }}>4.</span> Choisissez l'interclassement : <code>utf8_general_ci</code></li>
            <li><span className="font-bold" style={{ color: "var(--accent)" }}>5.</span> Cliquez sur <strong>"Créer"</strong></li>
          </ol>
        </div>

        <h3 className="font-bold mb-2">Méthode 2 : En SQL</h3>
        <CodeBlock
          language="sql"
          filename="Création de la base"
          code={`-- Créer la base de données
CREATE DATABASE gestion_etudiants
CHARACTER SET utf8
COLLATE utf8_general_ci;

-- Sélectionner la base
USE gestion_etudiants;`}
        />
      </section>

      {/* Tables */}
      <section id="tables">
        <h2 className="text-2xl font-bold mb-4">📊 Créer des tables</h2>
        <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
          Une table est un ensemble de colonnes (champs) et de lignes (enregistrements). Voici la table <strong>etudiants</strong> pour notre projet :
        </p>

        <CodeBlock
          language="sql"
          filename="Création de la table etudiants"
          code={`CREATE TABLE etudiants (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- ID unique, auto-incrémenté
    nom VARCHAR(100) NOT NULL,          -- Nom (max 100 caractères, obligatoire)
    prenom VARCHAR(100) NOT NULL,       -- Prénom
    email VARCHAR(150) NOT NULL UNIQUE, -- Email (unique)
    filiere VARCHAR(50) NOT NULL,       -- Filière
    date_inscription DATETIME DEFAULT CURRENT_TIMESTAMP  -- Date auto
);`}
        />

        <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm rounded-xl overflow-hidden" style={{ border: "1px solid var(--border-color)" }}>
            <thead>
              <tr style={{ background: "var(--accent)", color: "white" }}>
                <th className="p-3 text-left">Colonne</th>
                <th className="p-3 text-left">Type</th>
                <th className="p-3 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["id", "INT AUTO_INCREMENT", "Identifiant unique, s'incrémente automatiquement"],
                ["nom", "VARCHAR(100)", "Chaîne de max 100 caractères"],
                ["prenom", "VARCHAR(100)", "Chaîne de max 100 caractères"],
                ["email", "VARCHAR(150) UNIQUE", "Email unique (pas de doublons)"],
                ["filiere", "VARCHAR(50)", "Filière de l'étudiant"],
                ["date_inscription", "DATETIME", "Date/heure automatique"],
              ].map(([col, type, desc], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "var(--bg-secondary)" : "transparent" }}>
                  <td className="p-3 font-mono font-bold text-xs" style={{ color: "var(--accent)" }}>{col}</td>
                  <td className="p-3 font-mono text-xs">{type}</td>
                  <td className="p-3 text-xs" style={{ color: "var(--text-secondary)" }}>{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* INSERT */}
      <section id="insert">
        <h2 className="text-2xl font-bold mb-4">➕ INSERT – Ajouter des données</h2>

        <CodeBlock
          language="sql"
          filename="Insérer des étudiants"
          code={`-- Insérer un seul étudiant
INSERT INTO etudiants (nom, prenom, email, filiere)
VALUES ('Dupont', 'Marie', 'marie@email.com', 'Informatique');

-- Insérer plusieurs étudiants
INSERT INTO etudiants (nom, prenom, email, filiere) VALUES
    ('Martin', 'Pierre', 'pierre@email.com', 'Réseaux'),
    ('Bernard', 'Sophie', 'sophie@email.com', 'Informatique'),
    ('Petit', 'Lucas', 'lucas@email.com', 'Gestion'),
    ('Robert', 'Emma', 'emma@email.com', 'Réseaux');`}
        />

        <InfoBox type="info">
          <p>On ne spécifie pas <code>id</code> car il est <code>AUTO_INCREMENT</code> : MySQL l'attribue automatiquement (1, 2, 3...).</p>
        </InfoBox>
      </section>

      {/* SELECT */}
      <section id="select">
        <h2 className="text-2xl font-bold mb-4">🔍 SELECT – Lire des données</h2>

        <CodeBlock
          language="sql"
          filename="Requêtes de lecture"
          code={`-- Sélectionner TOUT
SELECT * FROM etudiants;

-- Sélectionner des colonnes spécifiques
SELECT nom, prenom, email FROM etudiants;

-- Filtrer avec WHERE
SELECT * FROM etudiants WHERE filiere = 'Informatique';

-- Rechercher par nom (LIKE)
SELECT * FROM etudiants WHERE nom LIKE '%Dup%';

-- Trier les résultats
SELECT * FROM etudiants ORDER BY nom ASC;   -- Alphabétique
SELECT * FROM etudiants ORDER BY id DESC;   -- Plus récent d'abord

-- Compter les étudiants
SELECT COUNT(*) AS total FROM etudiants;

-- Compter par filière
SELECT filiere, COUNT(*) AS nombre 
FROM etudiants 
GROUP BY filiere;

-- Limiter les résultats
SELECT * FROM etudiants LIMIT 10;  -- 10 premiers`}
        />
      </section>

      {/* UPDATE */}
      <section id="update">
        <h2 className="text-2xl font-bold mb-4">✏️ UPDATE – Modifier des données</h2>

        <CodeBlock
          language="sql"
          filename="Modifier un étudiant"
          code={`-- Modifier un étudiant par son ID
UPDATE etudiants 
SET email = 'nouveau@email.com', filiere = 'Réseaux'
WHERE id = 1;

-- Modifier plusieurs étudiants
UPDATE etudiants 
SET filiere = 'Informatique'
WHERE filiere = 'Info';`}
        />

        <InfoBox type="warning">
          <p>⚠️ N'oubliez <strong>JAMAIS</strong> le <code>WHERE</code> dans un UPDATE ! Sans WHERE, TOUS les enregistrements seront modifiés.</p>
        </InfoBox>
      </section>

      {/* DELETE */}
      <section id="delete">
        <h2 className="text-2xl font-bold mb-4">🗑️ DELETE – Supprimer des données</h2>

        <CodeBlock
          language="sql"
          filename="Supprimer un étudiant"
          code={`-- Supprimer un étudiant par son ID
DELETE FROM etudiants WHERE id = 3;

-- Supprimer plusieurs étudiants
DELETE FROM etudiants WHERE filiere = 'Gestion';

-- ⚠️ ATTENTION : Supprimer TOUT (DANGEREUX !)
-- DELETE FROM etudiants;  -- Ne JAMAIS faire ça sans réfléchir !`}
        />

        <InfoBox type="error" title="❌ DANGER">
          <p>Un <code>DELETE</code> sans <code>WHERE</code> supprime <strong>TOUTES</strong> les données de la table ! Vérifiez toujours votre requête avant de l'exécuter.</p>
        </InfoBox>
      </section>

      {/* Résumé CRUD */}
      <div className="p-6 rounded-2xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
        <h3 className="text-xl font-bold mb-4">📋 Résumé CRUD</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { letter: "C", word: "Create", sql: "INSERT", color: "#22c55e", icon: "➕" },
            { letter: "R", word: "Read", sql: "SELECT", color: "#3b82f6", icon: "🔍" },
            { letter: "U", word: "Update", sql: "UPDATE", color: "#f59e0b", icon: "✏️" },
            { letter: "D", word: "Delete", sql: "DELETE", color: "#ef4444", icon: "🗑️" },
          ].map((item) => (
            <div key={item.letter} className="text-center p-4 rounded-xl" style={{ border: `2px solid ${item.color}` }}>
              <span className="text-2xl">{item.icon}</span>
              <p className="font-extrabold text-2xl mt-1" style={{ color: item.color }}>{item.letter}</p>
              <p className="font-bold text-sm">{item.word}</p>
              <code className="text-xs" style={{ color: "var(--text-secondary)" }}>{item.sql}</code>
            </div>
          ))}
        </div>
      </div>

      <QuizComponent quizzes={quizzes.mysql} title="MySQL" />
    </div>
  );
}
