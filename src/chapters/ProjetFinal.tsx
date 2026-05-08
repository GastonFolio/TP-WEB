import CodeBlock from "../components/CodeBlock";
import InfoBox from "../components/InfoBox";

export default function ProjetFinal() {
  return (
    <div className="fade-in space-y-10">
      <h1 className="text-3xl font-extrabold mb-2">🚀 Projet Final – Gestion d'Étudiants</h1>
      <p style={{ color: "var(--text-secondary)" }}>
        Nous allons maintenant créer une application web complète de gestion d'étudiants, étape par étape. Cette application permet d'ajouter, afficher, modifier et supprimer des étudiants (CRUD).
      </p>

      <div className="p-5 rounded-2xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
        <h3 className="font-bold mb-3">📋 Fonctionnalités de l'application :</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { icon: "➕", text: "Ajouter un étudiant", color: "#22c55e" },
            { icon: "📋", text: "Afficher la liste", color: "#3b82f6" },
            { icon: "✏️", text: "Modifier un étudiant", color: "#f59e0b" },
            { icon: "🗑️", text: "Supprimer un étudiant", color: "#ef4444" },
          ].map((f) => (
            <div key={f.text} className="p-3 rounded-xl text-center" style={{ border: `2px solid ${f.color}` }}>
              <span className="text-2xl">{f.icon}</span>
              <p className="text-sm font-semibold mt-1">{f.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Étape 1 */}
      <section id="etape1">
        <div className="flex items-start gap-4 mb-4">
          <div className="step-number">1</div>
          <div>
            <h2 className="text-2xl font-bold">Créer le dossier projet</h2>
            <p style={{ color: "var(--text-secondary)" }}>Préparer la structure de fichiers</p>
          </div>
        </div>

        <div className="schema-box text-left">
          <h4 className="font-bold mb-3 text-center">📁 Structure du projet</h4>
          <div className="font-mono text-sm space-y-1 max-w-sm mx-auto">
            <p>📂 C:\xampp\htdocs\gestion-etudiants\</p>
            <p className="ml-6">📄 index.php <span className="text-xs" style={{ color: "var(--text-secondary)" }}>← Page principale</span></p>
            <p className="ml-6">📄 connexion.php <span className="text-xs" style={{ color: "var(--text-secondary)" }}>← Connexion BDD</span></p>
            <p className="ml-6">📄 ajouter.php <span className="text-xs" style={{ color: "var(--text-secondary)" }}>← Ajouter étudiant</span></p>
            <p className="ml-6">📄 modifier.php <span className="text-xs" style={{ color: "var(--text-secondary)" }}>← Modifier étudiant</span></p>
            <p className="ml-6">📄 supprimer.php <span className="text-xs" style={{ color: "var(--text-secondary)" }}>← Supprimer étudiant</span></p>
            <p className="ml-6">📄 style.css <span className="text-xs" style={{ color: "var(--text-secondary)" }}>← Design</span></p>
            <p className="ml-6">📄 script.js <span className="text-xs" style={{ color: "var(--text-secondary)" }}>← Validation</span></p>
          </div>
        </div>

        <InfoBox type="info">
          <p>Créez le dossier <code>gestion-etudiants</code> dans <code>C:\xampp\htdocs\</code>. Tous les fichiers du projet iront dedans.</p>
        </InfoBox>
      </section>

      {/* Étape 2 */}
      <section id="etape2">
        <div className="flex items-start gap-4 mb-4">
          <div className="step-number">2</div>
          <div>
            <h2 className="text-2xl font-bold">Créer la base de données</h2>
            <p style={{ color: "var(--text-secondary)" }}>Configurer MySQL via phpMyAdmin</p>
          </div>
        </div>

        <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
          Ouvrez <code>http://localhost/phpmyadmin</code> et exécutez ce SQL dans l'onglet "SQL" :
        </p>

        <CodeBlock
          language="sql"
          filename="database.sql – Créer la base et la table"
          code={`-- 1. Créer la base de données
CREATE DATABASE IF NOT EXISTS gestion_etudiants
CHARACTER SET utf8 COLLATE utf8_general_ci;

-- 2. Utiliser la base
USE gestion_etudiants;

-- 3. Créer la table etudiants
CREATE TABLE IF NOT EXISTS etudiants (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    filiere VARCHAR(50) NOT NULL,
    date_inscription DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- 4. Insérer des données de test
INSERT INTO etudiants (nom, prenom, email, filiere) VALUES
('Dupont', 'Marie', 'marie.dupont@email.com', 'Informatique'),
('Martin', 'Pierre', 'pierre.martin@email.com', 'Réseaux'),
('Bernard', 'Sophie', 'sophie.bernard@email.com', 'Informatique'),
('Petit', 'Lucas', 'lucas.petit@email.com', 'Gestion'),
('Robert', 'Emma', 'emma.robert@email.com', 'Réseaux');`}
        />

        <InfoBox type="tip">
          <p>Vérifiez dans phpMyAdmin que la table <code>etudiants</code> contient bien 5 lignes de test. Cliquez sur la table pour voir les données.</p>
        </InfoBox>
      </section>

      {/* Étape 3 */}
      <section id="etape3">
        <div className="flex items-start gap-4 mb-4">
          <div className="step-number">3</div>
          <div>
            <h2 className="text-2xl font-bold">Fichier de connexion PHP</h2>
            <p style={{ color: "var(--text-secondary)" }}>Créer connexion.php</p>
          </div>
        </div>

        <CodeBlock
          language="php"
          filename="connexion.php"
          code={`<?php
/**
 * Fichier de connexion à la base de données MySQL
 * Ce fichier sera inclus dans toutes les pages qui ont besoin de la BDD
 */

// Paramètres de connexion
$host = "localhost";        // Serveur MySQL
$dbname = "gestion_etudiants";  // Nom de la base
$username = "root";         // Utilisateur MySQL (défaut XAMPP)
$password = "";             // Mot de passe (vide par défaut)

try {
    // Création de la connexion PDO
    $pdo = new PDO(
        "mysql:host=$host;dbname=$dbname;charset=utf8",
        $username,
        $password,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false
        ]
    );
} catch (PDOException $e) {
    // En cas d'erreur, afficher un message et arrêter
    die("❌ Erreur de connexion : " . $e->getMessage());
}
?>`}
        />

        <InfoBox type="info">
          <p>Ce fichier sera inclus avec <code>require_once 'connexion.php';</code> dans chaque page qui accède à la base de données. Cela évite de répéter le code de connexion.</p>
        </InfoBox>
      </section>

      {/* Étape 4 */}
      <section id="etape4">
        <div className="flex items-start gap-4 mb-4">
          <div className="step-number">4</div>
          <div>
            <h2 className="text-2xl font-bold">Page principale – index.php</h2>
            <p style={{ color: "var(--text-secondary)" }}>Afficher la liste des étudiants</p>
          </div>
        </div>

        <CodeBlock
          language="php"
          filename="index.php"
          code={`<?php
// Inclure la connexion à la base de données
require_once 'connexion.php';

// Récupérer tous les étudiants
$sql = "SELECT * FROM etudiants ORDER BY date_inscription DESC";
$stmt = $pdo->query($sql);
$etudiants = $stmt->fetchAll();

// Message de succès/erreur
$message = $_GET['message'] ?? '';
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestion des Étudiants</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <!-- En-tête -->
        <header>
            <h1>🎓 Gestion des Étudiants</h1>
            <p class="subtitle">Application CRUD complète</p>
        </header>
        
        <!-- Message de notification -->
        <?php if ($message === 'ajoute'): ?>
            <div class="alert success">✅ Étudiant ajouté avec succès !</div>
        <?php elseif ($message === 'modifie'): ?>
            <div class="alert success">✅ Étudiant modifié avec succès !</div>
        <?php elseif ($message === 'supprime'): ?>
            <div class="alert success">✅ Étudiant supprimé avec succès !</div>
        <?php endif; ?>
        
        <!-- Bouton ajouter -->
        <div class="actions">
            <a href="ajouter.php" class="btn btn-primary">➕ Ajouter un étudiant</a>
            <span class="count">Total : <?= count($etudiants) ?> étudiant(s)</span>
        </div>
        
        <!-- Tableau des étudiants -->
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Email</th>
                    <th>Filière</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <?php if (count($etudiants) > 0): ?>
                    <?php foreach ($etudiants as $etudiant): ?>
                        <tr>
                            <td><?= $etudiant['id'] ?></td>
                            <td><?= htmlspecialchars($etudiant['nom']) ?></td>
                            <td><?= htmlspecialchars($etudiant['prenom']) ?></td>
                            <td><?= htmlspecialchars($etudiant['email']) ?></td>
                            <td>
                                <span class="badge"><?= htmlspecialchars($etudiant['filiere']) ?></span>
                            </td>
                            <td><?= date('d/m/Y', strtotime($etudiant['date_inscription'])) ?></td>
                            <td class="actions-cell">
                                <a href="modifier.php?id=<?= $etudiant['id'] ?>" class="btn btn-edit">✏️</a>
                                <a href="supprimer.php?id=<?= $etudiant['id'] ?>" 
                                   class="btn btn-delete"
                                   onclick="return confirm('Êtes-vous sûr de vouloir supprimer cet étudiant ?')">
                                    🗑️
                                </a>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                <?php else: ?>
                    <tr>
                        <td colspan="7" class="empty">Aucun étudiant enregistré.</td>
                    </tr>
                <?php endif; ?>
            </tbody>
        </table>
    </div>
    
    <script src="script.js"></script>
</body>
</html>`}
        />

        <InfoBox type="tip" title="💡 Explications clés">
          <p>
            • <code>require_once</code> inclut le fichier de connexion<br/>
            • <code>$pdo-&gt;query()</code> exécute une requête SQL<br/>
            • <code>fetchAll()</code> récupère tous les résultats<br/>
            • <code>htmlspecialchars()</code> protège contre les attaques XSS<br/>
            • <code>foreach</code> boucle sur chaque étudiant pour afficher une ligne
          </p>
        </InfoBox>
      </section>

      {/* Étape 5 */}
      <section id="etape5">
        <div className="flex items-start gap-4 mb-4">
          <div className="step-number">5</div>
          <div>
            <h2 className="text-2xl font-bold">Page d'ajout – ajouter.php</h2>
            <p style={{ color: "var(--text-secondary)" }}>Formulaire et traitement d'ajout</p>
          </div>
        </div>

        <CodeBlock
          language="php"
          filename="ajouter.php"
          code={`<?php
require_once 'connexion.php';

$erreur = "";

// Traitement du formulaire (quand il est soumis)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Récupérer et nettoyer les données
    $nom = trim(htmlspecialchars($_POST['nom']));
    $prenom = trim(htmlspecialchars($_POST['prenom']));
    $email = trim(htmlspecialchars($_POST['email']));
    $filiere = trim(htmlspecialchars($_POST['filiere']));
    
    // Validation
    if (empty($nom) || empty($prenom) || empty($email) || empty($filiere)) {
        $erreur = "Tous les champs sont obligatoires !";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $erreur = "L'adresse email n'est pas valide !";
    } else {
        try {
            // Requête préparée (sécurisée contre les injections SQL)
            $sql = "INSERT INTO etudiants (nom, prenom, email, filiere) VALUES (:nom, :prenom, :email, :filiere)";
            $stmt = $pdo->prepare($sql);
            $stmt->execute([
                ':nom' => $nom,
                ':prenom' => $prenom,
                ':email' => $email,
                ':filiere' => $filiere
            ]);
            
            // Rediriger vers la page d'accueil avec un message
            header("Location: index.php?message=ajoute");
            exit;
        } catch (PDOException $e) {
            if ($e->getCode() == 23000) {
                $erreur = "Cet email existe déjà !";
            } else {
                $erreur = "Erreur : " . $e->getMessage();
            }
        }
    }
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ajouter un étudiant</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>➕ Ajouter un étudiant</h1>
            <a href="index.php" class="btn btn-back">← Retour à la liste</a>
        </header>
        
        <?php if ($erreur): ?>
            <div class="alert error"><?= $erreur ?></div>
        <?php endif; ?>
        
        <form method="POST" action="" id="form-etudiant" class="form-card">
            <div class="form-group">
                <label for="nom">Nom :</label>
                <input type="text" id="nom" name="nom" 
                       value="<?= $_POST['nom'] ?? '' ?>"
                       placeholder="Ex: Dupont" required>
            </div>
            
            <div class="form-group">
                <label for="prenom">Prénom :</label>
                <input type="text" id="prenom" name="prenom" 
                       value="<?= $_POST['prenom'] ?? '' ?>"
                       placeholder="Ex: Marie" required>
            </div>
            
            <div class="form-group">
                <label for="email">Email :</label>
                <input type="email" id="email" name="email" 
                       value="<?= $_POST['email'] ?? '' ?>"
                       placeholder="Ex: marie@email.com" required>
            </div>
            
            <div class="form-group">
                <label for="filiere">Filière :</label>
                <select id="filiere" name="filiere" required>
                    <option value="">-- Choisir une filière --</option>
                    <option value="Informatique">Informatique</option>
                    <option value="Réseaux">Réseaux</option>
                    <option value="Gestion">Gestion</option>
                    <option value="Marketing">Marketing</option>
                </select>
            </div>
            
            <button type="submit" class="btn btn-primary btn-full">
                ✅ Enregistrer l'étudiant
            </button>
        </form>
    </div>
    
    <script src="script.js"></script>
</body>
</html>`}
        />
      </section>

      {/* Étape 6 */}
      <section id="etape6">
        <div className="flex items-start gap-4 mb-4">
          <div className="step-number">6</div>
          <div>
            <h2 className="text-2xl font-bold">Page de modification – modifier.php</h2>
            <p style={{ color: "var(--text-secondary)" }}>Modifier un étudiant existant</p>
          </div>
        </div>

        <CodeBlock
          language="php"
          filename="modifier.php"
          code={`<?php
require_once 'connexion.php';

$erreur = "";
$id = $_GET['id'] ?? null;

// Vérifier que l'ID est valide
if (!$id || !is_numeric($id)) {
    header("Location: index.php");
    exit;
}

// Récupérer l'étudiant
$sql = "SELECT * FROM etudiants WHERE id = :id";
$stmt = $pdo->prepare($sql);
$stmt->execute([':id' => $id]);
$etudiant = $stmt->fetch();

// Vérifier que l'étudiant existe
if (!$etudiant) {
    header("Location: index.php");
    exit;
}

// Traitement du formulaire
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nom = trim(htmlspecialchars($_POST['nom']));
    $prenom = trim(htmlspecialchars($_POST['prenom']));
    $email = trim(htmlspecialchars($_POST['email']));
    $filiere = trim(htmlspecialchars($_POST['filiere']));
    
    if (empty($nom) || empty($prenom) || empty($email) || empty($filiere)) {
        $erreur = "Tous les champs sont obligatoires !";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $erreur = "Email invalide !";
    } else {
        try {
            $sql = "UPDATE etudiants SET nom = :nom, prenom = :prenom, email = :email, filiere = :filiere WHERE id = :id";
            $stmt = $pdo->prepare($sql);
            $stmt->execute([
                ':nom' => $nom,
                ':prenom' => $prenom,
                ':email' => $email,
                ':filiere' => $filiere,
                ':id' => $id
            ]);
            
            header("Location: index.php?message=modifie");
            exit;
        } catch (PDOException $e) {
            $erreur = "Erreur : " . $e->getMessage();
        }
    }
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modifier un étudiant</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>✏️ Modifier l'étudiant #<?= $etudiant['id'] ?></h1>
            <a href="index.php" class="btn btn-back">← Retour</a>
        </header>
        
        <?php if ($erreur): ?>
            <div class="alert error"><?= $erreur ?></div>
        <?php endif; ?>
        
        <form method="POST" action="" class="form-card">
            <div class="form-group">
                <label for="nom">Nom :</label>
                <input type="text" id="nom" name="nom" 
                       value="<?= htmlspecialchars($etudiant['nom']) ?>" required>
            </div>
            <div class="form-group">
                <label for="prenom">Prénom :</label>
                <input type="text" id="prenom" name="prenom" 
                       value="<?= htmlspecialchars($etudiant['prenom']) ?>" required>
            </div>
            <div class="form-group">
                <label for="email">Email :</label>
                <input type="email" id="email" name="email" 
                       value="<?= htmlspecialchars($etudiant['email']) ?>" required>
            </div>
            <div class="form-group">
                <label for="filiere">Filière :</label>
                <select id="filiere" name="filiere" required>
                    <option value="Informatique" <?= $etudiant['filiere'] === 'Informatique' ? 'selected' : '' ?>>Informatique</option>
                    <option value="Réseaux" <?= $etudiant['filiere'] === 'Réseaux' ? 'selected' : '' ?>>Réseaux</option>
                    <option value="Gestion" <?= $etudiant['filiere'] === 'Gestion' ? 'selected' : '' ?>>Gestion</option>
                    <option value="Marketing" <?= $etudiant['filiere'] === 'Marketing' ? 'selected' : '' ?>>Marketing</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary btn-full">
                💾 Enregistrer les modifications
            </button>
        </form>
    </div>
</body>
</html>`}
        />
      </section>

      {/* Étape 7 */}
      <section id="etape7">
        <div className="flex items-start gap-4 mb-4">
          <div className="step-number">7</div>
          <div>
            <h2 className="text-2xl font-bold">Suppression & Design CSS</h2>
            <p style={{ color: "var(--text-secondary)" }}>supprimer.php & style.css</p>
          </div>
        </div>

        <h3 className="font-bold text-lg mb-2">supprimer.php :</h3>
        <CodeBlock
          language="php"
          filename="supprimer.php"
          code={`<?php
require_once 'connexion.php';

$id = $_GET['id'] ?? null;

if ($id && is_numeric($id)) {
    $sql = "DELETE FROM etudiants WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([':id' => $id]);
}

header("Location: index.php?message=supprime");
exit;
?>`}
        />

        <h3 className="font-bold text-lg mb-2 mt-8">style.css :</h3>
        <CodeBlock
          language="css"
          filename="style.css"
          code={`/* ===== RESET & BASE ===== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    padding: 20px;
}

/* ===== CONTAINER ===== */
.container {
    max-width: 1000px;
    margin: 0 auto;
    background: white;
    border-radius: 16px;
    padding: 30px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.2);
}

/* ===== HEADER ===== */
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    flex-wrap: wrap;
    gap: 10px;
}

header h1 {
    font-size: 1.8rem;
    color: #1e293b;
}

.subtitle {
    color: #64748b;
    font-size: 0.9rem;
}

/* ===== ALERTS ===== */
.alert {
    padding: 12px 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    font-weight: 500;
}

.alert.success {
    background: #dcfce7;
    color: #166534;
    border: 1px solid #86efac;
}

.alert.error {
    background: #fef2f2;
    color: #991b1b;
    border: 1px solid #fca5a5;
}

/* ===== BUTTONS ===== */
.btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 10px 20px;
    border-radius: 10px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    border: none;
    transition: all 0.2s;
}

.btn-primary {
    background: linear-gradient(135deg, #3b82f6, #2563eb);
    color: white;
}

.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(59,130,246,0.4); }

.btn-back { background: #f1f5f9; color: #475569; }
.btn-back:hover { background: #e2e8f0; }

.btn-edit { background: #fef3c7; color: #92400e; padding: 6px 12px; }
.btn-delete { background: #fee2e2; color: #991b1b; padding: 6px 12px; }

.btn-full { width: 100%; justify-content: center; padding: 14px; font-size: 1rem; }

/* ===== TABLE ===== */
table {
    width: 100%;
    border-collapse: collapse;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

thead { background: linear-gradient(135deg, #1e293b, #334155); }
thead th { color: white; padding: 14px 16px; text-align: left; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.5px; }

tbody tr { border-bottom: 1px solid #f1f5f9; transition: background 0.2s; }
tbody tr:hover { background: #f8fafc; }
tbody td { padding: 12px 16px; font-size: 0.9rem; color: #334155; }

.badge {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    background: #dbeafe;
    color: #1e40af;
}

.empty { text-align: center; padding: 40px; color: #94a3b8; font-style: italic; }

.actions { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 10px; }
.count { color: #64748b; font-size: 0.9rem; }
.actions-cell { display: flex; gap: 6px; }

/* ===== FORM ===== */
.form-card {
    background: #f8fafc;
    padding: 30px;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
}

.form-group { margin-bottom: 20px; }
.form-group label { display: block; font-weight: 600; margin-bottom: 6px; color: #1e293b; font-size: 0.9rem; }

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 12px 16px;
    border: 2px solid #e2e8f0;
    border-radius: 10px;
    font-size: 1rem;
    transition: border-color 0.2s;
    background: white;
}

.form-group input:focus,
.form-group select:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59,130,246,0.1);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
    body { padding: 10px; }
    .container { padding: 15px; }
    header h1 { font-size: 1.3rem; }
    table { font-size: 0.8rem; }
    thead th, tbody td { padding: 8px 10px; }
}`}
        />
      </section>

      {/* Étape 8 */}
      <section id="etape8">
        <div className="flex items-start gap-4 mb-4">
          <div className="step-number">8</div>
          <div>
            <h2 className="text-2xl font-bold">Validation JavaScript</h2>
            <p style={{ color: "var(--text-secondary)" }}>script.js – Validation côté client</p>
          </div>
        </div>

        <CodeBlock
          language="javascript"
          filename="script.js"
          code={`// Validation du formulaire côté client
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-etudiant');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            // Récupérer les valeurs
            const nom = document.getElementById('nom').value.trim();
            const prenom = document.getElementById('prenom').value.trim();
            const email = document.getElementById('email').value.trim();
            const filiere = document.getElementById('filiere').value;
            
            // Validation du nom
            if (nom.length < 2) {
                e.preventDefault();
                showError('nom', 'Le nom doit contenir au moins 2 caractères');
                return;
            }
            
            // Validation du prénom
            if (prenom.length < 2) {
                e.preventDefault();
                showError('prenom', 'Le prénom doit contenir au moins 2 caractères');
                return;
            }
            
            // Validation de l'email
            const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
            if (!emailRegex.test(email)) {
                e.preventDefault();
                showError('email', 'Veuillez entrer un email valide');
                return;
            }
            
            // Validation de la filière
            if (!filiere) {
                e.preventDefault();
                showError('filiere', 'Veuillez choisir une filière');
                return;
            }
        });
    }
    
    // Fonction pour afficher une erreur
    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        field.style.borderColor = '#ef4444';
        
        // Supprimer l'ancien message d'erreur
        const oldError = field.parentNode.querySelector('.error-msg');
        if (oldError) oldError.remove();
        
        // Créer le message d'erreur
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-msg';
        errorDiv.style.color = '#ef4444';
        errorDiv.style.fontSize = '0.85rem';
        errorDiv.style.marginTop = '4px';
        errorDiv.textContent = '⚠️ ' + message;
        
        field.parentNode.appendChild(errorDiv);
        field.focus();
    }
    
    // Retirer l'erreur quand l'utilisateur tape
    document.querySelectorAll('input, select').forEach(function(field) {
        field.addEventListener('input', function() {
            this.style.borderColor = '#e2e8f0';
            const error = this.parentNode.querySelector('.error-msg');
            if (error) error.remove();
        });
    });
    
    // Auto-disparition des alertes après 5 secondes
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(function(alert) {
        setTimeout(function() {
            alert.style.transition = 'opacity 0.5s';
            alert.style.opacity = '0';
            setTimeout(function() { alert.remove(); }, 500);
        }, 5000);
    });
});`}
        />
      </section>

      {/* Résultat final */}
      <div className="p-8 rounded-2xl text-center" style={{ background: "linear-gradient(135deg, #22c55e20, #3b82f620)", border: "2px solid var(--success)" }}>
        <span className="text-6xl">🎉</span>
        <h2 className="text-2xl font-bold mt-4 mb-2">Félicitations !</h2>
        <p className="text-lg mb-4" style={{ color: "var(--text-secondary)" }}>
          Vous avez créé une application web complète avec toutes les fonctionnalités CRUD !
        </p>
        <div className="inline-block p-4 rounded-xl" style={{ background: "var(--bg-primary)" }}>
          <p className="font-mono text-sm" style={{ color: "var(--accent)" }}>
            🌐 http://localhost/gestion-etudiants/
          </p>
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-3 max-w-2xl mx-auto text-sm">
          <div className="p-3 rounded-xl" style={{ background: "var(--bg-primary)" }}>✅ HTML</div>
          <div className="p-3 rounded-xl" style={{ background: "var(--bg-primary)" }}>✅ CSS</div>
          <div className="p-3 rounded-xl" style={{ background: "var(--bg-primary)" }}>✅ JavaScript</div>
          <div className="p-3 rounded-xl" style={{ background: "var(--bg-primary)" }}>✅ PHP</div>
          <div className="p-3 rounded-xl" style={{ background: "var(--bg-primary)" }}>✅ MySQL</div>
        </div>
      </div>

      <InfoBox type="tip" title="🚀 Pour aller plus loin">
        <p>
          Améliorez votre projet avec :<br/>
          • 🔍 Recherche d'étudiants<br/>
          • 📄 Pagination<br/>
          • 🔐 Système de connexion (login/mot de passe)<br/>
          • 📊 Statistiques (nombre par filière)<br/>
          • 📤 Export en CSV/PDF
        </p>
      </InfoBox>
    </div>
  );
}
