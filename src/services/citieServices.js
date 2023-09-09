import { conflictError } from "../errors/conflict.js";
import citieRepository from "../repositories/citieRepository.js";

async function postCitie(name){
    const result = await citieRepository.getCitie(name)

    if (result) throw conflictError("Frase");

    return citieRepository.postCitie(name);
}

const citieService = {
    postCitie
}

export default citieService ;