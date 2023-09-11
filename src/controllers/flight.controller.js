import httpStatus from "http-status";
import flightService from "../services/flightServices.js";
import { incompleteDataError } from "../errors/incompleteData.js";
import { convertDate } from "../utils/convertData.js";
import { flightSchemaDate } from "../schemas/flightSchema.js";

async function postFlight(req, res){
    const {origin, date, destination} = req.body;

    await flightService.postFlight(origin, destination,date);

    res.sendStatus(httpStatus.CREATED);

}

async function getFlightByCitie(req, res){
    const {origin, destination} = req.query;
    const smallerDate = req.query['smaller-date'];
    const biggerDate = req.query['bigger-date'];
    
    console.log(smallerDate, 'small')
    console.log(biggerDate, 'bigger')

    if (smallerDate && biggerDate) {
        
        const small = convertDate(smallerDate);
        const bigger = convertDate(biggerDate);

        const body = {
            smallerDate: smallerDate,
            biggerDate: biggerDate
        }

        const validation = flightSchemaDate.validate(body, {abortEarly: false});
        if (validation.error){
            const errors = validation.error.details.map(detail => detail.message)
            throw incompleteDataError();
        }

       

        if(small> bigger) return res.sendStatus(httpStatus.BAD_REQUEST)
    }

    if(biggerDate && !smallerDate || !biggerDate && smallerDate) throw incompleteDataError();

    const result = await flightService.getFlightByCitie(origin, destination, smallerDate, biggerDate);

    return res.send(result);
}

const flightController = {
    postFlight,
    getFlightByCitie
}

export default flightController;