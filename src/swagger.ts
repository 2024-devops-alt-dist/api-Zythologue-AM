import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Application } from "express";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "biere API",
            version: "1.0.0",
            description: "Description documentation api",
        },
        servers: [
            {
                url: "http://localhost:3000/api/v1",
            },
        ],
    },
    apis: ["./src/**/*.ts"], 
};

const swaggerSpec = swaggerJsdoc(options);

export const setupSwagger = (app: Application) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};