# API REST pour la gestion des bières artisanales

## Contexte du Projet

Ce projet a pour objectif de développer une API REST permettant de manipuler les informations sur les bières artisanales et leurs brasseries. Cette API servira de pilier central pour une future application mobile, offrant aux utilisateurs une expérience enrichie dans la découverte et le partage de bières artisanales du monde entier.

L'API permettra d'effectuer des opérations de base (CRUD) sur les tables essentielles « Bières » et « Brasseries », en utilisant des pratiques modernes de développement, tout en assurant une documentation claire et interactive pour faciliter son intégration.

## Fonctionnalités

### Gestion des bières (CRUD) :

- **Création** : Ajouter une nouvelle bière à la base de données.
- **Lecture** : Consulter la liste complète des bières ou les détails d'une bière spécifique.
- **Mise à jour** : Modifier les informations associées à une bière existante.
- **Suppression** : Retirer une bière de la base de données.

## Prérequis

Voici les composants que nous allons utiliser pour faire fonctionner l'application :

- **Node.js** : Un environnement d'exécution JavaScript côté serveur, nécessaire pour exécuter l'application.
- **Express.js** : Un framework web pour Node.js qui facilite la gestion des requêtes HTTP et la création d'API.
- **TypeScript** : Un langage de programmation qui étend JavaScript avec des types statiques, utilisé pour assurer une meilleure fiabilité et maintenabilité du code.
- **PostgreSQL** : Système de gestion de bases de données relationnelles, utilisé pour héberger les données du projet.
- **Swagger (OpenAPI)** : Un framework permettant de définir, documenter et tester facilement les API REST.
- **Docker** : Cet outil permet de créer des environnements isolés pour exécuter vos applications et services.
- **Docker Compose** : Un utilitaire qui facilite la définition et l'exécution d'applications composées de plusieurs conteneurs Docker.


## Installation et Configuration

### 1. Clonez le dépôt

Clonez ce projet sur votre machine locale :

```bash
git clone https://github.com/2024-devops-alt-dist/api-Zythologue-AM.git
```

### 2. Configurer l'environnement

Avant de démarrer l'application, vous devez créer un fichier `.env` à la racine de votre projet pour définir les identifiants de votre base de données PostgreSQL.

#### Créer le fichier `.env`
Dans le répertoire racine de votre projet, créez un fichier `.env`.

#### Définir les variables d'environnement
Ajoutez les lignes suivantes dans votre fichier `.env` :

```env
POSTGRES_USER=username
POSTGRES_HOST=postgres
POSTGRES_PASSWORD=password
POSTGRES_DB=your_database_name
POSTGRES_PORT=5432
```

#### Ajouter le `.env` dans le `.gitignore`
Pour éviter que vos identifiants soient sur GitHub, vous devez ajouter le fichier `.env` dans le `.gitignore` comme ceci :

```bash
echo .env >> .gitignore
```

### 3. Démarrer l'application avec Docker Compose

Une fois le fichier `.env` configuré et ajouté au `.gitignore`, démarrez les services définis dans votre projet avec Docker Compose.

```bash
docker-compose up --build
```

Pour vérifier que le conteneur soit bien actif, allez sur Docker Desktop ou tapez la commande suivante :

```bash
docker-compose ps
```

## Utilisation de l'API

### 🌐 Méthodes HTTP Principales

| Méthode | Endpoint                | Description                          |
|---------|-------------------------|--------------------------------------|
| GET     | /api/v1/beers           | Liste toutes les bières             |
| GET     | /api/v1/beers/:id       | Détails d'une bière                 |
| POST    | /api/v1/beers           | Ajoute une nouvelle bière           |
| PUT     | /api/v1/beers/:id       | Met à jour une bière existante      |
| DELETE  | /api/v1/beers/:id       | Supprime une bière                  |


## Documentation de l'API

Si vous souhaitez des informations sur les différentes méthodes utilisées par l'API, rendez-vous sur la documentation Swagger ci-dessous :

📍 [Swagger Documentation](http://localhost:3000/api-docs)