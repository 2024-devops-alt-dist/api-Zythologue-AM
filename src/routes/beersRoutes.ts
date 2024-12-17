import express from "express";
import { createBeers, getAllBeers, updateBeer } from "../controllers/beersControllers"
import { deleteBeer } from "../controllers/beersControllers";
import { getDetailBeers } from "../controllers/beersControllers";
import app from "../app";

const router = express.Router();

// Définir les routes
/**
 * @swagger
 * /beers:
 *   get:
 *     summary: Récupère toutes les bières
 *     tags: [Beers]
 *     responses:
 *       200:
 *         description: Liste de toutes les bières
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID unique de la bière
 *                   name:
 *                     type: string
 *                     description: Nom de la bière
 *                   description:
 *                     type: string
 *                     description: Description de la bière
 *                   price:
 *                     type: number
 *                     description: Prix de la bière
 */
router.get("/beers", getAllBeers); // GET toutes les bières

/**
 * @swagger
 * /beers:
 *   post:
 *     summary: Crée une nouvelle bière
 *     tags: [Beers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nom de la bière
 *                 example: IPA
 *               description:
 *                 type: string
 *                 description: Description de la bière
 *                 example: Une bière amère
 *               price:
 *                 type: number
 *                 description: Prix de la bière
 *                 example: 5.99
 *               abv:
 *                 type: number
 *                 description: Taux d'alcool
 *                 example: 5.5
 *               id_brewery:
 *                 type: integer
 *                 description: ID de la brasserie
 *                 example: 1
 *     responses:
 *       201:
 *         description: Bière créée avec succès
 */
router.post("/beers", createBeers); // POST pour créer une bière


/**
 * @swagger
 * /beers/{id}:
 *   delete:
 *     summary: Supprime une bière par son ID
 *     tags: [Beers]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la bière à supprimer
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Bière supprimée avec succès
 *       404:
 *         description: Aucune bière trouvée avec cet ID
 */
router.delete("/beers/:id", deleteBeer);

/**
 * @swagger
 * /beers/{id}:
 *   get:
 *     summary: Récupère les détails d'une bière par son ID
 *     tags: [Beers]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la bière
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Détails de la bière
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID unique de la bière
 *                 name:
 *                   type: string
 *                   description: Nom de la bière
 *                 description:
 *                   type: string
 *                   description: Description de la bière
 *                 price:
 *                   type: number
 *                   description: Prix de la bière
 *       404:
 *         description: Aucune bière trouvée avec cet ID
 */
router.get("/beers/:id", getDetailBeers);

/**
 * @swagger
 * /beers/{id}:
 *   put:
 *     summary: Met à jour une bière par son ID
 *     tags: [Beers]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la bière à mettre à jour
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nom de la bière
 *               description:
 *                 type: string
 *                 description: Description de la bière
 *               price:
 *                 type: number
 *                 description: Prix de la bière
 *               abv:
 *                 type: number
 *                 description: Taux d'alcool de la bière
 *               id_brewery:
 *                 type: integer
 *                 description: ID de la brasserie
 *     responses:
 *       200:
 *         description: Bière mise à jour avec succès
 *       400:
 *         description: Données invalides
 *       404:
 *         description: Aucune bière trouvée avec cet ID
 */
router.put("/beers/:id", updateBeer);

export default router;


