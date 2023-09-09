import httpStatus from "http-status";
import flightService from "../services/flightServices.js";

async function postFlight(req, res){
    const {origin, date, destination} = req.body;

    await flightService.postFlight(origin, destination,date);

    res.sendStatus(httpStatus.CREATED);

}

const flightController = {
    postFlight
}

export default flightController;