import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { addPassengerSchema } from "../schemas/passengerSchema.js";
import passengerController from "../controllers/passenger.controller.js";


const passengersRouter = Router();

passengersRouter.post("/passengers", validateSchema(addPassengerSchema), passengerController.postPassenger);
//passengersRouter.get("/passengers/travels", passengerController.getPassenger);

export default passengersRouter;
