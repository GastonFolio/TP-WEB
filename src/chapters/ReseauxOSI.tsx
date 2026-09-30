import CodeBlock from "../components/CodeBlock";
import InfoBox from "../components/InfoBox";
import QuizComponent from "../components/QuizComponent";
import { quizzes } from "../data/chapters";

const osiLayers = [
  { n: 7, nom: "Application", exemples: "HTTP, DNS, SMTP, FTP", role: "Services réseau pour l'utilisateur" },
  { n: 6, nom: "Présentation", exemples: "SSL/TLS, JPEG, JSON", role: "Chiffrement, format, compression" },
  { n: 5, nom: "Session", exemples: "Cookies, sessions, NetBIOS", role: "Ouverture et gestion des sessions" },
  { n: 4, nom: "Transport", exemples: "TCP, UDP + ports", role: "Fiabilité, segmentation, ports" },
  { n: 3, nom: "Réseau", exemples: "IP, routeurs, ICMP", role: "Adressage IP et routage" },
  { n: 2, nom: "Liaison", exemples: "Ethernet, Wi-Fi, MAC, ARP", role: "Trames, adresses MAC, accès média" },
  { n: 1, nom: "Physique", exemples: "Câble, fibre, 4G/5G", role: "Bits, signaux électriques/optiques" },
];

export default function ReseauxOSI() {
  return (
    <div className="fade-in space-y-10">
      <div>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-3" style={{ background: "var(--accent-light)", color: "var(--accent)" }}>
          📅 Séances S1–S2 • 6h (2 × 3h) • Niveau TS Télécoms
        </div>
        <h1 className="text-3xl font-extrabold mb-2">🛰️ Réseaux, Internet, OSI & TCP/IP</h1>
        <p style={{ color: "var(--text-secondary)" }}>
          Comprendre comment les données voyagent d'un PC au serveur : FAI, paquets, modèle OSI 7 couches,
          modèle TCP/IP, adresses IP, ports et protocoles. Base obligatoire avant le Web et la sécurité.
        </p>
      </div>

      <div className="p-5 rounded-2xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
        <h3 className="font-bold mb-2">🎯 Objectifs (fin S2) :</h3>
        <ul className="text-sm space-y-1" style={{ color: "var(--text-secondary)" }}>
          <li>• Expliquer Internet : réseau de réseaux, paquets, FAI, peering/transit</li>
          <li>• Citer les 7 couches OSI + 4 couches TCP/IP et leur correspondance</li>
          <li>• Lire une adresse IP, un masque, un port ; distinguer privée/publique, IPv4/IPv6, TCP/UDP</li>
          <li>• Utiliser <code>ipconfig</code>, <code>ping</code>, <code>tracert</code>, <code>nslookup</code></li>
        </ul>
      </div>

      {/* Internet / FAI */}
      <section id="internet-fai">
        <h2 className="text-2xl font-bold mb-4">🌍 Internet : réseau de réseaux</h2>
        <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
          <strong>Internet</strong> n'est pas un seul réseau : c'est l'interconnexion de milliers de réseaux
          (domicile, université, opérateur, datacenter) via des <strong>routeurs</strong>. Les données sont
          découpées en <strong>paquets</strong> qui voyagent indépendamment (commutation de paquets).
        </p>

        <div className="schema-box">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="p-4 rounded-xl text-center" style={{ background: "var(--accent-light)" }}>
              <span className="text-3xl">💻</span>
              <p className="text-sm font-bold">PC apprenant</p>
              <p className="text-xs" style={{ color: "var(--text-secondary)" }}>192.168.1.10 (privée)</p>
            </div>
            <span className="diagram-arrow">→</span>
            <div className="p-4 rounded-xl text-center" style={{ background: "var(--accent-light)" }}>
              <span className="text-3xl">📦</span>
              <p className="text-sm font-bold">Box / FAI</p>
              <p className="text-xs" style={{ color: "var(--text-secondary)" }}>NAT + IP publique</p>
            </div>
            <span className="diagram-arrow">→</span>
            <div className="p-4 rounded-xl text-center" style={{ background: "var(--accent-light)" }}>
              <span className="text-3xl">🌐</span>
              <p className="text-sm font-bold">Cœur Internet</p>
              <p className="text-xs" style={{ color: "var(--text-secondary)" }}>peering / transit</p>
            </div>
            <span className="diagram-arrow">→</span>
            <div className="p-4 rounded-xl text-center" style={{ background: "var(--accent-light)" }}>
              <span className="text-3xl">🖥️</span>
              <p className="text-sm font-bold">Serveur Web</p>
              <p className="text-xs" style={{ color: "var(--text-secondary)" }}>203.0.113.10 (publique)</p>
            </div>
          </div>
        </div>

        <InfoBox type="info" title="ℹ️ FAI, peering, transit">
          <p>
            Votre <strong>FAI</strong> (Orange, MTN, Moov…) vous donne accès au reste d'Internet.
            Les FAI s'échangent du trafic par <strong>peering</strong> (gratuit, direct) ou <strong>transit</strong> (payant via un opérateur supérieur).
            D'où des lenteurs variables selon les routes.
          </p>
        </InfoBox>
      </section>

      {/* OSI */}
      <section id="osi">
        <h2 className="text-2xl font-bold mb-4">🏗️ Modèle OSI — 7 couches (à connaître par cœur)</h2>
        <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
          L'OSI découpe la communication en 7 couches. Chaque couche ajoute ses informations (encapsulation) :
          données → segment (TCP) → paquet (IP) → trame (Ethernet) → bits (câble/fibre).
        </p>

        <div className="space-y-2">
          {osiLayers.map((l) => (
            <div key={l.n} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
              <div className="step-number text-sm" style={{ minWidth: 40 }}>{l.n}</div>
              <div className="flex-1">
                <p className="font-bold text-sm">{l.nom} <span className="font-normal text-xs" style={{ color: "var(--text-secondary)" }}>— {l.exemples}</span></p>
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>{l.role}</p>
              </div>
            </div>
          ))}
        </div>

        <InfoBox type="tip" title="💡 Moyen mnémotechnique">
          <p>« <strong>A</strong>pplication, <strong>P</strong>résentation, <strong>S</strong>ession, <strong>T</strong>ransport, <strong>R</strong>éseau, <strong>L</strong>iaison, <strong>P</strong>hysique » — de 7 vers 1. En télécoms, on vous interrogera couche par couche.</p>
        </InfoBox>
      </section>

      {/* TCP/IP */}
      <section id="tcpip">
        <h2 className="text-2xl font-bold mb-4">🔄 Modèle TCP/IP — 4 couches (celui utilisé en vrai)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm rounded-xl overflow-hidden" style={{ border: "1px solid var(--border-color)" }}>
            <thead>
              <tr style={{ background: "var(--accent)", color: "white" }}>
                <th className="p-3 text-left">TCP/IP</th>
                <th className="p-3 text-left">Correspondance OSI</th>
                <th className="p-3 text-left">Exemples</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: "var(--bg-secondary)" }}><td className="p-3 font-bold">Application</td><td className="p-3">7+6+5 (Application/Présentation/Session)</td><td className="p-3">HTTP, DNS, SMTP, FTP</td></tr>
              <tr><td className="p-3 font-bold">Transport</td><td className="p-3">4 (Transport)</td><td className="p-3">TCP, UDP + ports</td></tr>
              <tr style={{ background: "var(--bg-secondary)" }}><td className="p-3 font-bold">Internet</td><td className="p-3">3 (Réseau)</td><td className="p-3">IP, ICMP, routage</td></tr>
              <tr><td className="p-3 font-bold">Accès réseau</td><td className="p-3">2+1 (Liaison + Physique)</td><td className="p-3">Ethernet, Wi-Fi, fibre, 4G</td></tr>
            </tbody>
          </table>
        </div>
        <InfoBox type="info">
          <p>En pratique on utilise TCP/IP. L'OSI sert de <strong>grille de diagnostic</strong> : « panne couche 1 (câble) ? couche 3 (IP) ? couche 4 (port fermé) ? couche 7 (HTTP 404) ? »</p>
        </InfoBox>
      </section>

      {/* IP / NAT */}
      <section id="ip-nat">
        <h2 className="text-2xl font-bold mb-4">🔢 Adresses IP, masques, NAT, IPv6</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
            <h4 className="font-bold mb-2">🏠 Privée vs 🌍 Publique</h4>
            <ul className="text-sm space-y-1" style={{ color: "var(--text-secondary)" }}>
              <li>• Privées : <code>192.168.x.x</code>, <code>10.x.x.x</code> — chez vous / campus</li>
              <li>• Publique : donnée par le FAI, unique sur Internet</li>
              <li>• <strong>NAT</strong> : la box traduit privée ↔ publique</li>
              <li>• Masque ex. <code>255.255.255.0</code> + passerelle = route de sortie</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
            <h4 className="font-bold mb-2">IPv4 vs IPv6</h4>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              IPv4 : <code>192.168.1.10</code> (4 nombres, pénurie).<br />
              IPv6 : <code>2001:db8::1</code> (immense, natif sur mobile/fibre).<br />
              En TP, vous verrez les deux dans <code>ipconfig</code>.
            </p>
          </div>
        </div>
      </section>

      {/* TCP/UDP + Ports */}
      <section id="tcp-udp-ports">
        <h2 className="text-2xl font-bold mb-4">🔌 TCP vs UDP + ports (couche 4)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="p-5 rounded-xl" style={{ background: "var(--bg-secondary)", border: "2px solid var(--accent)" }}>
            <h3 className="font-bold mb-2" style={{ color: "var(--accent)" }}>TCP — fiable</h3>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Connexion + accusés de réception. Pour Web, mail, fichiers. Ex. handshake en 3 temps avant HTTP.</p>
          </div>
          <div className="p-5 rounded-xl" style={{ background: "var(--bg-secondary)", border: "2px solid #8b5cf6" }}>
            <h3 className="font-bold mb-2" style={{ color: "#8b5cf6" }}>UDP — rapide</h3>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Sans connexion, sans garantie. Pour streaming, VoIP, DNS, jeux.</p>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm rounded-xl overflow-hidden" style={{ border: "1px solid var(--border-color)" }}>
            <thead>
              <tr style={{ background: "var(--accent)", color: "white" }}>
                <th className="p-3 text-left">Port</th><th className="p-3 text-left">Service</th><th className="p-3 text-left">Protocole</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: "var(--bg-secondary)" }}><td className="p-3 font-mono">80</td><td className="p-3">HTTP</td><td className="p-3">TCP</td></tr>
              <tr><td className="p-3 font-mono">443</td><td className="p-3">HTTPS</td><td className="p-3">TCP</td></tr>
              <tr style={{ background: "var(--bg-secondary)" }}><td className="p-3 font-mono">21</td><td className="p-3">FTP</td><td className="p-3">TCP</td></tr>
              <tr><td className="p-3 font-mono">25 / 110 / 143</td><td className="p-3">SMTP / POP3 / IMAP</td><td className="p-3">TCP</td></tr>
              <tr style={{ background: "var(--bg-secondary)" }}><td className="p-3 font-mono">53</td><td className="p-3">DNS</td><td className="p-3">UDP/TCP</td></tr>
              <tr><td className="p-3 font-mono">3306</td><td className="p-3">MySQL</td><td className="p-3">TCP</td></tr>
              <tr style={{ background: "var(--bg-secondary)" }}><td className="p-3 font-mono">8080</td><td className="p-3">HTTP alternatif (XAMPP)</td><td className="p-3">TCP</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Protocoles */}
      <section id="protocoles">
        <h2 className="text-2xl font-bold mb-4">📡 Protocoles essentiels (couche Application + support)</h2>
        <ul className="text-sm space-y-2 mb-4" style={{ color: "var(--text-secondary)" }}>
          <li>• <strong>DNS (port 53)</strong> : traduit <code>google.com</code> → IP. Étapes : cache → serveur FAI → racine → TLD → autoritatif.</li>
          <li>• <strong>DHCP</strong> : donne automatiquement IP + masque + passerelle + DNS.</li>
          <li>• <strong>ICMP</strong> : utilisé par <code>ping</code> / <code>tracert</code> (diagnostic, pas de données).</li>
          <li>• <strong>ARP</strong> : trouve l'adresse MAC à partir de l'IP en local.</li>
          <li>• <strong>Email</strong> : SMTP (envoi, 25) + POP3/IMAP (réception, 110/143).</li>
          <li>• <strong>FTP (21)</strong> : transfert de fichiers (à remplacer par SFTP quand possible).</li>
        </ul>
        <InfoBox type="tip" title="💡 Lien avec la suite">
          <p>HTTP/HTTPS (Web), vus en S3, sont eux aussi des protocoles applicatifs — ils utilisent TCP 80/443 + DNS + IP. Tout s'emboîte.</p>
        </InfoBox>
      </section>

      {/* TP réseau */}
      <section id="tp-reseau">
        <h2 className="text-2xl font-bold mb-4">🧪 TP S1–S2 — Observer son réseau (sans installer)</h2>
        <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
          Ouvrez un terminal (Windows : <code>cmd</code> / Mac-Linux : Terminal) et testez dans l'ordre. Notez chaque résultat.
        </p>
        <CodeBlock
          language="bash"
          filename="TP réseau — commandes à tester"
          code={`# 1. Ma configuration IP
ipconfig        # Windows
# ifconfig ou ip addr   # Mac / Linux

# 2. Tester la boucle locale puis Internet
ping 127.0.0.1
ping localhost
ping google.com

# 3. Voir le chemin des paquets
tracert google.com    # Windows
# traceroute google.com  # Mac / Linux

# 4. Résolution DNS
nslookup google.com

# 5. Décortiquer une URL (à recopier dans le cahier) :
# https://monsite.com:443/cours/reseaux?chap=osi#section2
# protocole=https | domaine=monsite.com | port=443 | chemin=/cours/reseaux | query=chap=osi | ancre=section2`}
        />
        <InfoBox type="warning" title="⚠️ Livrable S2">
          <p>Rendre : 1) capture <code>ipconfig</code> + IP privée relevée, 2) temps <code>ping</code>, 3) nombre de sauts <code>tracert</code>, 4) IP obtenue via <code>nslookup</code>, 5) schéma OSI 7 couches recopié de mémoire.</p>
        </InfoBox>
      </section>

      <QuizComponent quizzes={quizzes.reseaux} title="Réseaux & OSI/TCP-IP" />
    </div>
  );
}
