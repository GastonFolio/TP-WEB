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
  { id: "intro", title: "Introduction Théorique", icon: "📖", sections: ["internet", "web", "http", "client-serveur", "frontend-backend", "bdd"] },
  { id: "xampp", title: "Installation XAMPP", icon: "⚙️", sections: ["telechargement", "installation", "demarrage", "htdocs", "phpmyadmin"] },
  { id: "html", title: "HTML5", icon: "🌐", sections: ["structure", "balises", "formulaires", "tableaux", "liens"] },
  { id: "css", title: "CSS3", icon: "🎨", sections: ["styles", "couleurs", "flexbox", "responsive"] },
  { id: "javascript", title: "JavaScript", icon: "⚡", sections: ["variables", "fonctions", "dom", "evenements"] },
  { id: "php", title: "PHP", icon: "🐘", sections: ["variables-php", "formulaires-php", "get-post", "connexion-db"] },
  { id: "mysql", title: "MySQL", icon: "🗄️", sections: ["creation-db", "tables", "insert", "select", "update", "delete"] },
  { id: "projet", title: "Projet Final", icon: "🚀", sections: ["etape1", "etape2", "etape3", "etape4", "etape5", "etape6", "etape7", "etape8"] },
];

export const quizzes: Record<string, Quiz[]> = {
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
    }
  ]
};
