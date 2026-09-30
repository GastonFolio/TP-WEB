import CodeBlock from "../components/CodeBlock";
import InfoBox from "../components/InfoBox";
import QuizComponent from "../components/QuizComponent";
import { quizzes } from "../data/chapters";

export default function NiveauxWeb() {
  return (
    <div className="fade-in space-y-10">
      <div>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-3" style={{ background: "var(--accent-light)", color: "var(--accent)" }}>
          📅 Séance S4 • 3h • Pré-requis : S1–S3 (réseaux + HTTP)
        </div>
        <h1 className="text-3xl font-extrabold mb-2">🧊 Surface, Deep & Dark Web</h1>
        <p style={{ color: "var(--text-secondary)" }}>
          Tout le Web n'est pas sur Google. Comprends les 3 niveaux, <strong>comment</strong> techniquement on y accède
          (indexation, login, Tor) et les risques — sans jamais manipuler de .onion en classe.
        </p>
      </div>

      <div className="p-5 rounded-2xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
        <h3 className="font-bold mb-2">🎯 Objectifs (fin S4) :</h3>
        <ul className="text-sm space-y-1" style={{ color: "var(--text-secondary)" }}>
          <li>• Définir Surface / Deep / Dark avec exemples et ordres de grandeur</li>
          <li>• Expliquer indexation (crawlers), <code>robots.txt</code>, authentification</li>
          <li>• Expliquer Tor : 3 relais, .onion, ponts — usages légitimes vs illicites + cadre légal</li>
        </ul>
      </div>

      {/* Iceberg */}
      <section id="iceberg">
        <h2 className="text-2xl font-bold mb-4">🧊 L'iceberg : 3 niveaux, 1 même Internet</h2>
        <div className="space-y-3">
          <div className="p-5 rounded-2xl" style={{ background: "var(--bg-secondary)", border: "2px solid #3b82f6" }}>
            <h3 className="font-bold" style={{ color: "#3b82f6" }}>☀️ Surface Web (~5–10%) — indexé, public</h3>
            <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>
              Sites vitrines, blogs, e-commerce, Wikipédia : accessibles sans login, indexés par Google.
              Ex. ton futur portfolio, le site de l'école. C'est là que ton CRUD « vitrine » vivrait.
            </p>
          </div>
          <div className="p-5 rounded-2xl" style={{ background: "var(--bg-secondary)", border: "2px solid #8b5cf6" }}>
            <h3 className="font-bold" style={{ color: "#8b5cf6" }}>🌊 Deep Web (~90%) — non indexé, اغلب légitime</h3>
            <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>
              Webmail, intranet d'entreprise, notes Classroom, dossiers médicaux, BDD payantes.
              Accès par login/lien privé, volontairement hors moteurs. <strong>Deep ≠ illégal</strong> : c'est ton quotidien.
            </p>
          </div>
          <div className="p-5 rounded-2xl" style={{ background: "var(--bg-secondary)", border: "2px solid #ef4444" }}>
            <h3 className="font-bold" style={{ color: "#ef4444" }}>🌑 Dark Web (petite partie) — réseaux anonymes</h3>
            <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>
              Sites en <code>.onion</code> accessibles via <strong>Tor</strong> (ou I2P). Anonymat fort → usages légitimes
              (journalistes, lanceurs d'alerte) ET illicites (marchés noirs, arnaques). Risques : malwares, escroqueries, poursuites.
            </p>
          </div>
        </div>
        <InfoBox type="tip" title="💡 Analogie de l'école">
          <p><strong>Surface</strong> = panneau d'affichage à l'entrée (tout le monde lit). <strong>Deep</strong> = salle des profs avec badge (réservé). <strong>Dark</strong> = réunion secrète hors plan, avec cagoules (anonyme — protège ou cache, selon l'intention).</p>
        </InfoBox>
      </section>

      {/* Indexation */}
      <section id="indexation">
        <h2 className="text-2xl font-bold mb-4">🔍 Pourquoi Google ne voit pas tout ? Indexation</h2>
        <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
          Un moteur envoie des <strong>crawlers</strong> (robots) qui suivent les liens, copient les pages et les classent (index).
          Ce qui bloque l'indexation : login, formulaire, lien non partagé, fichier <code>robots.txt</code>, page trop récente.
        </p>
        <CodeBlock
          language="bash"
          filename="robots.txt — dire aux robots quoi éviter"
          code={`# https://monsite.com/robots.txt
User-agent: *
Disallow: /admin/
Disallow: /notes-privees/

# Convention polie, pas une serrure :
# un attaquant lit robots.txt pour deviner les zones sensibles !`}
        />
        <InfoBox type="info">
          <p>Démo sans risque : sur Google, compare <code>site:gov.bj bourse</code> (surface ciblée) vs ta boîte mail (deep, jamais indexée). Conclus : l'indexation dépend des liens publics + absence de login.</p>
        </InfoBox>
      </section>

      {/* Tor */}
      <section id="tor">
        <h2 className="text-2xl font-bold mb-4">🧅 Tor : le routage en oignon (3 relais)</h2>
        <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
          Tor chiffre ta connexion en <strong>3 couches</strong> (comme un oignon) et la fait passer par <strong>3 relais</strong> bénévoles :
          entrée (te connaît, pas la destination) → milieu → sortie (connaît la destination, pas toi). Les sites <code>.onion</code> restent dans le réseau Tor.
        </p>
        <div className="schema-box">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-sm">
            <div className="p-3 rounded-xl font-semibold" style={{ background: "var(--accent-light)" }}>💻 Toi</div>
            <span className="diagram-arrow">→</span>
            <div className="p-3 rounded-xl" style={{ background: "var(--accent-light)" }}>🧅 Relais 1<br /><span className="text-xs">entrée</span></div>
            <span className="diagram-arrow">→</span>
            <div className="p-3 rounded-xl" style={{ background: "var(--accent-light)" }}>🧅 Relais 2<br /><span className="text-xs">milieu</span></div>
            <span className="diagram-arrow">→</span>
            <div className="p-3 rounded-xl" style={{ background: "var(--accent-light)" }}>🧅 Relais 3<br /><span className="text-xs">sortie</span></div>
            <span className="diagram-arrow">→</span>
            <div className="p-3 rounded-xl font-semibold" style={{ background: "#fef9c3" }}>🌑 .onion</div>
          </div>
          <p className="text-xs text-center mt-3" style={{ color: "var(--text-secondary)" }}>Ponts (bridges) : relais non listés pour pays qui bloquent Tor. I2P : autre réseau anonyme, plus lent.</p>
        </div>
        <InfoBox type="warning" title="⚠️ Lent + pas magique">
          <p>Tor = lent (3 relais monde), ne protège pas si tu te connectes avec ton vrai nom ou télécharges un fichier piégé. Anonymat ≠ impunité : les enquêteurs infiltrent aussi ces réseaux.</p>
        </InfoBox>
      </section>

      {/* Cadre */}
      <section id="cadre-legal">
        <h2 className="text-2xl font-bold mb-4">⚖️ Usages, risques et cadre légal</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl" style={{ background: "#dcfce7", border: "1px solid #22c55e" }}>
            <h4 className="font-bold mb-1">✅ Usages légitimes</h4>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Journalistes sous censure, lanceurs d'alerte, contournement de blocage, vie privée. Le protocole Tor lui-même est légal dans la plupart des pays.</p>
          </div>
          <div className="p-4 rounded-xl" style={{ background: "#fef2f2", border: "1px solid #ef4444" }}>
            <h4 className="font-bold mb-1">❌ Illicite + risques</h4>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Drogues, faux papiers, arnaques, malwares, images pédocriminelles → prison. Arnaque quasi certaine : faux vendeurs qui encaissent et disparaissent.</p>
          </div>
        </div>
        <InfoBox type="error" title="⛔ Règle de classe (non négociable)">
          <p><strong>Aucune installation/utilisation de Tor en classe, aucun lien .onion partagé.</strong> S4 = théorie + débat éthique uniquement. Toute manipulation = sanction + signalement. En entreprise : charte + autorisation écrite avant tout audit.</p>
        </InfoBox>
        <div className="p-5 rounded-2xl mt-4" style={{ background: "linear-gradient(135deg, #3b82f620, #8b5cf620)", border: "1px solid var(--accent)" }}>
          <h3 className="font-bold mb-2">🎤 Livrable S4 — Exposé 5 min (par groupe)</h3>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>1) Classer 6 exemples (blog, webmail, intranet, .onion, BDD payante, portfolio) en Surface/Deep/Dark. 2) Expliquer crawlers + robots.txt. 3) Schéma Tor 3 relais. 4) Avis argumenté : anonymat, protection ou danger ?</p>
        </div>
      </section>

      <QuizComponent quizzes={quizzes.niveaux} title="Surface / Deep / Dark Web" />
    </div>
  );
}
