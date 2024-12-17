import dotenv from "dotenv";
dotenv.config();

import app from "./app"
import pool from "./config/db"

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

pool.connect()
    .then(() => {


    })
    .catch((err) => console.error("Erreur de connexion à PostgreSQL", err));
