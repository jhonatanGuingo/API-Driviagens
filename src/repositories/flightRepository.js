import { db } from "../database/databaseConnection.js";


async function postFlight(origin, destination, date){
    console.log(date)
    await db.query(`INSERT INTO flights ("origin", "destination", "date") VALUES ($1, $2, $3)`, [origin, destination, date]);

}

async function getFlight(origin, destination){
    
    const existOrigin = await db.query(`SELECT cities.id FROM cities WHERE id = $1`, [parseInt(origin)]);
    const existDestination = await db.query(`SELECT cities.id FROM cities WHERE id = $1`, [parseInt(destination)]);

    if(existOrigin && existDestination) return true;

    return false;


}

const flightRepository = {
    postFlight,
    getFlight
}

export default flightRepository;