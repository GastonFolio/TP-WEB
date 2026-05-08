import CodeBlock from "../components/CodeBlock";
import InfoBox from "../components/InfoBox";
import QuizComponent from "../components/QuizComponent";
import { quizzes } from "../data/chapters";

export default function ChapitrePHP() {
  return (
    <div className="fade-in space-y-10">
      <h1 className="text-3xl font-extrabold mb-2">🐘 PHP – Logique serveur</h1>
      <p style={{ color: "var(--text-secondary)" }}>
        PHP (PHP: Hypertext Preprocessor) est un langage qui s'exécute côté serveur. Il permet de traiter les données des formulaires, communiquer avec la base de données, et générer des pages HTML dynamiques.
      </p>

      <InfoBox type="info">
        <p>Les fichiers PHP doivent être placés dans <code>C:\xampp\htdocs\</code> et avoir l'extension <code>.php</code>. Ils sont exécutés par le serveur Apache.</p>
      </InfoBox>

      {/* Variables PHP */}
      <section id="variables-php">
        <h2 className="text-2xl font-bold mb-4">📦 Variables PHP</h2>

        <CodeBlock
          language="php"
          filename="variables.php"
          code={`<?php
// Toutes les variables commencent par $
$nom = "Marie";            // String
$age = 22;                 // Integer
$moyenne = 15.5;           // Float
$estInscrit = true;        // Boolean
$matieres = ["Math", "Info", "Physique"]; // Array

// Afficher des valeurs
echo "Bonjour " . $nom;          // Concaténation avec .
echo "Vous avez $age ans";       // Variable dans guillemets doubles
echo "<p>Texte HTML</p>";        // On peut écrire du HTML

// Tableaux associatifs
$etudiant = [
    "nom" => "Dupont",
    "prenom" => "Marie",
    "age" => 22,
    "filiere" => "Informatique"
];

echo $etudiant["nom"];  // "Dupont"
echo $etudiant["filiere"];  // "Informatique"

// Conditions
if ($age >= 18) {
    echo "Majeur";
} else {
    echo "Mineur";
}

// Boucles
for ($i = 0; $i < 5; $i++) {
    echo "Ligne $i <br>";
}

foreach ($matieres as $matiere) {
    echo "- $matiere <br>";
}
?>`}
        />

        <InfoBox type="warning">
          <p>N'oubliez pas : en PHP, toute variable commence par <code>$</code>, et chaque instruction se termine par <code>;</code></p>
        </InfoBox>
      </section>

      {/* Formulaires PHP */}
      <section id="formulaires-php">
        <h2 className="text-2xl font-bold mb-4">📋 Traitement des formulaires</h2>
        <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
          PHP reçoit les données envoyées par les formulaires HTML et peut les traiter (valider, enregistrer en base, etc.).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-bold mb-2">1. Le formulaire HTML :</h4>
            <CodeBlock
              language="html"
              filename="formulaire.html"
              code={`<form action="traitement.php" method="POST">
    <label>Nom :</label>
    <input type="text" name="nom" required>
    
    <label>Email :</label>
    <input type="email" name="email" required>
    
    <label>Filière :</label>
    <select name="filiere">
        <option value="info">Informatique</option>
        <option value="reseaux">Réseaux</option>
    </select>
    
    <button type="submit">Envoyer</button>
</form>`}
            />
          </div>
          <div>
            <h4 className="font-bold mb-2">2. Le traitement PHP :</h4>
            <CodeBlock
              language="php"
              filename="traitement.php"
              code={`<?php
// Récupérer les données du formulaire
$nom = $_POST["nom"];
$email = $_POST["email"];
$filiere = $_POST["filiere"];

// Valider les données
if (empty($nom) || empty($email)) {
    echo "Erreur : tous les champs sont obligatoires !";
    exit;
}

// Sécuriser les données
$nom = htmlspecialchars($nom);
$email = htmlspecialchars($email);

// Afficher le résultat
echo "<h2>Inscription réussie !</h2>";
echo "<p>Nom : $nom</p>";
echo "<p>Email : $email</p>";
echo "<p>Filière : $filiere</p>";
?>`}
            />
          </div>
        </div>
      </section>

      {/* GET vs POST */}
      <section id="get-post">
        <h2 className="text-2xl font-bold mb-4">🔄 GET vs POST</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl" style={{ background: "var(--bg-secondary)", border: "2px solid var(--accent)" }}>
            <h3 className="font-bold text-lg mb-3" style={{ color: "var(--accent)" }}>GET</h3>
            <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <li>✅ Données visibles dans l'URL</li>
              <li>✅ Peut être mis en favoris</li>
              <li>✅ Idéal pour les recherches</li>
              <li>❌ Limité en taille</li>
              <li>❌ Pas pour données sensibles</li>
            </ul>
            <CodeBlock language="php" code={`// URL : page.php?nom=Marie&age=22
$nom = $_GET["nom"];
$age = $_GET["age"];`} />
          </div>
          <div className="p-5 rounded-xl" style={{ background: "var(--bg-secondary)", border: "2px solid #8b5cf6" }}>
            <h3 className="font-bold text-lg mb-3" style={{ color: "#8b5cf6" }}>POST</h3>
            <ul className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <li>✅ Données invisibles dans l'URL</li>
              <li>✅ Pas de limite de taille</li>
              <li>✅ Sécurisé pour mots de passe</li>
              <li>✅ Pour inscription, connexion</li>
              <li>❌ Ne peut pas être mis en favoris</li>
            </ul>
            <CodeBlock language="php" code={`// Données envoyées dans le corps
$nom = $_POST["nom"];
$mdp = $_POST["mot_de_passe"];`} />
          </div>
        </div>
      </section>

      {/* Connexion DB */}
      <section id="connexion-db">
        <h2 className="text-2xl font-bold mb-4">🔗 Connexion à MySQL</h2>
        <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
          PHP communique avec MySQL pour lire et écrire des données. Voici comment établir la connexion :
        </p>

        <CodeBlock
          language="php"
          filename="connexion.php"
          code={`<?php
// Paramètres de connexion
$serveur = "localhost";     // Adresse du serveur MySQL
$utilisateur = "root";      // Nom d'utilisateur (par défaut : root)
$mot_de_passe = "";         // Mot de passe (vide par défaut avec XAMPP)
$base_de_donnees = "gestion_etudiants";  // Nom de la base

// Connexion avec PDO (méthode sécurisée et moderne)
try {
    $connexion = new PDO(
        "mysql:host=$serveur;dbname=$base_de_donnees;charset=utf8",
        $utilisateur,
        $mot_de_passe
    );
    
    // Activer les erreurs PDO
    $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    echo "✅ Connexion réussie à la base de données !";
    
} catch (PDOException $e) {
    // En cas d'erreur
    echo "❌ Erreur de connexion : " . $e->getMessage();
    exit;
}
?>`}
        />

        <InfoBox type="info">
          <p><strong>PDO</strong> (PHP Data Objects) est la méthode moderne et sécurisée pour se connecter à MySQL. Elle protège contre les injections SQL grâce aux requêtes préparées.</p>
        </InfoBox>

        <InfoBox type="error" title="❌ Erreur fréquente">
          <p>Si vous obtenez <code>Access denied for user 'root'</code>, vérifiez que MySQL est bien démarré dans XAMPP et que le mot de passe est correct (vide par défaut).</p>
        </InfoBox>
      </section>

      {/* Exercice */}
      <div className="p-6 rounded-2xl" style={{ background: "linear-gradient(135deg, #3b82f620, #8b5cf620)", border: "1px solid var(--accent)" }}>
        <h3 className="text-xl font-bold mb-3">🏋️ Mini-exercice PHP</h3>
        <ol className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
          <li>1. Créez un fichier <code>connexion.php</code> dans htdocs</li>
          <li>2. Établissez une connexion à MySQL</li>
          <li>3. Affichez "Connexion réussie" ou "Erreur"</li>
          <li>4. Testez dans votre navigateur : <code>http://localhost/connexion.php</code></li>
        </ol>
      </div>

      <QuizComponent quizzes={quizzes.php} title="PHP" />
    </div>
  );
}
