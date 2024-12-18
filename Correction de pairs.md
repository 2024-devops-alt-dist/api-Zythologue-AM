---
MOC: "[[Zythologue - API]]"
Source:
  - https://github.com/2024-devops-alt-dist/api-Zythologue-AM
tags:
  - API
  - Docker
  - Postman
---
---
## Critères de correction
1. git clone
2. Suivez les recommandations (.env à générer)
3. docker-compose up --build
4. CRUD avec postman (Bruno, hoppscotch) -> Get, POST, PATCH ou PUT, DELETE sur bières et brasseries
5. Une page Swagger pour la doc de l'API

# Correction

| Critères de correction                                                                            | Correction                                                                                                                                         |
| ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| git clone                                                                                         | OK RAS                                                                                                                                             |
| Suivez les recommandations (.env à générer)                                                       | Les variables de connexion à la BDD sont différentes du fichier .env                                                                               |
| docker-compose up --build                                                                         | OK le projet se lance correctement et les container sont bien lancés                                                                               |
| CRUD avec postman (Bruno, hoppscotch) -> Get, POST, PATCH ou PUT, DELETE sur bières et brasseries | Fonctionne après modification du app.use(`${path}`==/beers==, beerRoutes); . Il faut supprimer le /beers surligner car il est déjà dans beerRoutes |
| Une page Swagger pour la doc de l'API                                                             | La page affiché est joli et la table des beers est bien documenté                                                                                  |
