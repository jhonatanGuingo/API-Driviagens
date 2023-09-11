import httpStatus from "http-status";
import flightService from "../services/flightServices.js";

async function postFlight(req, res){
    const {origin, date, destination} = req.body;

    await flightService.postFlight(origin, destination,date);

    res.sendStatus(httpStatus.CREATED);

}

async function getFlightByCitie(req, res){
    const {origin, destination} = req.query;
    const smallerDate = req.query['smaller-date'];
    const biggerDate = req.query['bigger-date'];
    
    if (smallerDate && biggerDate) {
      
        if(smallerDate > biggerDate) return res.sendStatus(httpStatus.BAD_REQUEST)
    }

    const result = await flightService.getFlightByCitie(origin, destination, smallerDate, biggerDate);

    return res.send(result);
}

const flightController = {
    postFlight,
    getFlightByCitie
}

export default flightController;