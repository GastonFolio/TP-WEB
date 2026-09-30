export interface Quiz {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface Chapter {
  id: string;
  title: string;
  icon: string;
  sections: string[];
}

export const chapters: Chapter[] = [
  { id: "accueil", title: "Accueil", icon: "🏠", sections: [] },
  { id: "reseaux", title: "Réseaux, OSI & TCP/IP", icon: "🛰️", sections: ["internet-fai", "osi", "tcpip", "ip-nat", "tcp-udp-ports", "protocoles", "tp-reseau"] },
  { id: "intro", title: "Introduction Théorique", icon: "📖", sections: ["internet", "web", "http", "client-serveur", "frontend-backend", "bdd"] },
  { id: "niveaux", title: "Surface, Deep & Dark Web", icon: "🧊", sections: ["iceberg", "indexation", "tor", "cadre-legal"] },
  { id: "securite", title: "Sécurité Web", icon: "🔒", sections: ["pourquoi", "vocabulaire", "bases", "xss", "sqli", "csrf", "autres-attaques", "checklist"] },
  { id: "xampp", title: "Installation XAMPP", icon: "⚙️", sections: ["telechargement", "installation", "demarrage", "htdocs", "phpmyadmin"] },
  { id: "html", title: "HTML5", icon: "🌐", sections: ["structure", "balises", "formulaires", "tableaux", "liens"] },
  { id: "css", title: "CSS3", icon: "🎨", sections: ["styles", "couleurs", "flexbox", "responsive"] },
  { id: "javascript", title: "JavaScript", icon: "⚡", sections: ["variables", "fonctions", "dom", "evenements"] },
  { id: "php", title: "PHP", icon: "🐘", sections: ["variables-php", "formulaires-php", "get-post", "connexion-db"] },
  { id: "mysql", title: "MySQL", icon: "🗄️", sections: ["creation-db", "tables", "insert", "select", "update", "delete"] },
  { id: "projet", title: "Projet Final", icon: "🚀", sections: ["etape1", "etape2", "etape3", "etape4", "etape5", "etape6", "etape7", "etape8", "etape9", "etape10", "etape11", "etape12"] },
  { id: "python", title: "Projet Python Flask", icon: "🐍", sections: ["py-etape1", "py-etape2", "py-etape3", "py-etape4", "py-etape5", "py-etape6", "py-etape7", "py-etape8"] },
];

export const quizzes: Record<string, Quiz[]> = {
  niveaux: [
    {
      question: "Classe ces exemples : blog public, webmail avec login, site .onion ?",
      options: ["Tout est Surface", "Blog = Surface, webmail = Deep, .onion = Dark", "Tout est Dark", "Blog = Dark, webmail = Surface"],
      correct: 1,
      explanation: "Surface = public indexé. Deep = login/non indexé (légitime). Dark = réseau anonyme Tor (.onion)."
    },
    {
      question: "Pourquoi Google n'indexe pas ta boîte mail ?",
      options: ["Panne Google", "Crawlers bloqués : login + pas de liens publics (+ robots.txt)", "Trop petite", "Trop récente seulement"],
      correct: 1,
      explanation: "Indexation = crawlers qui suivent des liens publics. Login, pages privées et robots.txt les excluent."
    },
    {
      question: "Comment Tor protège l'anonymat ?",
      options: ["1 connexion directe chiffrée", "3 relais + 3 couches de chiffrement (oignon)", "Un VPN payant", "Un antivirus"],
      correct: 1,
      explanation: "Entrée → milieu → sortie. Chaque relais ne connaît qu'une partie du trajet. D'où lenteur et ponts anti-censure."
    },
    {
      question: "Tor est-il illégal et sans risque ?",
      options: ["Oui, toujours illégal", "Protocole souvent légal, mais usages illicites punis + arnaques/malwares fréquents", "Totalement sûr et rapide", "Réservé aux banques"],
      correct: 1,
      explanation: "L'outil est légal en général, ses usages illicites mènent en prison. Risques : escroqueries, malwares, infiltration policière."
    },
    {
      question: "Règle de classe pour S4 ?",
      options: ["Tester Tor en TP", "Théorie + débat uniquement, aucun .onion manipulé", "Partager des liens .onion", "Acheter en Dark pour comprendre"],
      correct: 1,
      explanation: "Cadre strict : aucune manipulation .onion en classe. Exposé + QCM, charte et autorisation en entreprise."
    }
  ],
  securite: [
    {
      question: "Que protège la triade CIA ?",
      options: ["Le Wi-Fi uniquement", "Confidentialité (lire), Intégrité (modifier), Disponibilité (répondre)", "3 antivirus", "3 ports réseau"],
      correct: 1,
      explanation: "CIA = les 3 propriétés à garantir. Chaque attaque vise l'un des 3 piliers : vol (C), modification (I), blocage (D)."
    },
    {
      question: "Quelle différence entre vulnérabilité, menace et risque ?",
      options: ["Ce sont des synonymes", "Vulnérabilité = faiblesse, menace = attaquant, risque = menace × vulnérabilité × impact", "Le risque n'existe pas en local", "La menace suffit sans vulnérabilité"],
      correct: 1,
      explanation: "Sans vulnérabilité (champ non contrôlé), la menace ne peut pas aboutir. Le risque mesure l'impact si ça casse."
    },
    {
      question: "Un champ nom contient <script>alert('hack')</script>. Quelle parade ?",
      options: ["Rien, c'est inoffensif", "htmlspecialchars() à l'affichage + validation saisie", "Supprimer la BDD", "Passer en HTTP"],
      correct: 1,
      explanation: "htmlspecialchars() neutralise le HTML/JS à l'affichage. Compléter par validation JS + PHP à la saisie."
    },
    {
      question: "Que fait ' OR '1'='1 dans un login non protégé ?",
      options: ["Rien", "Injection SQL qui contourne l'authentification", "Accélère la requête", "Chiffre le mot de passe"],
      correct: 1,
      explanation: "Injection SQL classique. Parade : requêtes préparées PDO avec :paramètres, jamais de concaténation."
    },
    {
      question: "Pourquoi supprimer.php?id=5 en GET est risqué ?",
      options: ["Trop lent", "CSRF : un lien piégé peut déclencher la suppression", "Trop sécurisé", "Incompatible MySQL"],
      correct: 1,
      explanation: "GET = action via simple URL. Passer en POST + token CSRF + confirmation."
    },
    {
      question: "Comment stocker un mot de passe ?",
      options: ["En clair dans MySQL", "Avec password_hash() + password_verify()", "Dans un cookie", "Dans l'URL"],
      correct: 1,
      explanation: "Jamais en clair. password_hash() à l'inscription, password_verify() à la connexion, + HTTPS."
    },
    {
      question: "Parade contre l'écoute MITM sur Wi-Fi public ?",
      options: ["HTTP simple", "HTTPS (TLS) + cadenas, Wi-Fi méfiance", "Désactiver le firewall", "Partager son mot de passe"],
      correct: 1,
      explanation: "HTTPS chiffre HTTP via TLS. HTTP seul = clair, lisible par un attaquant réseau."
    }
  ],
  reseaux: [
    {
      question: "Combien de couches compte le modèle OSI et quel est son rôle ?",
      options: ["4 couches pour le routage", "7 couches pour découper la communication", "5 couches pour le Wi-Fi", "3 couches pour le Web"],
      correct: 1,
      explanation: "OSI = 7 couches (Application → Physique). Chaque couche ajoute ses infos : données → segment TCP → paquet IP → trame → bits."
    },
    {
      question: "Quelle est la correspondance TCP/IP ↔ OSI ?",
      options: ["Application = couches 7+6+5, Transport = 4, Internet = 3, Accès = 2+1", "Chaque modèle est indépendant", "TCP/IP = 7 couches aussi", "OSI = 4 couches"],
      correct: 0,
      explanation: "TCP/IP 4 couches regroupe OSI : Application (7+6+5), Transport (4), Internet (3), Accès réseau (2+1)."
    },
    {
      question: "Quelle différence entre TCP et UDP ?",
      options: ["Aucune différence", "TCP fiable avec connexion (Web, mail), UDP rapide sans garantie (streaming, DNS, VoIP)", "UDP est plus fiable que TCP", "TCP ne gère pas les ports"],
      correct: 1,
      explanation: "TCP = fiable, connecté (HTTP, SMTP). UDP = rapide, non connecté (DNS port 53, streaming, VoIP)."
    },
    {
      question: "Que signifient 192.168.1.10 et le NAT de la box ?",
      options: ["Une IP publique unique sur Internet", "Une IP privée locale, traduite en IP publique par le NAT", "Une adresse MAC", "Un port HTTP"],
      correct: 1,
      explanation: "192.168.x.x = privée (domicile/campus). La box fait NAT : privée ↔ publique fournie par le FAI."
    },
    {
      question: "Quel port pour HTTPS et quel outil teste la résolution DNS ?",
      options: ["Port 80 + ping", "Port 443 + nslookup", "Port 21 + ipconfig", "Port 53 + tracert seul"],
      correct: 1,
      explanation: "HTTPS = TCP 443. nslookup interroge le DNS (port 53) pour traduire domaine → IP. ping teste la joignabilité, tracert le chemin."
    }
  ],
  intro: [
    {
      question: "Que signifie HTTP ?",
      options: ["HyperText Transfer Protocol", "High Tech Transfer Protocol", "HyperText Transmission Process", "Home Tool Transfer Protocol"],
      correct: 0,
      explanation: "HTTP signifie HyperText Transfer Protocol. C'est le protocole utilisé pour transférer des pages web entre le serveur et le navigateur."
    },
    {
      question: "Quel est le rôle du serveur dans le modèle Client/Serveur ?",
      options: ["Afficher les pages web", "Stocker et envoyer les données demandées", "Créer le design du site", "Installer les logiciels"],
      correct: 1,
      explanation: "Le serveur stocke les fichiers, traite les requêtes et envoie les réponses au client (navigateur)."
    },
    {
      question: "Quelle est la différence entre Frontend et Backend ?",
      options: [
        "Le Frontend est côté serveur, le Backend côté client",
        "Le Frontend est ce que l'utilisateur voit, le Backend est la logique côté serveur",
        "Il n'y a pas de différence",
        "Le Backend est plus rapide que le Frontend"
      ],
      correct: 1,
      explanation: "Le Frontend (HTML, CSS, JS) est la partie visible par l'utilisateur. Le Backend (PHP, MySQL) gère la logique et les données côté serveur."
    },
    {
      question: "Dans https://monsite.com:443/cours?chap=osi, que désignent 443 et ?chap=osi ?",
      options: ["Le port 443 et la requête (query)", "Le débit et le mot de passe", "La version HTTP et le cookie", "Le dossier et l'ancre"],
      correct: 0,
      explanation: "443 = port HTTPS. ?chap=osi = query (paramètres). Le chemin = /cours. Retenir : protocole://domaine:port/chemin?query#ancre."
    },
    {
      question: "Que signifient les codes 200, 404 et 500 ?",
      options: ["Tout est OK", "200 succès, 404 introuvable (client), 500 erreur serveur", "3 erreurs réseau", "3 redirections"],
      correct: 1,
      explanation: "2xx succès, 3xx redirection, 4xx erreur client (404), 5xx erreur serveur (500)."
    }
  ],
  html: [
    {
      question: "Quelle balise est utilisée pour créer un paragraphe en HTML ?",
      options: ["<paragraph>", "<p>", "<text>", "<para>"],
      correct: 1,
      explanation: "La balise <p> est la balise standard pour créer un paragraphe en HTML."
    },
    {
      question: "Quelle balise crée un formulaire ?",
      options: ["<input>", "<form>", "<submit>", "<field>"],
      correct: 1,
      explanation: "La balise <form> est utilisée pour créer un formulaire HTML qui peut contenir des champs de saisie."
    },
    {
      question: "Quel attribut spécifie la destination d'un lien ?",
      options: ["src", "link", "href", "url"],
      correct: 2,
      explanation: "L'attribut href (Hypertext REFerence) spécifie l'URL de destination d'un lien <a>."
    },
    {
      question: "Quelle méthode de formulaire pour une inscription (données sensibles) ?",
      options: ["GET (visible dans l'URL)", "POST (corps caché, sans limite)", "PUT dans l'URL", "Aucune méthode"],
      correct: 1,
      explanation: "POST cache les données dans le corps. GET expose tout dans l'URL (favoris, historique) — réservé aux lectures/recherches."
    },
    {
      question: "Quelle balise affiche une image et quel attribut donne sa source ?",
      options: ["<image> + href", "<img> + src", "<pic> + link", "<photo> + url"],
      correct: 1,
      explanation: "<img src='photo.jpg' alt='description'>. src = source, alt = texte alternatif (accessibilité)."
    }
  ],
  css: [
    {
      question: "Comment sélectionner un élément par son ID en CSS ?",
      options: [".monId", "#monId", "monId", "*monId"],
      correct: 1,
      explanation: "Le sélecteur # (dièse) est utilisé pour cibler un élément par son ID en CSS."
    },
    {
      question: "Quelle propriété CSS permet de centrer le contenu avec Flexbox ?",
      options: ["text-align: center", "margin: auto", "justify-content: center", "float: center"],
      correct: 2,
      explanation: "justify-content: center centre les éléments horizontalement dans un conteneur flex."
    },
    {
      question: "Comment cibler une classe .btn en CSS et rendre le site responsive ?",
      options: [".btn + @media (max-width: 768px)", "#btn + @print", "btn + @flex", "*btn + @mobile"],
      correct: 0,
      explanation: ".btn cible la classe. @media adapte le design au mobile (ex. tableau plus petit, container réduit)."
    },
    {
      question: "Que change box-sizing: border-box ?",
      options: ["Rien", "padding/border inclus dans la largeur (calcul prévisible)", "Cache l'élément", "Centre le texte"],
      correct: 1,
      explanation: "Avec border-box, width inclut padding + bordure. Sans, l'élément déborde — d'où le reset * { box-sizing: border-box } du projet."
    },
    {
      question: "Quelle règle met un fond dégradé + coins arrondis ?",
      options: ["background: linear-gradient(...) + border-radius", "color + border", "margin + padding", "display + float"],
      correct: 0,
      explanation: "Comme dans style.css : background: linear-gradient(135deg, ...) et border-radius: 16px pour les cartes."
    }
  ],
  javascript: [
    {
      question: "Comment déclarer une variable en JavaScript moderne ?",
      options: ["var x = 5", "let x = 5", "int x = 5", "variable x = 5"],
      correct: 1,
      explanation: "En JavaScript moderne, on utilise let pour les variables qui peuvent changer et const pour les constantes."
    },
    {
      question: "Comment sélectionner un élément HTML par son ID en JavaScript ?",
      options: ["document.getElement('id')", "document.getElementById('id')", "document.select('#id')", "document.find('id')"],
      correct: 1,
      explanation: "document.getElementById() est la méthode standard pour sélectionner un élément par son ID."
    },
    {
      question: "Que fait fetch('api-etudiants.php').then(r => r.json()) ?",
      options: ["Recharge la page", "Appelle l'API sans recharger et lit le JSON", "Écrit en BDD", "Envoie un mail"],
      correct: 1,
      explanation: "fetch = requête async. .json() parse la réponse. Idéal pour recherche instantanée (bonus S12)."
    },
    {
      question: "Pourquoi valider en JS ET en PHP ?",
      options: ["Le JS suffit", "Le JS = confort (contournable), le PHP = sécurité (obligatoire)", "Le PHP suffit, le JS est inutile", "Ni l'un ni l'autre"],
      correct: 1,
      explanation: "L'attaquant désactive le JS en 2 clics. Le serveur doit toujours re-valider $_POST (voir S5)."
    },
    {
      question: "Quel événement pour intercepter l'envoi d'un formulaire ?",
      options: ["click sur body", "submit + e.preventDefault() si invalide", "load uniquement", "keydown uniquement"],
      correct: 1,
      explanation: "form.addEventListener('submit', ...) + e.preventDefault() bloque l'envoi si nom < 2 caractères ou email invalide (script.js du projet)."
    }
  ],
  php: [
    {
      question: "Comment déclare-t-on une variable en PHP ?",
      options: ["var nom", "$nom", "let nom", "dim nom"],
      correct: 1,
      explanation: "En PHP, toutes les variables commencent par le signe dollar $."
    },
    {
      question: "Quelle superglobale PHP récupère les données d'un formulaire envoyé en POST ?",
      options: ["$_GET", "$_POST", "$_REQUEST", "$_FORM"],
      correct: 1,
      explanation: "$_POST est un tableau associatif qui contient les données envoyées via la méthode POST."
    },
    {
      question: "Pourquoi utiliser PDO préparée ($pdo->prepare + execute) ?",
      options: ["Plus rapide à écrire", "Bloque les injections SQL (données séparées de la requête)", "Évite htmlspecialchars", "Remplace MySQL"],
      correct: 1,
      explanation: "Requête préparée = structure SQL fixe + valeurs liées (:nom). L'attaque ' OR '1'='1 devient simple texte (voir S5)."
    },
    {
      question: "GET vs POST pour un mot de passe ?",
      options: ["GET (visible, favoris)", "POST (corps caché) + HTTPS + hash côté serveur", "GET + HTTP", "Les deux identiques"],
      correct: 1,
      explanation: "POST cache de l'URL, HTTPS chiffre le transport, password_hash protège le stockage. Jamais de secret en GET."
    },
    {
      question: "Où appliquer htmlspecialchars() dans le CRUD ?",
      options: ["À la connexion BDD", "À chaque affichage de donnée utilisateur (index/modifier)", "Jamais", "Dans le CSS"],
      correct: 1,
      explanation: "XSS : neutralise <script> à l'affichage. Dans index.php : htmlspecialchars($etudiant['nom']) etc."
    }
  ],
  mysql: [
    {
      question: "Quelle commande SQL permet d'insérer des données ?",
      options: ["ADD INTO", "INSERT INTO", "PUT INTO", "SAVE INTO"],
      correct: 1,
      explanation: "INSERT INTO est la commande SQL standard pour insérer de nouvelles données dans une table."
    },
    {
      question: "Quelle commande SQL permet de lire des données ?",
      options: ["READ", "GET", "SELECT", "FETCH"],
      correct: 2,
      explanation: "SELECT est la commande SQL pour lire et récupérer des données depuis une table."
    },
    {
      question: "Que se passe-t-il avec UPDATE/DELETE sans WHERE ?",
      options: ["Rien", "Toutes les lignes sont modifiées/supprimées (catastrophe)", "Seule la 1re ligne", "La table est renommée"],
      correct: 1,
      explanation: "Sans WHERE, l'action s'applique à toute la table. Toujours tester en SELECT d'abord + sauvegarde."
    },
    {
      question: "Que fait SELECT filiere, COUNT(*) FROM etudiants GROUP BY filiere ?",
      options: ["Supprime tout", "Compte les étudiants par filière (stats S12)", "Crée une table", "Vide le cache"],
      correct: 1,
      explanation: "GROUP BY + COUNT = statistiques par filière pour le bonus S12."
    },
    {
      question: "Comment sauvegarder gestion_etudiants ?",
      options: ["Copier index.php", "phpMyAdmin > Exporter > SQL (+ mysqldump)", "Screenshot", "Aucun besoin"],
      correct: 1,
      explanation: "Export .sql régulier hors serveur. Sans sauvegarde, ransomware/erreur = perte définitive (voir S5)."
    }
  ],
  python: [
    {
      question: "Que faut-il pour lancer le projet Flask en local ?",
      options: ["XAMPP + MySQL", "Python + venv + pip install flask, puis python app.py", "Un hébergeur PHP", "Seulement un navigateur"],
      correct: 1,
      explanation: "Flask embarque son serveur de dev (127.0.0.1:5000) et SQLite est dans la stdlib : venv + pip install flask suffisent."
    },
    {
      question: "Que fait @app.route('/ajouter', methods=['GET','POST']) ?",
      options: ["Crée un fichier", "Lie l'URL /ajouter à la fonction ajouter() en GET+POST", "Installe Flask", "Crée la BDD"],
      correct: 1,
      explanation: "Le décorateur route = table de routage URL → fonction, comme 1 fichier .php = 1 page en PHP."
    },
    {
      question: "Équivalent Flask de htmlspecialchars() et des requêtes préparées PDO ?",
      options: ["Rien n'existe", "Jinja2 {{ }} échappe par défaut + sqlite3 ? paramétrés", "print() + f-string SQL", "input() seul"],
      correct: 1,
      explanation: "Jinja2 auto-échappe le HTML (anti-XSS). Les ? séparent requête/données (anti-SQLi). Ne jamais concaténer en f-string SQL."
    },
    {
      question: "Comment protéger les pages + stocker le mot de passe ?",
      options: ["En clair, sans session", "generate_password_hash / check_password_hash + session + décorateur login_requis", "Cookie user=admin", "URL ?admin=1"],
      correct: 1,
      explanation: "Hash werkzeug à l'inscription, vérif au login, session + session.clear() au logout, décorateur sur chaque page privée."
    },
    {
      question: "Réglage obligatoire avant mise en ligne Flask ?",
      options: ["debug=True partout", "debug=False + secret_key secrète + sauvegarde etudiants.db", "Supprimer les templates", "Port 80 forcé"],
      correct: 1,
      explanation: "debug=True fuit les erreurs en prod. Secret key longue via variable d'environnement. BDD sauvegardée hors serveur."
    }
  ]
};
