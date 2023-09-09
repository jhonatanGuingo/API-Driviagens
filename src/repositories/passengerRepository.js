import { db } from "../database/databaseConnection.js";

async function postPassenger(firstName, lastName){
    await db.query(`INSERT INTO passengers 
    ("firstName", "lastName") 
    VALUES ($1, $2)`, [firstName, lastName])
}

async function getPassenger(name){
    const passenger = await db.query(`SELECT passengers."firstName" || ' ' || passengers."lastName" AS passenger
    COUNT(travels.*) AS travels
    FROM passengers
    JOIN travels ON passengers.id = travels."passengerId"
    WHERE passengers."firstName" || ' ' || passengers."lastName" ILIKE '%' || $1 || '%'
    GROUP BY passenger, travels `, [name] )

    return passenger.rows;
}

const passengerRepository = {
    postPassenger,
    getPassenger
}

export default passengerRepository;