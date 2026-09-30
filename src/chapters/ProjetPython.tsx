import CodeBlock from "../components/CodeBlock";
import InfoBox from "../components/InfoBox";
import QuizComponent from "../components/QuizComponent";
import { quizzes } from "../data/chapters";

export default function ProjetPython() {
  return (
    <div className="fade-in space-y-10">
      <div>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-3" style={{ background: "var(--accent-light)", color: "var(--accent)" }}>
          📅 Projet 2 • après S12 • 6–9h en autonomie • Pré-requis : HTML/CSS/JS + 1 CRUD (PHP)
        </div>
        <h1 className="text-3xl font-extrabold mb-2">🐍 Projet Python Flask — Gestion d'Étudiants</h1>
        <p style={{ color: "var(--text-secondary)" }}>
          Même application que le projet PHP, reconstruite en <strong>Python + Flask + SQLite</strong> : aucun XAMPP requis,
          base SQLite en un fichier, serveur de dev intégré. Idéal pour comparer les écosystèmes et préparer BTS/DUT (Python).
        </p>
      </div>

      <div className="p-5 rounded-2xl" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
        <h3 className="font-bold mb-2">🎯 Objectifs (fin du projet) :</h3>
        <ul className="text-sm space-y-1" style={{ color: "var(--text-secondary)" }}>
          <li>• Installer Python + venv + Flask, lancer <code>http://127.0.0.1:5000</code></li>
          <li>• Routes + templates Jinja2 + fichiers statiques (le trio Flask)</li>
          <li>• CRUD SQLite + recherche + pagination + login hashé + export CSV</li>
          <li>• Comparer PHP vs Flask et choisir selon le contexte (stage, poursuite d'études)</li>
        </ul>
      </div>

      <InfoBox type="warning" title="⚠️ Où tester ? (Local uniquement, comme PHP)">
        <p>GitHub Pages ne fait pas tourner Python. Tout se passe sur ton PC : dossier <code>gestion-etudiants-flask/</code>, commande <code>flask run</code>, navigateur sur <code>http://127.0.0.1:5000</code>.</p>
      </InfoBox>

      {/* Étape 1 */}
      <section id="py-etape1">
        <div className="flex items-start gap-4 mb-4">
          <div className="step-number">1</div>
          <div>
            <h2 className="text-2xl font-bold">Installer Python + vérifier</h2>
            <p style={{ color: "var(--text-secondary)" }}>Python 3.10+ (cocher « Add to PATH » sur Windows)</p>
          </div>
        </div>
        <CodeBlock
          language="bash"
          filename="Terminal — vérification"
          code={`python --version
# Python 3.11.x attendu. Sinon : https://www.python.org/downloads/
# Windows : cocher "Add python.exe to PATH" pendant l'installation.

pip --version
# pip 23+ attendu (installe les paquets).`}
        />
        <InfoBox type="info">
          <p>Déjà fait en S6 pour XAMPP ? Ici pas de panneau à démarrer : le serveur Flask se lance par commande et s'arrête avec <code>Ctrl+C</code>.</p>
        </InfoBox>
      </section>

      {/* Étape 2 */}
      <section id="py-etape2">
        <div className="flex items-start gap-4 mb-4">
          <div className="step-number">2</div>
          <div>
            <h2 className="text-2xl font-bold">Environnement virtuel + Flask</h2>
            <p style={{ color: "var(--text-secondary)" }}>Un venv = bac à sable. Jamais d'install globale.</p>
          </div>
        </div>
        <CodeBlock
          language="bash"
          filename="Terminal — dans gestion-etudiants-flask/"
          code={`mkdir gestion-etudiants-flask
cd gestion-etudiants-flask

python -m venv venv
# Activer :
# Windows : venv\\Scripts\\activate
# Mac/Linux : source venv/bin/activate
# (venv) apparaît devant le prompt = OK

pip install flask
pip freeze > requirements.txt
cat requirements.txt`}
        />
        <div className="schema-box text-left mt-4">
          <h4 className="font-bold mb-3 text-center">📁 Structure du projet Flask</h4>
          <div className="font-mono text-sm space-y-1 max-w-md mx-auto">
            <p>📂 gestion-etudiants-flask/</p>
            <p className="ml-6">📄 app.py <span className="text-xs" style={{ color: "var(--text-secondary)" }}>← routes + logique</span></p>
            <p className="ml-6">📄 requirements.txt <span className="text-xs" style={{ color: "var(--text-secondary)" }}>← flask==...</span></p>
            <p className="ml-6">📄 etudiants.db <span className="text-xs" style={{ color: "var(--text-secondary)" }}>← créée auto (SQLite)</span></p>
            <p className="ml-6">📂 templates/ <span className="text-xs" style={{ color: "var(--text-secondary)" }}>← base.html, index.html, form.html, login.html</span></p>
            <p className="ml-6">📂 static/ <span className="text-xs" style={{ color: "var(--text-secondary)" }}>← style.css, script.js</span></p>
          </div>
        </div>
      </section>

      {/* Étape 3 */}
      <section id="py-etape3">
        <div className="flex items-start gap-4 mb-4">
          <div className="step-number">3</div>
          <div>
            <h2 className="text-2xl font-bold">Première route — « Ça fonctionne ! »</h2>
            <p style={{ color: "var(--text-secondary)" }}>Le trio Flask : route → fonction → template/texte</p>
          </div>
        </div>
        <CodeBlock
          language="python"
          filename="app.py — v1 minimale"
          code={`from flask import Flask

app = Flask(__name__)

@app.route("/")
def accueil():
    return "<h1>Ca fonctionne ! 🎉</h1><p>Flask tourne sur http://127.0.0.1:5000</p>"

if __name__ == "__main__":
    app.run(debug=True)  # debug=True : rechargement auto + erreurs détaillées (DEV UNIQUEMENT)`}
        />
        <CodeBlock
          language="bash"
          filename="Terminal — lancer"
          code={`# venv activé :
python app.py
# Ouvre http://127.0.0.1:5000 → "Ca fonctionne !"
# Arrêter : Ctrl+C`}
        />
        <InfoBox type="tip" title="💡 PHP vs Flask (à retenir)">
          <p>PHP : 1 fichier = 1 page (<code>ajouter.php</code>). Flask : 1 fonction + 1 route (<code>@app.route("/ajouter")</code>), templates séparés. Même logique CRUD, organisation différente.</p>
        </InfoBox>
      </section>

      {/* Étape 4 */}
      <section id="py-etape4">
        <div className="flex items-start gap-4 mb-4">
          <div className="step-number">4</div>
          <div>
            <h2 className="text-2xl font-bold">Base SQLite — connexion + table</h2>
            <p style={{ color: "var(--text-secondary)" }}>SQLite = MySQL en un fichier, zéro installation (stdlib Python)</p>
          </div>
        </div>
        <CodeBlock
          language="python"
          filename="app.py — base (à placer en haut, après app = ...)"
          code={`import sqlite3
from flask import g

DB = "etudiants.db"

def get_db():
    if "db" not in g:
        g.db = sqlite3.connect(DB)
        g.db.row_factory = sqlite3.Row  # accès par nom : e["nom"]
    return g.db

@app.teardown_appcontext
def close_db(exc=None):
    db = g.pop("db", None)
    if db is not None:
        db.close()

def init_db():
    db = get_db()
    db.executescript("""
    CREATE TABLE IF NOT EXISTS etudiants (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nom TEXT NOT NULL,
        prenom TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        filiere TEXT NOT NULL,
        date_inscription TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        login TEXT NOT NULL UNIQUE,
        mot_de_passe TEXT NOT NULL
    );
    """)
    db.commit()

# Lancer une fois : python -c "import app; app.init_db() puis via shell"
with app.app_context():
    init_db()`}
        />
        <InfoBox type="warning">
          <p>Retire le bloc <code>with app.app_context(): init_db()</code> après le 1er lancement (ou garde-le : IF NOT EXISTS = sans danger). Vérifie avec <code>ls etudiants.db</code> puis un viewer SQLite.</p>
        </InfoBox>
      </section>

      {/* Étape 5 */}
      <section id="py-etape5">
        <div className="flex items-start gap-4 mb-4">
          <div className="step-number">5</div>
          <div>
            <h2 className="text-2xl font-bold">Templates Jinja2 — base + liste</h2>
            <p style={{ color: "var(--text-secondary)" }}>Jinja2 = le « PHP dans HTML » de Flask : boucles et variables entre accolades</p>
          </div>
        </div>
        <CodeBlock
          language="html"
          filename="templates/base.html — squelette commun"
          code={`<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{% block titre %}Gestion Étudiants{% endblock %}</title>
  <link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}">
</head>
<body>
<div class="container">
  <header>
    <h1>🎓 Gestion des Étudiants <small>(Flask)</small></h1>
    <nav>
      <a href="{{ url_for('index') }}">📋 Liste</a>
      <a href="{{ url_for('ajouter') }}">➕ Ajouter</a>
      <a href="{{ url_for('stats') }}">📊 Stats</a>
      <a href="{{ url_for('logout') }}">🚪 Déconnexion ({{ session.get('user', '') }})</a>
    </nav>
  </header>
  {% with msgs = get_flashed_messages() %}
    {% if msgs %}{% for m in msgs %}<div class="alert success">{{ m }}</div>{% endfor %}{% endif %}
  {% endwith %}
  {% block contenu %}{% endblock %}
</div>
</body>
</html>`}
        />
        <CodeBlock
          language="html"
          filename="templates/index.html — liste + recherche + pagination"
          code={`{% extends "base.html" %}
{% block titre %}Liste{% endblock %}
{% block contenu %}
<form method="GET" action="{{ url_for('index') }}" class="actions">
  <input type="search" name="q" value="{{ q }}" placeholder="🔍 Rechercher...">
  <button type="submit" class="btn btn-primary">Chercher</button>
</form>
<table>
  <thead><tr><th>ID</th><th>Nom</th><th>Prénom</th><th>Email</th><th>Filière</th><th>Actions</th></tr></thead>
  <tbody>
  {% for e in etudiants %}
    <tr>
      <td>{{ e["id"] }}</td><td>{{ e["nom"] }}</td><td>{{ e["prenom"] }}</td>
      <td>{{ e["email"] }}</td><td><span class="badge">{{ e["filiere"] }}</span></td>
      <td>
        <a href="{{ url_for('modifier', id=e['id']) }}" class="btn btn-edit">✏️</a>
        <a href="{{ url_for('supprimer', id=e['id']) }}"
           onclick="return confirm('Supprimer cet étudiant ?')" class="btn btn-delete">🗑️</a>
      </td>
    </tr>
  {% else %}
    <tr><td colspan="6" class="empty">Aucun étudiant.</td></tr>
  {% endfor %}
  </tbody>
</table>
<div class="actions">
  {% for p in range(1, pages + 1) %}
    <a href="{{ url_for('index', q=q, page=p) }}" class="btn {{ 'btn-primary' if p == page else 'btn-back' }}">{{ p }}</a>
  {% endfor %}
  <span class="count">Total : {{ total }}</span>
</div>
{% endblock %}`}
        />
        <InfoBox type="tip" title="💡 Jinja2 auto-protège du XSS">
          <p><code>{"{{ e[\"nom\"] }}"}</code> échappe le HTML par défaut (= <code>htmlspecialchars</code> auto). N'utilise <code>|safe</code> que si tu es sûr de la source.</p>
        </InfoBox>
      </section>

      {/* Étape 6 */}
      <section id="py-etape6">
        <div className="flex items-start gap-4 mb-4">
          <div className="step-number">6</div>
          <div>
            <h2 className="text-2xl font-bold">Routes CRUD complètes — le cœur (app.py final)</h2>
            <p style={{ color: "var(--text-secondary)" }}>Recopie ce fichier complet : liste + ajout + modif + suppression + recherche + pagination</p>
          </div>
        </div>
        <CodeBlock
          language="python"
          filename="app.py — CRUD (remplace la v1, garde base étape 4)"
          code={`from flask import Flask, g, render_template, request, redirect, url_for, flash
import sqlite3

app = Flask(__name__)
app.secret_key = "change-moi-en-prod-123"  # sessions + flash
DB = "etudiants.db"
PAR_PAGE = 5

def get_db():
    if "db" not in g:
        g.db = sqlite3.connect(DB)
        g.db.row_factory = sqlite3.Row
    return g.db

@app.teardown_appcontext
def close_db(exc=None):
    db = g.pop("db", None)
    if db is not None:
        db.close()

@app.route("/")
def index():
    q = request.args.get("q", "").strip()
    page = max(1, int(request.args.get("page", 1)))
    offset = (page - 1) * PAR_PAGE
    db = get_db()
    if q:
        like = "%" + q + "%"
        total = db.execute(
            "SELECT COUNT(*) FROM etudiants WHERE nom LIKE ? OR prenom LIKE ? OR email LIKE ?",
            (like, like, like)).fetchone()[0]
        etudiants = db.execute(
            "SELECT * FROM etudiants WHERE nom LIKE ? OR prenom LIKE ? OR email LIKE ? "
            "ORDER BY date_inscription DESC LIMIT ? OFFSET ?",
            (like, like, like, PAR_PAGE, offset)).fetchall()
    else:
        total = db.execute("SELECT COUNT(*) FROM etudiants").fetchone()[0]
        etudiants = db.execute(
            "SELECT * FROM etudiants ORDER BY date_inscription DESC LIMIT ? OFFSET ?",
            (PAR_PAGE, offset)).fetchall()
    pages = max(1, -(-total // PAR_PAGE))  # plafond sans math
    return render_template("index.html", etudiants=etudiants, q=q, page=page, pages=pages, total=total)

def lire_form():
    return (request.form.get("nom", "").strip(),
            request.form.get("prenom", "").strip(),
            request.form.get("email", "").strip(),
            request.form.get("filiere", "").strip())

@app.route("/ajouter", methods=["GET", "POST"])
def ajouter():
    erreur = ""
    if request.method == "POST":
        nom, prenom, email, filiere = lire_form()
        if not (nom and prenom and email and filiere):
            erreur = "Tous les champs sont obligatoires !"
        elif "@" not in email:
            erreur = "Email invalide !"
        else:
            try:
                db = get_db()
                db.execute("INSERT INTO etudiants (nom, prenom, email, filiere) VALUES (?, ?, ?, ?)",
                           (nom, prenom, email, filiere))
                db.commit()
                flash("✅ Étudiant ajouté !")
                return redirect(url_for("index"))
            except sqlite3.IntegrityError:
                erreur = "Cet email existe déjà !"
    return render_template("form.html", titre="Ajouter", action="ajouter", e={}, erreur=erreur)

@app.route("/modifier/<int:id>", methods=["GET", "POST"])
def modifier(id):
    db = get_db()
    e = db.execute("SELECT * FROM etudiants WHERE id = ?", (id,)).fetchone()
    if e is None:
        return redirect(url_for("index"))
    erreur = ""
    if request.method == "POST":
        nom, prenom, email, filiere = lire_form()
        if not (nom and prenom and email and filiere):
            erreur = "Tous les champs sont obligatoires !"
        else:
            try:
                db.execute("UPDATE etudiants SET nom=?, prenom=?, email=?, filiere=? WHERE id=?",
                           (nom, prenom, email, filiere, id))
                db.commit()
                flash("✅ Étudiant modifié !")
                return redirect(url_for("index"))
            except sqlite3.IntegrityError:
                erreur = "Cet email existe déjà !"
                e = dict(e); e.update(nom=nom, prenom=prenom, email=email, filiere=filiere)
    return render_template("form.html", titre="Modifier", action="modifier", e=e, erreur=erreur, id=id)

@app.route("/supprimer/<int:id>")
def supprimer(id):
    db = get_db()
    db.execute("DELETE FROM etudiants WHERE id = ?", (id,))
    db.commit()
    flash("✅ Étudiant supprimé !")
    return redirect(url_for("index"))

if __name__ == "__main__":
    app.run(debug=True)`}
        />
        <CodeBlock
          language="html"
          filename="templates/form.html — ajout + modification"
          code={`{% extends "base.html" %}
{% block titre %}{{ titre }}{% endblock %}
{% block contenu %}
<h2>{{ "➕" if action == "ajouter" else "✏️" }} {{ titre }}</h2>
{% if erreur %}<div class="alert error">{{ erreur }}</div>{% endif %}
<form method="POST" action="" class="form-card">
  <div class="form-group"><label>Nom :</label>
    <input type="text" name="nom" value="{{ e['nom'] if e and e['nom'] else '' }}" required></div>
  <div class="form-group"><label>Prénom :</label>
    <input type="text" name="prenom" value="{{ e['prenom'] if e and e['prenom'] else '' }}" required></div>
  <div class="form-group"><label>Email :</label>
    <input type="email" name="email" value="{{ e['email'] if e and e['email'] else '' }}" required></div>
  <div class="form-group"><label>Filière :</label>
    <select name="filiere" required>
      <option value="">-- Choisir --</option>
      {% for f in ["Informatique", "Réseaux", "Gestion", "Marketing"] %}
        <option value="{{ f }}" {{ "selected" if e and e['filiere'] == f else "" }}>{{ f }}</option>
      {% endfor %}
    </select></div>
  <button class="btn btn-primary btn-full" type="submit">💾 Enregistrer</button>
</form>
{% endblock %}`}
        />
        <InfoBox type="warning" title="⚠️ ? paramétrés = requêtes préparées">
          <p>Les <code>?</code> de sqlite3 jouent le rôle des <code>:nom</code> PDO : données séparées de la requête → injection SQL bloquée. Ne concatène jamais <code>{"f\"SELECT ... {q}\""}</code>.</p>
        </InfoBox>
      </section>

      {/* Étape 7 */}
      <section id="py-etape7">
        <div className="flex items-start gap-4 mb-4">
          <div className="step-number">7</div>
          <div>
            <h2 className="text-2xl font-bold">Login hashé + pages protégées + stats + CSV</h2>
            <p style={{ color: "var(--text-secondary)" }}>Le niveau pro, comme en PHP : sessions + hash + dashboard</p>
          </div>
        </div>
        <CodeBlock
          language="python"
          filename="app.py — ajouter AVANT if __name__ (import werkzeug)"
          code={`from functools import wraps
from flask import session
from werkzeug.security import generate_password_hash, check_password_hash

# Créer l'admin une fois : python -c "from app import get_db... " ou route temporaire :
# python -c "from werkzeug.security import generate_password_hash; print(generate_password_hash('admin123'))"
# puis : INSERT INTO users (login, mot_de_passe) VALUES ('admin', '<hash>');

def login_requis(f):
    @wraps(f)
    def decoree(*a, **kw):
        if "user" not in session:
            return redirect(url_for("login"))
        return f(*a, **kw)
    return decoree

@app.route("/login", methods=["GET", "POST"])
def login():
    erreur = ""
    if request.method == "POST":
        db = get_db()
        u = db.execute("SELECT * FROM users WHERE login = ?",
                       (request.form.get("login", "").strip(),)).fetchone()
        if u and check_password_hash(u["mot_de_passe"], request.form.get("mot_de_passe", "")):
            session["user"] = u["login"]
            flash("👋 Bienvenue " + u["login"] + " !")
            return redirect(url_for("index"))
        erreur = "❌ Login ou mot de passe incorrect."
    return render_template("login.html", erreur=erreur)

@app.route("/logout")
def logout():
    session.clear()
    return redirect(url_for("login"))

@app.route("/stats")
@login_requis
def stats():
    db = get_db()
    total = db.execute("SELECT COUNT(*) FROM etudiants").fetchone()[0]
    par_filiere = db.execute(
        "SELECT filiere, COUNT(*) AS n FROM etudiants GROUP BY filiere ORDER BY n DESC").fetchall()
    return render_template("stats.html", total=total, par_filiere=par_filiere)

@app.route("/export")
@login_requis
def export():
    import csv, io
    from flask import Response
    db = get_db()
    lignes = db.execute("SELECT * FROM etudiants ORDER BY id").fetchall()
    buf = io.StringIO()
    w = csv.writer(buf, delimiter=";")
    w.writerow(["ID", "Nom", "Prenom", "Email", "Filiere", "Date"])
    for e in lignes:
        w.writerow([e["id"], e["nom"], e["prenom"], e["email"], e["filiere"], e["date_inscription"]])
    return Response(buf.getvalue(), mimetype="text/csv",
                    headers={"Content-Disposition": "attachment; filename=etudiants.csv"})

# Protéger le CRUD : ajoute @login_requis au-dessus de def index/ajouter/modifier/supprimer.
# Ex. : @app.route("/") puis @login_requis puis def index(): ...`}
        />
        <CodeBlock
          language="html"
          filename="templates/login.html + stats.html (extraits)"
          code={`<!-- login.html -->
{% extends "base.html" %}{% block titre %}Connexion{% endblock %}{% block contenu %}
<h2>🔐 Connexion</h2>
{% if erreur %}<div class="alert error">{{ erreur }}</div>{% endif %}
<form method="POST" class="form-card">
  <div class="form-group"><label>Login :</label><input type="text" name="login" required autofocus></div>
  <div class="form-group"><label>Mot de passe :</label><input type="password" name="mot_de_passe" required></div>
  <button class="btn btn-primary btn-full" type="submit">Se connecter</button>
</form>
{% endblock %}

<!-- stats.html -->
{% extends "base.html" %}{% block titre %}Stats{% endblock %}{% block contenu %}
<h2>📊 Statistiques</h2>
<p style="font-size:2rem;font-weight:800">{{ total }} étudiants</p>
{% for f in par_filiere %}<p><span class="badge">{{ f["filiere"] }}</span> : {{ f["n"] }}</p>{% endfor %}
<a href="{{ url_for('export') }}" class="btn btn-primary">📤 Export CSV</a>
{% endblock %}`}
        />
      </section>

      {/* Étape 8 */}
      <section id="py-etape8">
        <div className="flex items-start gap-4 mb-4">
          <div className="step-number">8</div>
          <div>
            <h2 className="text-2xl font-bold">Static (CSS/JS), tests, mise en ligne, grille</h2>
            <p style={{ color: "var(--text-secondary)" }}>Réutilise style.css/script.js du projet PHP dans static/ — puis teste et déploie</p>
          </div>
        </div>
        <CodeBlock
          language="bash"
          filename="Terminal — static + tests + prod"
          code={`# 1. Copie style.css et script.js du projet PHP vers static/
cp ../gestion-etudiants/style.css static/style.css
cp ../gestion-etudiants/script.js static/script.js

# 2. Tests (mêmes 6 que PHP) :
# - sans login -> / redirige /login ; ajout + doublon ; XSS en texte
# - recherche + page 2 ; modif + suppression ; stats + CSV ; mobile

# 3. requirements.txt final :
pip freeze > requirements.txt   # flask==3.x + werkzeug

# 4. Mise en ligne (Pythonanywhere / Render) :
# - debug=False en prod ! (app.run(debug=False))
# - secret_key longue et secrète (variable d'environnement)
# - etudiants.db sauvegardé hors serveur`}
        />
        <div className="p-5 rounded-2xl mt-4" style={{ background: "linear-gradient(135deg, #3b82f620, #8b5cf620)", border: "1px solid var(--accent)" }}>
          <h3 className="font-bold mb-2">🎓 Grille Projet Python /20 (soutenance 10 min) :</h3>
          <ul className="text-sm space-y-1" style={{ color: "var(--text-secondary)" }}>
            <li>• CRUD + templates Jinja2 + static : <strong>6 pts</strong> • Recherche/pagination : <strong>3 pts</strong></li>
            <li>• Login/sessions/hash + pages protégées : <strong>5 pts</strong> • Sécurité (? paramétrés, XSS auto, debug=False) : <strong>3 pts</strong> • Stats/CSV + présentation : <strong>3 pts</strong></li>
            <li>• Bonus : comparer PHP vs Flask (1 page), déployer en ligne, tests écrits</li>
          </ul>
        </div>
        <InfoBox type="tip" title="🔁 PHP vs Flask — que répondre en soutenance ?">
          <p><strong>PHP</strong> : partout chez les hébergeurs mutualisés, 1 fichier = 1 page, écosystème WordPress/Laravel. <strong>Flask</strong> : Python (IA/data), SQLite zéro-conf, routes/fonctions, Jinja2. Même triade CIA, mêmes attaques, mêmes parades — seul l'idiome change (<code>?</code> vs <code>:nom</code>, <code>session</code> vs <code>$_SESSION</code>).</p>
        </InfoBox>
      </section>

      <div className="p-8 rounded-2xl text-center" style={{ background: "linear-gradient(135deg, #22c55e20, #3b82f620)", border: "2px solid var(--success)" }}>
        <span className="text-6xl">🐍</span>
        <h2 className="text-2xl font-bold mt-4 mb-2">Double stack validée !</h2>
        <p className="text-lg mb-4" style={{ color: "var(--text-secondary)" }}>
          Même CRUD en PHP/MySQL <strong>et</strong> Python/Flask/SQLite : tu es prêt pour stage, BTS et freelancing.
        </p>
        <div className="inline-block p-4 rounded-xl" style={{ background: "var(--bg-primary)" }}>
          <p className="font-mono text-sm" style={{ color: "var(--accent)" }}>🌐 http://127.0.0.1:5000</p>
        </div>
      </div>

      <QuizComponent quizzes={quizzes.python} title="Projet Python Flask" />
    </div>
  );
}
