import CodeBlock from "../components/CodeBlock";
import InfoBox from "../components/InfoBox";
import QuizComponent from "../components/QuizComponent";
import { quizzes } from "../data/chapters";

export default function ChapitreJS() {
  return (
    <div className="fade-in space-y-10">
      <h1 className="text-3xl font-extrabold mb-2">⚡ JavaScript – Interactivité</h1>
      <p style={{ color: "var(--text-secondary)" }}>
        JavaScript est le langage qui rend vos pages web interactives. Il s'exécute directement dans le navigateur et permet de réagir aux actions de l'utilisateur.
      </p>

      <InfoBox type="tip" title="💡 Analogie">
        <p>HTML = squelette, CSS = vêtements, JavaScript = le cerveau et les muscles qui font bouger le corps !</p>
      </InfoBox>

      {/* Variables */}
      <section id="variables">
        <h2 className="text-2xl font-bold mb-4">📦 Variables</h2>
        <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
          Les variables sont des "boîtes" qui stockent des valeurs. En JavaScript moderne, on utilise <code>let</code> et <code>const</code>.
        </p>

        <CodeBlock
          language="javascript"
          filename="variables.js"
          code={`// const = valeur qui ne change PAS
const nom = "Marie";
const age = 22;
const estEtudiant = true;

// let = valeur qui peut CHANGER
let note = 15;
note = 18;  // ✅ On peut modifier

// Types de données
const texte = "Bonjour";        // String (chaîne de caractères)
const nombre = 42;              // Number (nombre)
const decimal = 3.14;           // Number (décimal)
const vrai = true;              // Boolean (vrai/faux)
const tableau = [1, 2, 3];     // Array (tableau)
const objet = {                 // Object (objet)
    nom: "Dupont",
    prenom: "Marie",
    age: 22
};

// Afficher dans la console
console.log("Nom :", nom);
console.log("Age :", age);
console.log("Tableau :", tableau);

// Concaténation de chaînes (template literals)
const message = \`Bonjour \${nom}, vous avez \${age} ans.\`;
console.log(message);`}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="p-4 rounded-xl" style={{ background: "#dcfce7", border: "2px solid var(--success)" }}>
            <h4 className="font-bold text-sm mb-1" style={{ color: "var(--success)" }}>✅ const (recommandé)</h4>
            <p className="text-xs" style={{ color: "var(--text-secondary)" }}>Valeur qui ne change jamais. Utilisez const par défaut.</p>
          </div>
          <div className="p-4 rounded-xl" style={{ background: "var(--accent-light)", border: "2px solid var(--accent)" }}>
            <h4 className="font-bold text-sm mb-1" style={{ color: "var(--accent)" }}>🔄 let</h4>
            <p className="text-xs" style={{ color: "var(--text-secondary)" }}>Valeur qui peut être modifiée. Pour les compteurs, scores, etc.</p>
          </div>
        </div>
      </section>

      {/* Fonctions */}
      <section id="fonctions">
        <h2 className="text-2xl font-bold mb-4">⚙️ Fonctions</h2>
        <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
          Les fonctions sont des blocs de code réutilisables. Elles prennent des paramètres et peuvent retourner un résultat.
        </p>

        <CodeBlock
          language="javascript"
          filename="fonctions.js"
          code={`// Fonction classique
function saluer(nom) {
    return "Bonjour " + nom + " !";
}
console.log(saluer("Marie"));  // "Bonjour Marie !"

// Fonction fléchée (moderne)
const calculerMoyenne = (notes) => {
    let somme = 0;
    for (let note of notes) {
        somme += note;
    }
    return somme / notes.length;
};

const mesNotes = [15, 18, 12, 16, 14];
console.log("Moyenne :", calculerMoyenne(mesNotes));  // 15

// Fonction de validation
function validerEmail(email) {
    // Vérifie si l'email contient @ et .
    if (email.includes("@") && email.includes(".")) {
        return true;
    }
    return false;
}

console.log(validerEmail("test@email.com"));  // true
console.log(validerEmail("test"));            // false

// Conditions
function verifierAge(age) {
    if (age >= 18) {
        return "Majeur";
    } else if (age >= 16) {
        return "Presque majeur";
    } else {
        return "Mineur";
    }
}`}
        />
      </section>

      {/* DOM */}
      <section id="dom">
        <h2 className="text-2xl font-bold mb-4">🌳 Le DOM (Document Object Model)</h2>
        <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
          Le DOM est la représentation de votre page HTML en mémoire. JavaScript l'utilise pour modifier le contenu, les styles et la structure de la page.
        </p>

        <CodeBlock
          language="javascript"
          filename="dom.js"
          code={`// Sélectionner des éléments
const titre = document.getElementById("mon-titre");
const boutons = document.querySelectorAll(".btn");
const premier = document.querySelector(".carte");

// Modifier le contenu
titre.textContent = "Nouveau titre";       // Texte simple
titre.innerHTML = "<em>Titre en italique</em>"; // HTML

// Modifier les styles
titre.style.color = "blue";
titre.style.fontSize = "2rem";
titre.style.backgroundColor = "#f0f0f0";

// Ajouter/retirer des classes CSS
titre.classList.add("actif");
titre.classList.remove("ancien");
titre.classList.toggle("visible");  // Ajoute ou retire

// Modifier les attributs
const image = document.querySelector("img");
image.setAttribute("src", "nouvelle-photo.jpg");
image.setAttribute("alt", "Nouvelle description");

// Créer un nouvel élément
const nouveauP = document.createElement("p");
nouveauP.textContent = "Paragraphe ajouté par JavaScript !";
nouveauP.classList.add("nouveau");
document.body.appendChild(nouveauP);

// Supprimer un élément
const ancien = document.getElementById("ancien-element");
ancien.remove();`}
        />

        <div className="schema-box">
          <h4 className="font-bold mb-3">🌳 Arbre DOM</h4>
          <div className="font-mono text-sm text-left max-w-sm mx-auto space-y-1">
            <p style={{ color: "var(--accent)" }}>document</p>
            <p className="ml-4">└─ html</p>
            <p className="ml-8">├─ head</p>
            <p className="ml-12">│  └─ title</p>
            <p className="ml-8">└─ body</p>
            <p className="ml-12">   ├─ h1#titre</p>
            <p className="ml-12">   ├─ p.intro</p>
            <p className="ml-12">   └─ div.contenu</p>
            <p className="ml-16">      ├─ p</p>
            <p className="ml-16">      └─ img</p>
          </div>
        </div>
      </section>

      {/* Événements */}
      <section id="evenements">
        <h2 className="text-2xl font-bold mb-4">🎯 Les événements</h2>
        <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
          Les événements permettent à JavaScript de réagir aux actions de l'utilisateur : clic, saisie, survol, soumission de formulaire...
        </p>

        <CodeBlock
          language="javascript"
          filename="evenements.js"
          code={`// Événement au clic
const bouton = document.getElementById("mon-bouton");
bouton.addEventListener("click", function() {
    alert("Vous avez cliqué !");
});

// Événement au survol
const carte = document.querySelector(".carte");
carte.addEventListener("mouseenter", function() {
    this.style.transform = "scale(1.05)";
});
carte.addEventListener("mouseleave", function() {
    this.style.transform = "scale(1)";
});

// Validation de formulaire
const formulaire = document.getElementById("mon-form");
formulaire.addEventListener("submit", function(e) {
    e.preventDefault();  // Empêche l'envoi par défaut
    
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    
    // Validation
    if (nom.trim() === "") {
        alert("Le nom est obligatoire !");
        return;
    }
    
    if (!email.includes("@")) {
        alert("Email invalide !");
        return;
    }
    
    // Si tout est OK, on peut envoyer
    alert("Formulaire valide ! Envoi en cours...");
    this.submit();  // Envoie le formulaire
});

// Événement de saisie en temps réel
const champRecherche = document.getElementById("recherche");
champRecherche.addEventListener("input", function() {
    console.log("Recherche :", this.value);
    // Filtrer les résultats en temps réel...
});`}
        />

        <div className="p-4 rounded-xl mt-4" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
          <h4 className="font-bold mb-3">📋 Événements courants :</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            {[
              ["click", "Clic souris"],
              ["dblclick", "Double-clic"],
              ["submit", "Envoi formulaire"],
              ["input", "Saisie texte"],
              ["change", "Changement valeur"],
              ["keydown", "Touche pressée"],
              ["mouseenter", "Survol entrant"],
              ["mouseleave", "Survol sortant"],
              ["load", "Page chargée"],
            ].map(([evt, desc]) => (
              <div key={evt} className="flex items-center gap-2 p-2 rounded" style={{ background: "var(--bg-primary)" }}>
                <code className="text-xs font-bold" style={{ color: "var(--accent)" }}>{evt}</code>
                <span className="text-xs" style={{ color: "var(--text-secondary)" }}>{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exercice */}
      <div className="p-6 rounded-2xl" style={{ background: "linear-gradient(135deg, #3b82f620, #8b5cf620)", border: "1px solid var(--accent)" }}>
        <h3 className="text-xl font-bold mb-3">🏋️ Mini-exercice JavaScript</h3>
        <p className="mb-3" style={{ color: "var(--text-secondary)" }}>
          Ajoutez de l'interactivité à votre formulaire :
        </p>
        <ol className="space-y-2 text-sm" style={{ color: "var(--text-secondary)" }}>
          <li>1. Validez que le nom n'est pas vide</li>
          <li>2. Vérifiez que l'email contient "@"</li>
          <li>3. Affichez un message de succès en vert</li>
          <li>4. Empêchez l'envoi si les champs sont invalides</li>
        </ol>
      </div>

      <QuizComponent quizzes={quizzes.javascript} title="JavaScript" />
    </div>
  );
}
