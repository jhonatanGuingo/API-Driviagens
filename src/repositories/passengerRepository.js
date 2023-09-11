import { db } from "../database/databaseConnection.js";

async function postPassenger(firstName, lastName){
    await db.query(`INSERT INTO passengers 
    ("firstName", "lastName") 
    VALUES ($1, $2)`, [firstName, lastName])
}

async function getPassenger(name){
    const passenger = await db.query(`SELECT passengers."firstName" || ' ' || passengers."lastName" AS passenger,
	COUNT(travels.*) AS travels
    FROM passengers
    LEFT JOIN travels ON passengers.id = travels."passengerId"
    WHERE passengers."firstName" || ' ' || passengers."lastName" ILIKE $1
    GROUP BY passenger
	ORDER BY travels DESC
	LIMIT 10`, [`%${name}%`] )

    console.log(passenger.rows)

    return passenger.rows;
}

const passengerRepository = {
    postPassenger,
    getPassenger
}

export default passengerRepository;