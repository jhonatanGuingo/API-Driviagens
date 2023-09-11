import { Router } from "express";

import travelController from "../controllers/travel.controller.js";


const travelsRouter = Router();


travelsRouter.post("/travels", travelController.postTravel);


export default travelsRouter;
