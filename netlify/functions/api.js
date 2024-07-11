
import express, { Router } from "express";
import serverless from "serverless-http";

const cors = require('cors');

const api = express();

api.use(cors({
    origin: "*",
}));

const router = Router();
router.get("/hello", (req, res) => res.send("Hello World!"));

router.post('/search', require('./../../controllers/searchController'));
router.post('/add', require('./../../controllers/addController'));
router.post('/update', require('./../../controllers/updateController'));


api.use("/api/", router);

export const handler = serverless(api);
