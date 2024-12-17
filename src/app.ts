import express from "express";
import beerRoutes from "./routes/beersRoutes"; // Assurez-vous du chemin correct
import { deleteBeer } from "./controllers/beersControllers";

const app = express();

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Enregistrer les routes
app.use("/api", beerRoutes); // Toutes les routes auront le préfixe "/api"

app.delete("/api/beers/:id", deleteBeer);



export default app;
