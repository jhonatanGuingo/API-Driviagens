import httpStatus from "http-status";
import passengerService from "../services/passengerServices.js";
import { manyResultsError } from "../errors/manyResults.js";

async function postPassenger(req, res){

    const {firstName, lastName} = req.body;

    await passengerService.postPassenger(firstName, lastName);
    res.sendStatus(httpStatus.CREATED);

}

async function getPassenger(req, res){
    const {name} = req.query;

    const passengers = await passengerService.getPassenger(name);

    if(passengers.rowCount > 10) throw manyResultsError();
    
    res.send(passengers.rows);


}

const passengerController = {
    postPassenger,
    getPassenger
}

export default passengerController;

