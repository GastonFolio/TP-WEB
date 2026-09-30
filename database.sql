-- =====================================================
-- Gestion des étudiants — base MySQL (TP S11 + Projet S12)
-- Import : http://localhost/phpmyadmin → onglet Importer → ce fichier
-- ou : mysql -u root < database.sql
-- =====================================================

CREATE DATABASE IF NOT EXISTS gestion_etudiants
CHARACTER SET utf8 COLLATE utf8_general_ci;

USE gestion_etudiants;

CREATE TABLE IF NOT EXISTS etudiants (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    filiere VARCHAR(50) NOT NULL,
    date_inscription DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

INSERT INTO etudiants (nom, prenom, email, filiere) VALUES
('Dupont', 'Marie', 'marie.dupont@email.com', 'Informatique'),
('Martin', 'Pierre', 'pierre.martin@email.com', 'Réseaux'),
('Bernard', 'Sophie', 'sophie.bernard@email.com', 'Informatique'),
('Petit', 'Lucas', 'lucas.petit@email.com', 'Gestion'),
('Robert', 'Emma', 'emma.robert@email.com', 'Réseaux');
