import { notFoundError } from "../errors/notFound.js";
import travelRepository from "../repositories/travelRepository.js";

async function postTravel(passengerId, flightId){
    const result = await travelRepository.getId(passengerId, flightId);

    if(result === false) throw notFoundError("Frase");

    return travelRepository.postTravel(passengerId, flightId);

}

const travelService = {
    postTravel
}

export default travelService;