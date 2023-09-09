import { notFoundError } from "../errors/notFound.js";
import flightRepository from "../repositories/flightRepository.js";

async function postFlight(origin, destination, date){
    const result = await flightRepository.getFlight(origin, destination)

    if(result === false) throw notFoundError("Frase");

    return flightRepository.postFlight(origin, destination, date);


}

const flightService = {
    postFlight
}

export default flightService;