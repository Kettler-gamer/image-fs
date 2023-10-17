import "dotenv/config";
import express from "express";
import router from "./src/routes/routes.js";

const app = express();

app.use(express.json({ limit: "20mb" }));

app.use(express.static("public"));

app.use(router);

app.listen(3000, () => console.log("Server listening on port 3000"));
