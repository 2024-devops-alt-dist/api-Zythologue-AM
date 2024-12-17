import express from "express";
import { createBeers, getAllBeers } from "../controllers/beersControllers"
import { deleteBeer } from "../controllers/beersControllers";
import { getDetailBeers } from "../controllers/beersControllers";
import app from "../app";

const router = express.Router();

// Définir les routes
router.get("/beers", getAllBeers); // GET toutes les bières
router.post("/beers", createBeers); // POST pour créer une bière
router.delete("/beers/:id", deleteBeer);
router.get("/beers/:id", getDetailBeers);
export default router;
