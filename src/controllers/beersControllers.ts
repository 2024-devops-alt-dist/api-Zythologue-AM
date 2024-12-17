import { Request, Response } from "express";
import  pool  from "../config/db";


export const getAllBeers = 
    async (req: Request, res: Response) => {

        try {
            // récupérer la co de la bdd
            const data = await pool.query ("SELECT * FROM beer");
            res.status(200).json(data.rows);
        } catch (error) {
            res.status(500).json({msg: error});
        }

};

export const createBeers = async (req: Request, res: Response): Promise<void> => {
    const { name, description, price, abv, id_brewery } = req.body;

    // Validation des champs obligatoires
    if (!name || !description || price == null) {
        res.status(400).send("Les champs 'name', 'description' et 'price' doivent être remplis");
        return;
    }

    if (typeof price !== "number" || price <= 0) {
        res.status(400).send("Le champ 'price' doit être un nombre positif");
        return;
    }

    const query = `
        INSERT INTO beer (name, description, abv, price, id_brewery)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
    `;

    try {
        const result = await pool.query(query, [name, description, abv, price, id_brewery]);
        res.status(201).json({ message: "Bière créée avec succès", beer: result.rows[0] });
    } catch (error) {
        console.error("Erreur lors de l'insertion :", error);

    }
};

export const deleteBeer = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    // Vérification que l'ID est fourni et valide
    if (!id) {
        res.status(400).json({ message: "L'ID de la bière est requis" });
        return;
    }

    const query = "DELETE FROM beer WHERE id = $1 RETURNING *;";

    try {
        const result = await pool.query(query, [id]);

        if (result.rowCount === 0) {
            res.status(404).json({ message: "Aucune bière trouvée avec cet ID" });
            return;
        }

        res.status(200).json({ message: "Bière supprimée avec succès", beer: result.rows[0] });
    } catch (error) {
        console.error("Erreur lors de la suppression :", error);
        res.status(500).json({ message: "Une erreur est survenue lors de la suppression de la bière" });
    }
};

    export const getDetailBeers = 
        async (req: Request, res: Response) => {
            const id  = parseInt(req.params.id);
            try {
                // récupérer la co de la bdd
                const data = await pool.query ("SELECT * FROM beer WHERE id = $1",[id]);
                res.status(200).json(data.rows);
            } catch (error) {
                res.status(404).json({msg: error});
            }
        };

//     put: async (req: Request, res: Response) => {
//         try {

//         res.status(201).json({data: "Ajout de la bière !!!!"});
//     } catch (error) {
//         res.status(200).json({msg: error});
//     }
//     },

//     delete: async (req: Request, res: Response) => {
//         try {

//         res.status(201).json({data: "Suppression de la bière !!!!"});
//     } catch (error) {
//         res.status(200).json({msg: error});
//     }
//     },


// };