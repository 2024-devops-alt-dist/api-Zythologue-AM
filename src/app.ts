import beerRoutes from "./routes/beersRoutes"; // Assurez-vous du chemin correct
import { deleteBeer } from "./controllers/beersControllers";
import express, { Application } from "express";
import { setupSwagger } from "./swagger";



const app: Application = express();
// import { router as beerRoutes } from "./routes/beersRoutes";

// Configurer Swagger
setupSwagger(app);

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Enregistrer les routes

app.delete("/api/beers/:id", deleteBeer);

const version = "v1";
const path =`/api/${version}`;

app.use(`${path}/beers`, beerRoutes); // Toutes les routes auront le préfixe "/api"
export default app;
