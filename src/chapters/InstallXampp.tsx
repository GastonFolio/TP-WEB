import CodeBlock from "../components/CodeBlock";
import InfoBox from "../components/InfoBox";

export default function InstallXampp() {
  return (
    <div className="fade-in space-y-10">
      <h1 className="text-3xl font-extrabold mb-2">⚙️ Installation de XAMPP</h1>
      <p style={{ color: "var(--text-secondary)" }}>
        XAMPP est un logiciel gratuit qui installe un serveur web complet (Apache + PHP + MySQL) sur votre ordinateur. C'est l'outil indispensable pour développer en local.
      </p>

      <InfoBox type="info" title="ℹ️ Pourquoi XAMPP ?">
        <p>XAMPP transforme votre ordinateur en serveur web local. Vous pourrez développer et tester vos sites web sans avoir besoin d'Internet ni d'hébergeur.</p>
      </InfoBox>

      {/* XAMPP = */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {[
          { letter: "X", name: "Cross-platform", desc: "Windows, Mac, Linux" },
          { letter: "A", name: "Apache", desc: "Serveur Web" },
          { letter: "M", name: "MySQL/MariaDB", desc: "Base de données" },
          { letter: "P", name: "PHP", desc: "Langage serveur" },
          { letter: "P", name: "Perl", desc: "Langage script" },
        ].map((item, i) => (
          <div key={i} className="text-center p-4 rounded-xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
            <span className="text-2xl font-extrabold" style={{ color: "var(--accent)" }}>{item.letter}</span>
            <p className="font-semibold text-sm mt-1">{item.name}</p>
            <p className="text-xs" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Étape 1 : Téléchargement */}
      <section id="telechargement">
        <div className="flex items-start gap-4 mb-4">
          <div className="step-number">1</div>
          <div>
            <h2 className="text-2xl font-bold">Téléchargement</h2>
            <p style={{ color: "var(--text-secondary)" }}>Télécharger XAMPP depuis le site officiel</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 rounded-xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
            <h4 className="font-bold mb-2">📥 Instructions :</h4>
            <ol className="space-y-3 text-sm" style={{ color: "var(--text-secondary)" }}>
              <li className="flex items-start gap-2">
                <span className="font-bold" style={{ color: "var(--accent)" }}>1.</span>
                Ouvrez votre navigateur et allez sur : <code className="px-2 py-0.5 rounded text-xs" style={{ background: "var(--code-bg)", color: "#e2e8f0" }}>https://www.apachefriends.org</code>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold" style={{ color: "var(--accent)" }}>2.</span>
                Cliquez sur <strong>"XAMPP for Windows"</strong> (ou Mac/Linux selon votre système)
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold" style={{ color: "var(--accent)" }}>3.</span>
                Choisissez la version avec <strong>PHP 8.x</strong> (la plus récente)
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold" style={{ color: "var(--accent)" }}>4.</span>
                Le téléchargement commence automatiquement (~150 Mo)
              </li>
            </ol>
          </div>

          <div className="schema-box">
            <div className="p-6 rounded-xl" style={{ background: "var(--bg-primary)", border: "2px solid var(--accent)" }}>
              <p className="text-lg font-bold mb-2">🌐 apachefriends.org</p>
              <div className="flex flex-col items-center gap-3">
                <div className="w-full max-w-md p-4 rounded-lg text-left" style={{ background: "var(--accent-light)" }}>
                  <p className="font-bold text-sm">XAMPP for Windows 8.2.12</p>
                  <p className="text-xs" style={{ color: "var(--text-secondary)" }}>PHP 8.2.12 | Apache 2.4 | MySQL 8.0</p>
                  <div className="mt-2 inline-block px-4 py-2 rounded-lg text-white text-sm font-semibold" style={{ background: "var(--accent)" }}>
                    ⬇️ Télécharger (154 Mo)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Étape 2 : Installation */}
      <section id="installation">
        <div className="flex items-start gap-4 mb-4">
          <div className="step-number">2</div>
          <div>
            <h2 className="text-2xl font-bold">Installation</h2>
            <p style={{ color: "var(--text-secondary)" }}>Installer XAMPP sur votre ordinateur</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 rounded-xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
            <ol className="space-y-3 text-sm" style={{ color: "var(--text-secondary)" }}>
              <li className="flex items-start gap-2">
                <span className="font-bold" style={{ color: "var(--accent)" }}>1.</span>
                Double-cliquez sur le fichier téléchargé <code className="px-2 py-0.5 rounded text-xs" style={{ background: "var(--code-bg)", color: "#e2e8f0" }}>xampp-windows-x64-8.2.12-0-VS16-installer.exe</code>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold" style={{ color: "var(--accent)" }}>2.</span>
                Si Windows vous demande une autorisation, cliquez sur <strong>"Oui"</strong>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold" style={{ color: "var(--accent)" }}>3.</span>
                Sélectionnez les composants : <strong>Apache, MySQL, PHP, phpMyAdmin</strong> (cochez-les)
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold" style={{ color: "var(--accent)" }}>4.</span>
                Chemin d'installation : gardez <code className="px-2 py-0.5 rounded text-xs" style={{ background: "var(--code-bg)", color: "#e2e8f0" }}>C:\xampp</code>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold" style={{ color: "var(--accent)" }}>5.</span>
                Cliquez sur <strong>"Next"</strong> puis <strong>"Finish"</strong>
              </li>
            </ol>
          </div>

          <InfoBox type="warning" title="⚠️ Important">
            <p>N'installez <strong>PAS</strong> XAMPP dans <code>C:\Program Files</code>. Gardez le chemin par défaut <code>C:\xampp</code> pour éviter les problèmes de permissions.</p>
          </InfoBox>
        </div>
      </section>

      {/* Étape 3 : Démarrage */}
      <section id="demarrage">
        <div className="flex items-start gap-4 mb-4">
          <div className="step-number">3</div>
          <div>
            <h2 className="text-2xl font-bold">Démarrage Apache & MySQL</h2>
            <p style={{ color: "var(--text-secondary)" }}>Lancer les services nécessaires</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 rounded-xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
            <ol className="space-y-3 text-sm" style={{ color: "var(--text-secondary)" }}>
              <li className="flex items-start gap-2">
                <span className="font-bold" style={{ color: "var(--accent)" }}>1.</span>
                Ouvrez le <strong>XAMPP Control Panel</strong> (depuis le bureau ou le menu démarrer)
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold" style={{ color: "var(--accent)" }}>2.</span>
                Cliquez sur <strong>"Start"</strong> à côté de <strong>Apache</strong>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold" style={{ color: "var(--accent)" }}>3.</span>
                Cliquez sur <strong>"Start"</strong> à côté de <strong>MySQL</strong>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold" style={{ color: "var(--accent)" }}>4.</span>
                Les deux modules doivent passer en <strong style={{ color: "var(--success)" }}>vert</strong>
              </li>
            </ol>
          </div>

          {/* Simulated XAMPP Panel */}
          <div className="schema-box p-0 overflow-hidden">
            <div className="p-3 text-white text-left font-bold text-sm" style={{ background: "#2d2d2d" }}>
              XAMPP Control Panel v3.3.0
            </div>
            <div className="p-4 text-left" style={{ background: "#f0f0f0" }}>
              <div className="space-y-2 text-sm font-mono">
                <div className="flex items-center gap-3 p-2 rounded" style={{ background: "#4ade8033" }}>
                  <span className="w-4 h-4 rounded-full bg-green-500 inline-block"></span>
                  <span className="font-bold w-20">Apache</span>
                  <span className="text-green-700 font-bold">Running</span>
                  <span className="ml-auto px-3 py-1 bg-red-500 text-white rounded text-xs">Stop</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded" style={{ background: "#4ade8033" }}>
                  <span className="w-4 h-4 rounded-full bg-green-500 inline-block"></span>
                  <span className="font-bold w-20">MySQL</span>
                  <span className="text-green-700 font-bold">Running</span>
                  <span className="ml-auto px-3 py-1 bg-red-500 text-white rounded text-xs">Stop</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded">
                  <span className="w-4 h-4 rounded-full bg-gray-400 inline-block"></span>
                  <span className="font-bold w-20">FileZilla</span>
                  <span className="text-gray-500">Stopped</span>
                  <span className="ml-auto px-3 py-1 bg-green-600 text-white rounded text-xs">Start</span>
                </div>
              </div>
            </div>
          </div>

          <InfoBox type="tip" title="✅ Vérification">
            <p>Ouvrez votre navigateur et tapez <code>http://localhost</code>. Si une page XAMPP s'affiche, tout fonctionne ! 🎉</p>
          </InfoBox>

          <InfoBox type="error" title="❌ Erreur : Port 80 déjà utilisé">
            <p>Si Apache ne démarre pas, c'est souvent parce que le port 80 est utilisé par Skype ou un autre programme. Solution : fermez Skype ou changez le port Apache dans <code>httpd.conf</code> (remplacez 80 par 8080).</p>
          </InfoBox>
        </div>
      </section>

      {/* Étape 4 : htdocs */}
      <section id="htdocs">
        <div className="flex items-start gap-4 mb-4">
          <div className="step-number">4</div>
          <div>
            <h2 className="text-2xl font-bold">Le dossier htdocs</h2>
            <p style={{ color: "var(--text-secondary)" }}>Où placer vos fichiers web</p>
          </div>
        </div>

        <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
          Le dossier <code className="px-2 py-0.5 rounded text-xs" style={{ background: "var(--code-bg)", color: "#e2e8f0" }}>C:\xampp\htdocs</code> est le dossier racine de votre serveur web. Tous vos fichiers web doivent être placés ici.
        </p>

        <div className="schema-box text-left">
          <h4 className="font-bold mb-3 text-center">📁 Structure du dossier htdocs</h4>
          <div className="font-mono text-sm space-y-1 max-w-md mx-auto">
            <p>📂 C:\xampp\htdocs\</p>
            <p className="ml-4">📂 mon-projet\</p>
            <p className="ml-8">📄 index.html</p>
            <p className="ml-8">📄 style.css</p>
            <p className="ml-8">📄 script.js</p>
            <p className="ml-8">📄 connexion.php</p>
            <p className="ml-8">📄 ajouter.php</p>
          </div>
        </div>

        <InfoBox type="info">
          <p>Pour accéder à votre projet dans le navigateur : <code>http://localhost/mon-projet/</code></p>
        </InfoBox>

        <CodeBlock
          language="html"
          filename="C:\xampp\htdocs\mon-projet\index.html"
          code={`<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Mon premier site</title>
</head>
<body>
    <h1>Ça fonctionne ! 🎉</h1>
    <p>Mon serveur local est opérationnel.</p>
</body>
</html>`}
        />
      </section>

      {/* Étape 5 : phpMyAdmin */}
      <section id="phpmyadmin">
        <div className="flex items-start gap-4 mb-4">
          <div className="step-number">5</div>
          <div>
            <h2 className="text-2xl font-bold">phpMyAdmin</h2>
            <p style={{ color: "var(--text-secondary)" }}>Gérer vos bases de données visuellement</p>
          </div>
        </div>

        <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
          <strong>phpMyAdmin</strong> est une interface web qui vous permet de créer et gérer vos bases de données MySQL facilement, sans écrire de commandes SQL complexes.
        </p>

        <div className="p-4 rounded-xl mb-4" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
          <h4 className="font-bold mb-2">🔗 Accès :</h4>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            Dans votre navigateur, tapez : <code className="px-2 py-0.5 rounded text-xs" style={{ background: "var(--code-bg)", color: "#e2e8f0" }}>http://localhost/phpmyadmin</code>
          </p>
        </div>

        <div className="schema-box p-0 overflow-hidden">
          <div className="p-3 text-white text-sm font-bold" style={{ background: "#2d2d2d" }}>
            🌐 localhost/phpmyadmin
          </div>
          <div className="p-4 text-left" style={{ background: "#f8f8f8" }}>
            <div className="flex gap-4">
              <div className="w-1/3 p-3 rounded text-sm" style={{ background: "#e8e8e8" }}>
                <p className="font-bold mb-2">📁 Bases de données</p>
                <ul className="space-y-1 text-xs">
                  <li className="p-1 rounded" style={{ background: "#d0d0d0" }}>information_schema</li>
                  <li className="p-1 rounded" style={{ background: "#d0d0d0" }}>mysql</li>
                  <li className="p-1 rounded" style={{ background: "#d0d0d0" }}>performance_schema</li>
                  <li className="p-1 rounded font-bold" style={{ background: "#bfdbfe" }}>gestion_etudiants</li>
                </ul>
              </div>
              <div className="w-2/3 p-3 rounded text-sm" style={{ background: "#fff" }}>
                <p className="font-bold mb-2">Table : etudiants</p>
                <table className="w-full text-xs">
                  <thead>
                    <tr style={{ background: "#e8e8e8" }}>
                      <th className="p-1">id</th>
                      <th className="p-1">nom</th>
                      <th className="p-1">prenom</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="p-1 border">1</td><td className="p-1 border">Dupont</td><td className="p-1 border">Marie</td></tr>
                    <tr><td className="p-1 border">2</td><td className="p-1 border">Martin</td><td className="p-1 border">Pierre</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <InfoBox type="tip">
          <p>phpMyAdmin est votre meilleur ami pour visualiser vos données pendant le développement. Utilisez-le pour vérifier que vos requêtes PHP fonctionnent correctement.</p>
        </InfoBox>
      </section>
    </div>
  );
}
