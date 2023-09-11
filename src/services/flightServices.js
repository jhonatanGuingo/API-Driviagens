
import dayjs from "dayjs";
import { conflictError } from "../errors/conflict.js";
import { incompleteDataError } from "../errors/incompleteData.js";
import { notFoundError } from "../errors/notFound.js";
import flightRepository from "../repositories/flightRepository.js";
import { convertDate } from "../utils/convertData.js";

async function postFlight(origin, destination, date){

    const dataAtual = dayjs().format('DD-MM-YYYY');
    const currentDate = convertDate(dataAtual)
    const requestDate = convertDate(date);
    console.log(currentDate)

    if(origin === destination) throw conflictError();

    if(currentDate > requestDate) throw incompleteDataError()

    const result = await flightRepository.getFlight(origin, destination)
  
    if(result === false) throw notFoundError();
   

    return flightRepository.postFlight(origin, destination, date);


}

async function getFlightByCitie(origin, destination, biggerDate, smallerDate){


    const result = await flightRepository.getFlightByCitie(origin, destination, biggerDate, smallerDate);
    
    return result;
}
const flightService = {
    postFlight,
    getFlightByCitie
}

export default flightService;