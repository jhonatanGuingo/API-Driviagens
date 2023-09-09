import {Router} from "express"
import { validateSchema } from "../middlewares/validateSchema.js";
import { citieSchema } from "../schemas/citieSchema.js";
import citieController from "../controllers/citie.controller.js";

const citiesRouter = Router();

citiesRouter.post("/cities", validateSchema(citieSchema), citieController.postCitie);

export default citiesRouter;
