import CodeBlock from "../components/CodeBlock";
import InfoBox from "../components/InfoBox";
import QuizComponent from "../components/QuizComponent";
import { quizzes } from "../data/chapters";

export default function IntroTheorie() {
  return (
    <div className="fade-in space-y-10">
      <h1 className="text-3xl font-extrabold mb-2">📖 Introduction Théorique</h1>
      <p style={{ color: "var(--text-secondary)" }}>
        Avant de coder, comprenons comment fonctionne Internet et le Web. Ces bases sont essentielles pour devenir un bon développeur.
      </p>

      {/* Internet */}
      <section id="internet">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">🌍 Qu'est-ce qu'Internet ?</h2>
        <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
          <strong>Internet</strong> est un réseau mondial d'ordinateurs interconnectés. Imaginez-le comme un gigantesque système routier qui relie tous les ordinateurs du monde entre eux.
        </p>
        
        <InfoBox type="tip" title="💡 Analogie simple">
          <p>Internet, c'est comme le réseau téléphonique mondial : il permet à n'importe quel appareil de communiquer avec un autre, peu importe la distance.</p>
        </InfoBox>

        <div className="schema-box">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="p-4 rounded-xl" style={{ background: "var(--accent-light)" }}>
              <span className="text-4xl">💻</span>
              <p className="text-sm font-semibold mt-1">Votre PC</p>
            </div>
            <div className="diagram-arrow">→</div>
            <div className="p-4 rounded-xl" style={{ background: "var(--accent-light)" }}>
              <span className="text-4xl">🌐</span>
              <p className="text-sm font-semibold mt-1">Internet (Réseau)</p>
            </div>
            <div className="diagram-arrow">→</div>
            <div className="p-4 rounded-xl" style={{ background: "var(--accent-light)" }}>
              <span className="text-4xl">🖥️</span>
              <p className="text-sm font-semibold mt-1">Serveur Web</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="p-4 rounded-xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
            <h4 className="font-bold mb-2">📧 Services Internet</h4>
            <ul className="text-sm space-y-1" style={{ color: "var(--text-secondary)" }}>
              <li>• Email (courrier électronique)</li>
              <li>• Web (sites web)</li>
              <li>• FTP (transfert de fichiers)</li>
              <li>• DNS (résolution de noms)</li>
              <li>• VoIP (appels internet)</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
            <h4 className="font-bold mb-2">🔢 Adresse IP</h4>
            <p className="text-sm mb-2" style={{ color: "var(--text-secondary)" }}>
              Chaque appareil sur Internet possède une adresse unique appelée <strong>adresse IP</strong> :
            </p>
            <code className="text-sm px-2 py-1 rounded" style={{ background: "var(--code-bg)", color: "#e2e8f0" }}>192.168.1.100</code>
          </div>
        </div>
      </section>

      {/* Le Web */}
      <section id="web">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">🕸️ Qu'est-ce que le Web ?</h2>
        <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
          Le <strong>Web</strong> (World Wide Web) est un service d'Internet qui permet de consulter des pages web via un navigateur. C'est la partie d'Internet que vous utilisez tous les jours !
        </p>
        
        <InfoBox type="info">
          <p><strong>Internet ≠ Web</strong>. Internet est le réseau physique. Le Web est un service qui utilise ce réseau pour afficher des pages web.</p>
        </InfoBox>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="tech-card">
            <span className="text-3xl">📄</span>
            <h4 className="font-bold mt-2">Page Web</h4>
            <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>Un document HTML affiché dans un navigateur</p>
          </div>
          <div className="tech-card">
            <span className="text-3xl">📁</span>
            <h4 className="font-bold mt-2">Site Web</h4>
            <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>Un ensemble de pages web reliées entre elles</p>
          </div>
          <div className="tech-card">
            <span className="text-3xl">🔗</span>
            <h4 className="font-bold mt-2">URL</h4>
            <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>L'adresse unique d'une page (ex: https://google.com)</p>
          </div>
        </div>
      </section>

      {/* HTTP/HTTPS */}
      <section id="http">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">🔒 HTTP / HTTPS</h2>
        <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
          <strong>HTTP</strong> (HyperText Transfer Protocol) est le protocole de communication entre votre navigateur et le serveur web. C'est le "langage" qu'ils utilisent pour se parler.
        </p>

        <InfoBox type="tip" title="💡 Analogie">
          <p>HTTP, c'est comme la langue commune entre un client au restaurant et le serveur : il faut parler le même langage pour se comprendre !</p>
        </InfoBox>

        <div className="schema-box">
          <h4 className="font-bold mb-4">🔄 Cycle Requête / Réponse HTTP</h4>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <div className="p-4 rounded-xl" style={{ background: "var(--accent-light)" }}>
              <span className="text-3xl">🖥️</span>
              <p className="text-sm font-semibold mt-1">Navigateur</p>
              <p className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>(Client)</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-1">
                <span className="text-sm font-mono px-2 py-1 rounded" style={{ background: "var(--accent)", color: "white" }}>GET /index.html</span>
                <span className="diagram-arrow">→</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="diagram-arrow" style={{ transform: "scaleX(-1)" }}>→</span>
                <span className="text-sm font-mono px-2 py-1 rounded" style={{ background: "var(--success)", color: "white" }}>200 OK + HTML</span>
              </div>
            </div>
            <div className="p-4 rounded-xl" style={{ background: "var(--accent-light)" }}>
              <span className="text-3xl">🗄️</span>
              <p className="text-sm font-semibold mt-1">Serveur</p>
              <p className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>(Apache)</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="p-4 rounded-xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
            <h4 className="font-bold mb-2">🔓 HTTP</h4>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Communication non chiffrée. Les données circulent en clair. Utilisé pour les sites sans données sensibles.
            </p>
          </div>
          <div className="p-4 rounded-xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
            <h4 className="font-bold mb-2">🔒 HTTPS</h4>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Communication chiffrée avec SSL/TLS. Les données sont cryptées. Obligatoire pour les sites avec mots de passe, paiements, etc.
            </p>
          </div>
        </div>
      </section>

      {/* Client / Serveur */}
      <section id="client-serveur">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">🔄 Modèle Client / Serveur</h2>
        <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
          Le Web fonctionne selon le modèle <strong>Client / Serveur</strong> : un programme (le client) envoie des demandes, un autre programme (le serveur) y répond.
        </p>

        <InfoBox type="tip" title="💡 Analogie du restaurant">
          <p>
            <strong>Client</strong> = Vous au restaurant, vous commandez un plat<br/>
            <strong>Serveur</strong> = Le serveur qui prend votre commande et vous apporte le plat<br/>
            <strong>Cuisine</strong> = La base de données qui prépare les données
          </p>
        </InfoBox>

        <div className="schema-box">
          <h4 className="font-bold mb-4">Architecture Client / Serveur</h4>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="p-6 rounded-2xl" style={{ background: "var(--accent-light)", border: "2px solid var(--accent)" }}>
              <span className="text-5xl">👤</span>
              <p className="font-bold mt-2">CLIENT</p>
              <p className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>Navigateur Web</p>
              <p className="text-xs" style={{ color: "var(--text-secondary)" }}>(Chrome, Firefox...)</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm font-semibold mb-1">Requête HTTP</span>
              <span className="text-3xl">⇄</span>
              <span className="text-sm font-semibold mt-1">Réponse HTTP</span>
            </div>
            <div className="p-6 rounded-2xl" style={{ background: "#dcfce7", border: "2px solid var(--success)" }}>
              <span className="text-5xl">🖥️</span>
              <p className="font-bold mt-2">SERVEUR</p>
              <p className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>Apache + PHP</p>
              <p className="text-xs" style={{ color: "var(--text-secondary)" }}>(XAMPP)</p>
            </div>
            <div className="diagram-arrow">→</div>
            <div className="p-6 rounded-2xl" style={{ background: "#fef9c3", border: "2px solid var(--warning)" }}>
              <span className="text-5xl">🗄️</span>
              <p className="font-bold mt-2">BDD</p>
              <p className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>MySQL</p>
              <p className="text-xs" style={{ color: "var(--text-secondary)" }}>(phpMyAdmin)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Frontend vs Backend */}
      <section id="frontend-backend">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">🎭 Frontend vs Backend</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="p-6 rounded-2xl" style={{ background: "var(--bg-secondary)", border: "2px solid #3b82f6" }}>
            <h3 className="text-xl font-bold mb-3" style={{ color: "#3b82f6" }}>🎨 Frontend (Côté Client)</h3>
            <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
              C'est tout ce que l'utilisateur <strong>voit et touche</strong> dans son navigateur.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2 rounded-lg" style={{ background: "var(--bg-primary)" }}>
                <span className="text-lg">🌐</span>
                <div>
                  <span className="font-semibold text-sm">HTML</span>
                  <span className="text-xs ml-2" style={{ color: "var(--text-secondary)" }}>Structure</span>
                </div>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg" style={{ background: "var(--bg-primary)" }}>
                <span className="text-lg">🎨</span>
                <div>
                  <span className="font-semibold text-sm">CSS</span>
                  <span className="text-xs ml-2" style={{ color: "var(--text-secondary)" }}>Design</span>
                </div>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg" style={{ background: "var(--bg-primary)" }}>
                <span className="text-lg">⚡</span>
                <div>
                  <span className="font-semibold text-sm">JavaScript</span>
                  <span className="text-xs ml-2" style={{ color: "var(--text-secondary)" }}>Interactivité</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl" style={{ background: "var(--bg-secondary)", border: "2px solid #8b5cf6" }}>
            <h3 className="text-xl font-bold mb-3" style={{ color: "#8b5cf6" }}>⚙️ Backend (Côté Serveur)</h3>
            <p className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
              C'est la logique <strong>invisible</strong> qui traite les données sur le serveur.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2 rounded-lg" style={{ background: "var(--bg-primary)" }}>
                <span className="text-lg">🐘</span>
                <div>
                  <span className="font-semibold text-sm">PHP</span>
                  <span className="text-xs ml-2" style={{ color: "var(--text-secondary)" }}>Logique serveur</span>
                </div>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg" style={{ background: "var(--bg-primary)" }}>
                <span className="text-lg">🗄️</span>
                <div>
                  <span className="font-semibold text-sm">MySQL</span>
                  <span className="text-xs ml-2" style={{ color: "var(--text-secondary)" }}>Base de données</span>
                </div>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg" style={{ background: "var(--bg-primary)" }}>
                <span className="text-lg">🖥️</span>
                <div>
                  <span className="font-semibold text-sm">Apache</span>
                  <span className="text-xs ml-2" style={{ color: "var(--text-secondary)" }}>Serveur web</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Base de données */}
      <section id="bdd">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">🗄️ Base de données</h2>
        <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
          Une <strong>base de données</strong> est un système organisé pour stocker, gérer et retrouver des informations. C'est comme un grand classeur numérique avec des tiroirs (tables) et des fiches (enregistrements).
        </p>

        <InfoBox type="tip" title="💡 Analogie">
          <p>Une base de données, c'est comme un tableur Excel géant : des lignes (enregistrements), des colonnes (champs), et des feuilles (tables).</p>
        </InfoBox>

        <div className="my-6 overflow-x-auto">
          <table className="w-full text-sm rounded-xl overflow-hidden" style={{ border: "1px solid var(--border-color)" }}>
            <thead>
              <tr style={{ background: "var(--accent)", color: "white" }}>
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Nom</th>
                <th className="p-3 text-left">Prénom</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Filière</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: "var(--bg-secondary)" }}>
                <td className="p-3">1</td>
                <td className="p-3">Dupont</td>
                <td className="p-3">Marie</td>
                <td className="p-3">marie@email.com</td>
                <td className="p-3">Informatique</td>
              </tr>
              <tr>
                <td className="p-3">2</td>
                <td className="p-3">Martin</td>
                <td className="p-3">Pierre</td>
                <td className="p-3">pierre@email.com</td>
                <td className="p-3">Réseaux</td>
              </tr>
              <tr style={{ background: "var(--bg-secondary)" }}>
                <td className="p-3">3</td>
                <td className="p-3">Bernard</td>
                <td className="p-3">Sophie</td>
                <td className="p-3">sophie@email.com</td>
                <td className="p-3">Informatique</td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm mt-2 text-center" style={{ color: "var(--text-secondary)" }}>
            Exemple de table "etudiants" dans une base de données MySQL
          </p>
        </div>

        <CodeBlock
          language="sql"
          filename="Exemple de requête SQL"
          code={`-- Sélectionner tous les étudiants en Informatique
SELECT nom, prenom, email 
FROM etudiants 
WHERE filiere = 'Informatique';`}
        />
      </section>

      {/* Quiz */}
      <QuizComponent quizzes={quizzes.intro} title="Introduction" />
    </div>
  );
}
