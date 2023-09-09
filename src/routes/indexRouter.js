import { Router } from "express";
import flightsRouter from "./flightRouter.js";
import travelsRouter from "./travelRouter.js";
import citiesRouter from "./citieRouter.js";
import passengersRouter from "./passengerRouter.js";

const router = Router();

router.use(flightsRouter);
router.use(travelsRouter);
router.use(citiesRouter);
router.use(passengersRouter);


export default router;