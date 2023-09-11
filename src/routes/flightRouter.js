import {Router} from "express"
import { validateSchema } from "../middlewares/validateSchema.js";
import { flightSchema, flightSchemaDate } from "../schemas/flightSchema.js";
import flightController from "../controllers/flight.controller.js";

const flightsRouter  = Router();

flightsRouter.post("/flights", validateSchema(flightSchema), flightController.postFlight);
flightsRouter.get("/flights", validateSchema(flightSchemaDate), flightController.getFlightByCitie);

export default flightsRouter;