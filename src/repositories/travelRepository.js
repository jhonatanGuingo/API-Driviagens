import { db } from "../database/databaseConnection.js";

async function getId(passengerId, flightId){
    const existPassenger = await db.query(`SELECT id FROM passengers WHERE id = $1`, [passengerId])
    const existFlight = await db.query(`SELECT id FROM flights WHERE id = $1`, [flightId]);

    if(existFlight.rowCount && existPassenger.rowCount) return true;

    return false;
}

async function postTravel(passengerId, flightId){
    await db.query(`INSERT INTO travels ("passengerId", "flightId") VALUES ($1, $2)`, [passengerId, flightId]);

}

const travelRepository = {
    getId,
    postTravel
}

export default travelRepository;
