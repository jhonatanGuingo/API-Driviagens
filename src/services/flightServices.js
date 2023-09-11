
import { incompleteDataError } from "../errors/incompleteData.js";
import { notFoundError } from "../errors/notFound.js";
import flightRepository from "../repositories/flightRepository.js";

async function postFlight(origin, destination, date){
    const result = await flightRepository.getFlight(origin, destination)

    if(result === false) throw notFoundError();

    return flightRepository.postFlight(origin, destination, date);


}

async function getFlightByCitie(origin, destination, biggerDate, smallerDate){

    if(biggerDate && !smallerDate || !biggerDate && smallerDate) throw incompleteDataError

    const result = await flightRepository.getFlightByCitie(origin, destination, biggerDate, smallerDate);
    
    return result;
}
const flightService = {
    postFlight,
    getFlightByCitie
}

export default flightService;