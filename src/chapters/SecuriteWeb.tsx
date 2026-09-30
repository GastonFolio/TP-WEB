import CodeBlock from "../components/CodeBlock";
import InfoBox from "../components/InfoBox";
import QuizComponent from "../components/QuizComponent";
import { quizzes } from "../data/chapters";

export default function SecuriteWeb() {
  return (
    <div className="fade-in space-y-10">
      <div>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-3" style={{ background: "var(--accent-light)", color: "var(--accent)" }}>
          📅 Séance S5 • 3h • Pré-requis : S1–S4 + PHP/MySQL
        </div>
        <h1 className="text-3xl font-extrabold mb-2">🔒 Attaques Web & Protections</h1>
        <p style={{ color: "var(--text-secondary)" }}>
          Un technicien télécoms doit savoir comment un site se fait attaquer et comment le protéger.
          Chaque attaque ci-dessous = exemple concret + parade déjà utilisée (ou à ajouter) dans votre CRUD gestion-étudiants.
        </p>
      </div>

      <div className="p-5 rounded-2xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
        <h3 className="font-bold mb-2">🎯 Objectifs (fin S5) :</h3>
        <ul className="text-sm space-y-1" style={{ color: "var(--text-secondary)" }}>
          <li>• Expliquer CIA (Confidentialité, Intégrité, Disponibilité) + vocabulaire menace/vulnérabilité/risque</li>
          <li>• Situer la surface d'attaque : navigateur, réseau, serveur, BDD</li>
          <li>• Expliquer XSS, injection SQL, CSRF, phishing, brute-force, DDoS, MITM</li>
          <li>• Appliquer : <code>htmlspecialchars</code>, requêtes préparées PDO, validation client + serveur, <code>password_hash</code>, HTTPS</li>
          <li>• Remplir la checklist « avant mise en ligne » et sauvegarder la BDD</li>
        </ul>
      </div>

      {/* Pourquoi sécuriser */}
      <section id="pourquoi">
        <h2 className="text-2xl font-bold mb-4">🛡️ Pourquoi sécuriser ? La triade CIA</h2>
        <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
          On ne protège pas « contre les hackers » en général : on protège 3 propriétés. Retiens <strong>CIA</strong> — c'est le plan du chapitre et de ton audit S12.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="p-5 rounded-2xl text-center" style={{ background: "var(--bg-secondary)", border: "2px solid #3b82f6" }}>
            <span className="text-4xl">🤫</span>
            <h3 className="font-bold mt-2" style={{ color: "#3b82f6" }}>Confidentialité</h3>
            <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>Seules les personnes autorisées lisent. Ex. notes, mots de passe. Attaques : XSS, MITM, SQLi.</p>
          </div>
          <div className="p-5 rounded-2xl text-center" style={{ background: "var(--bg-secondary)", border: "2px solid #22c55e" }}>
            <span className="text-4xl">✅</span>
            <h3 className="font-bold mt-2" style={{ color: "#22c55e" }}>Intégrité</h3>
            <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>Les données ne sont pas modifiées en douce. Ex. moyenne trafiquée. Attaques : SQLi, CSRF.</p>
          </div>
          <div className="p-5 rounded-2xl text-center" style={{ background: "var(--bg-secondary)", border: "2px solid #f59e0b" }}>
            <span className="text-4xl">⚡</span>
            <h3 className="font-bold mt-2" style={{ color: "#f59e0b" }}>Disponibilité</h3>
            <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>Le service répond quand on en a besoin. Ex. inscriptions en ligne. Attaques : DDoS, ransomware.</p>
          </div>
        </div>
        <InfoBox type="tip" title="💡 Analogie de la maison">
          <p><strong>Confidentialité</strong> = rideaux (on ne voit pas dedans). <strong>Intégrité</strong> = serrure du coffre (personne ne touche). <strong>Disponibilité</strong> = porte qui s'ouvre quand tu rentres (pas bloquée). Une attaque = un de ces 3 piliers qui tombe.</p>
        </InfoBox>
      </section>

      {/* Vocabulaire + acteurs + surface */}
      <section id="vocabulaire">
        <h2 className="text-2xl font-bold mb-4">🧠 Vocabulaire + qui attaque + où ça casse</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="p-4 rounded-xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
            <h4 className="font-bold mb-1">🕳️ Vulnérabilité</h4>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Une faiblesse : champ sans contrôle, vieux XAMPP, mot de passe « 1234 ». C'est ce que tu dois fermer.</p>
          </div>
          <div className="p-4 rounded-xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
            <h4 className="font-bold mb-1">⚔️ Menace</h4>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Celui qui exploite : script-kiddie (outil tout fait), cybercriminel (argent), insider (interne).</p>
          </div>
          <div className="p-4 rounded-xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
            <h4 className="font-bold mb-1">🔥 Risque</h4>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Menace × vulnérabilité × impact. Ex. « BDD volée » = SQLi possible × emails en clair × perte de confiance.</p>
          </div>
        </div>
        <div className="schema-box">
          <h4 className="font-bold mb-3 text-center">🎯 Surface d'attaque de ton CRUD (où regarder)</h4>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-sm">
            <div className="p-3 rounded-xl font-semibold" style={{ background: "var(--accent-light)" }}>👤 Navigateur<br /><span className="font-normal text-xs">XSS, phishing</span></div>
            <span className="diagram-arrow">⇄</span>
            <div className="p-3 rounded-xl font-semibold" style={{ background: "var(--accent-light)" }}>🌐 Réseau<br /><span className="font-normal text-xs">MITM si HTTP</span></div>
            <span className="diagram-arrow">⇄</span>
            <div className="p-3 rounded-xl font-semibold" style={{ background: "var(--accent-light)" }}>🐘 PHP / Apache<br /><span className="font-normal text-xs">CSRF, brute-force</span></div>
            <span className="diagram-arrow">→</span>
            <div className="p-3 rounded-xl font-semibold" style={{ background: "#fef9c3" }}>🗄️ MySQL<br /><span className="font-normal text-xs">injection SQL</span></div>
          </div>
        </div>
        <InfoBox type="info" title="ℹ️ Chapeaux (à connaître)">
          <p><strong>White hat</strong> = audite avec autorisation. <strong>Grey hat</strong> = teste sans autorisation mais prévient. <strong>Black hat</strong> = exploite pour nuire. En classe : toujours white hat, toujours avec autorisation écrite.</p>
        </InfoBox>
      </section>

      {/* Bases protectrices */}
      <section id="bases">
        <h2 className="text-2xl font-bold mb-4">🔐 5 bases protectrices (à comprendre AVANT les attaques)</h2>
        <div className="space-y-3">
          <div className="p-4 rounded-xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
            <p className="font-bold text-sm">1. HTTPS (TLS) — le tunnel chiffré</p>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>HTTP = carte postale lisible par tous (couche 7 + TCP 80). HTTPS = même carte sous enveloppe scellée (TCP 443 + TLS). Sans HTTPS, MITM lit mots de passe et cookies. En prod : certificat + redirection 80 → 443.</p>
          </div>
          <div className="p-4 rounded-xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
            <p className="font-bold text-sm">2. Cookies / sessions — la mémoire du Web</p>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>HTTP est sans mémoire : le serveur reconnaît l'utilisateur via un <strong>cookie de session</strong> (identifiant unique). Si un XSS vole ce cookie → <strong>hijacking</strong> (usurpation). D'où : <code>HttpOnly</code>, <code>Secure</code>, déconnexion, régénération d'ID.</p>
          </div>
          <div className="p-4 rounded-xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
            <p className="font-bold text-sm">3. Validation double — jamais confiance au navigateur</p>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Le JS valide pour le confort (rapide), le <strong>PHP re-valide pour la sécurité</strong> (l'attaquant contourne le JS en 2 clics). Règle d'or : tout ce qui vient de <code>$_GET/$_POST</code> est suspect.</p>
          </div>
          <div className="p-4 rounded-xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
            <p className="font-bold text-sm">4. Moindre privilège + secrets</p>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Compte MySQL dédié (pas <code>root</code>), mots de passe hashés (<code>password_hash</code>), jamais de mot de passe en clair ni dans l'URL ni dans le code Git.</p>
          </div>
          <div className="p-4 rounded-xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
            <p className="font-bold text-sm">5. Sauvegarde + mises à jour</p>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Export <code>.sql</code> régulier gardé hors serveur + XAMPP/PHP à jour. Un ransomware sans sauvegarde = catastrophe ; avec sauvegarde = incident.</p>
          </div>
        </div>
      </section>

      {/* XSS */}
      <section id="xss">
        <h2 className="text-2xl font-bold mb-4">6. XSS — Injection de script (faille n°1 des CRUD)</h2>
        <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
          Un attaquant injecte du JavaScript dans un champ (ex. nom = <code>&lt;script&gt;alert('hack')&lt;/script&gt;</code>).
          Sans protection, ce script s'exécute chez tous les visiteurs : vol de cookies, redirection.
        </p>
        <CodeBlock
          language="php"
          filename="Parade XSS — déjà dans index.php"
          code={`<!-- ❌ Vulnérable : -->
<td><?= $etudiant['nom'] ?></td>

<!-- ✅ Protégé (utilisé dans votre projet) : -->
<td><?= htmlspecialchars($etudiant['nom']) ?></td>

<!-- Règle : toujours htmlspecialchars() à l'AFFICHAGE,
     + validation à la SAISIE (JS + PHP) -->`}
        />
        <InfoBox type="tip" title="💡 Réfléchi vs stocké">
          <p><strong>Réfléchi</strong> : via URL piégée, exécution immédiate. <strong>Stocké</strong> : enregistré en BDD puis exécuté à chaque affichage — plus grave. Votre <code>htmlspecialchars</code> bloque les deux à l'affichage.</p>
        </InfoBox>
      </section>

      {/* SQLi */}
      <section id="sqli">
        <h2 className="text-2xl font-bold mb-4">7. Injection SQL — Vol / destruction de la BDD</h2>
        <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
          Sans requête préparée, <code>' OR '1'='1</code> dans un login affiche toute la table. Parade : <strong>requêtes préparées PDO</strong> (déjà dans votre CRUD).
        </p>
        <CodeBlock
          language="php"
          filename="Parade SQLi — déjà dans ajouter.php"
          code={`<?php
// ❌ Vulnérable (concaténation) — NE JAMAIS FAIRE :
// $sql = "SELECT * FROM etudiants WHERE email = '$email'";

// ✅ Protégé avec PDO préparée :
$sql = "INSERT INTO etudiants (nom, prenom, email, filiere) VALUES (:nom, :prenom, :email, :filiere)";
$stmt = $pdo->prepare($sql);
$stmt->execute([':nom' => $nom, ':prenom' => $prenom, ':email' => $email, ':filiere' => $filiere]);
?>`}
        />
        <InfoBox type="warning" title="⚠️ Bonus S12">
          <p>Créez un compte MySQL dédié au site (droits LIMITÉS : SELECT/INSERT/UPDATE/DELETE sur <code>gestion_etudiants</code> uniquement), jamais <code>root</code> en production.</p>
        </InfoBox>
      </section>

      {/* CSRF */}
      <section id="csrf">
        <h2 className="text-2xl font-bold mb-4">8. CSRF — Action forcée à votre insu</h2>
        <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
          Votre <code>supprimer.php?id=5</code> en GET est pratique mais vulnérable : un simple lien/image piégé peut supprimer un étudiant si vous êtes connecté.
          C'est une <strong>simplification volontaire du TP</strong>.
        </p>
        <CodeBlock
          language="php"
          filename="Piste d'amélioration — passer en POST + token"
          code={`<!-- Amélioration S12 : formulaire POST + token CSRF -->
<form method="POST" action="supprimer.php" onsubmit="return confirm('Supprimer ?')">
  <input type="hidden" name="id" value="<?= $etudiant['id'] ?>">
  <input type="hidden" name="csrf" value="<?= $_SESSION['csrf'] ?>">
  <button type="submit">🗑️</button>
</form>

<?php
// supprimer.php : vérifier méthode + token
if ($_SERVER['REQUEST_METHOD'] !== 'POST') exit('Refusé');
if ($_POST['csrf'] !== $_SESSION['csrf']) exit('Token invalide');
// ... puis DELETE préparé
?>`}
        />
      </section>

      {/* Autres attaques */}
      <section id="autres-attaques">
        <h2 className="text-2xl font-bold mb-4">9. Phishing, brute-force, DDoS, MITM</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
            <h4 className="font-bold mb-1">🎣 Phishing</h4>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Faux mail/site qui vole mots de passe. Parades : vérifier domaine, HTTPS + cadenas, double authentification, sensibiliser.</p>
          </div>
          <div className="p-4 rounded-xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
            <h4 className="font-bold mb-1">🔑 Brute-force</h4>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Essais massifs de mots de passe. Parades : mots de passe longs, <code>password_hash()</code> (jamais en clair), limite de tentatives, captcha.</p>
          </div>
          <div className="p-4 rounded-xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
            <h4 className="font-bold mb-1">💥 DDoS</h4>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Saturation du serveur par milliers de requêtes. Parades : CDN, filtrage, hébergeur anti-DDoS. Vu en télécoms : dimensionnement liens.</p>
          </div>
          <div className="p-4 rounded-xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
            <h4 className="font-bold mb-1">👂 MITM</h4>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Écoute sur Wi-Fi public. Parade : <strong>HTTPS (TLS)</strong> obligatoire dès mot de passe/paiement. HTTP = clair.</p>
          </div>
        </div>
        <CodeBlock
          language="php"
          filename="Mots de passe — jamais en clair"
          code={`<?php
// ❌ INTERDIT : stocker en clair
// $mdp = $_POST['mdp'];

// ✅ À faire (bonus login S12) :
$hash = password_hash($_POST['mdp'], PASSWORD_DEFAULT);
// $hash en BDD, puis vérif avec :
if (password_verify($_POST['mdp'], $hashStocke)) {
    echo "Connecté ✅";
}
?>`}
        />
      </section>

      {/* Checklist */}
      <section id="checklist">
        <h2 className="text-2xl font-bold mb-4">10. Checklist « avant mise en ligne » + sauvegarde</h2>
        <div className="p-5 rounded-2xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
          <ul className="text-sm space-y-2" style={{ color: "var(--text-secondary)" }}>
            <li>☐ <code>htmlspecialchars()</code> à chaque affichage + validation JS <strong>et</strong> PHP</li>
            <li>☐ 100% requêtes PDO préparées, compte MySQL à droits limités</li>
            <li>☐ Mots de passe avec <code>password_hash / password_verify</code>, HTTPS activé</li>
            <li>☐ Suppression/modification en POST + token CSRF (pas en GET simple)</li>
            <li>☐ Export sauvegarde : phpMyAdmin → Exporter → <code>gestion_etudiants.sql</code> gardé hors serveur</li>
            <li>☐ XAMPP à jour, erreurs PHP masquées en prod (<code>display_errors=Off</code>)</li>
          </ul>
        </div>
        <CodeBlock
          language="bash"
          filename="Sauvegarde MySQL (XAMPP shell)"
          code={`# Export via phpMyAdmin : Exporter > SQL > Exécuter
# Ou en ligne de commande (dossier xampp/mysql/bin) :
mysqldump -u root gestion_etudiants > sauvegarde-2026-09-29.sql`}
        />
        <InfoBox type="warning" title="⚠️ Livrable S5">
          <p>Auditez votre CRUD : 1) listez 3 endroits où <code>htmlspecialchars</code> est utilisé, 2) 2 requêtes préparées, 3) proposez la correction POST/CSRF pour <code>supprimer.php</code>.</p>
        </InfoBox>
      </section>

      <QuizComponent quizzes={quizzes.securite} title="Sécurité Web" />
    </div>
  );
}
