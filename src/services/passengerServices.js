import { conflictError } from "../errors/conflict.js";
import { notFoundError } from "../errors/notFound.js";
import passengerRepository from "../repositories/passengerRepository.js";

async function postPassenger(firstName, lastName){

    return passengerRepository.postPassenger(firstName,lastName);
}

async function getPassenger(name){
    const result = await passengerRepository.getPassenger(name);

    if(!result) throw notFoundError("Frase");

    return result
}

const passengerService = {
    postPassenger,
    getPassenger
}

export default passengerService;