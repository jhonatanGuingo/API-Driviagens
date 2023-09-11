import { db } from "../database/databaseConnection.js";


async function postFlight(origin, destination, date){
    console.log(date)
    await db.query(`INSERT INTO flights ("origin", "destination", "date") VALUES ($1, $2, $3)`, [origin, destination, date]);

}

async function getFlight(origin, destination){
    
    const existOrigin = await db.query(`SELECT cities.id FROM cities WHERE id = $1`, [parseInt(origin)]);
    const existDestination = await db.query(`SELECT cities.id FROM cities WHERE id = $1`, [parseInt(destination)]);

    if(existOrigin.rowCount && existDestination.rowCount) return true;

    return false;


}

async function getFlightByCitie(origin, destination, smallerDate, biggerDate){

    if(biggerDate && smallerDate && !destination && !origin){
        const result = await db.query(`SELECT flights.id AS id, 
        origin_cities.name AS origin, 
        destination_cities.name AS destination, 
        TO_CHAR(date,'DD-MM-YYYY') AS date
        FROM flights
        JOIN cities AS origin_cities ON origin_cities.id = flights.origin
        JOIN cities AS destination_cities ON destination_cities.id = flights.destination 
        WHERE flights.date BETWEEN $1 AND $2
        ORDER BY date ASC`, [smallerDate, biggerDate]);
        

        if(result) return result.rows;

        return {}
    }

    if(origin){

        if(biggerDate && smallerDate) {

            const existOrigin = await db.query(`SELECT flights.id AS id, 
            origin_cities.name AS origin, 
            destination_cities.name AS destination, 
            TO_CHAR(date,'DD-MM-YYYY') AS date
            FROM flights
            JOIN cities AS origin_cities ON origin_cities.id = flights.origin
            JOIN cities AS destination_cities ON destination_cities.id = flights.destination 
            WHERE origin_cities.name = $1 AND date >= $2 AND date <= $3
            ORDER BY date ASC`, [origin, smallerDate, biggerDate]);
            if(existOrigin) return existOrigin.rows;
            console.log(existOrigin)
        
            return {};
        }

        const existOrigin = await db.query(`SELECT flights.id AS id, 
        origin_cities.name AS origin, 
        destination_cities.name AS destination, 
        TO_CHAR(date,'DD-MM-YYYY') AS date
        FROM flights
        JOIN cities AS origin_cities ON origin_cities.id = flights.origin
        JOIN cities AS destination_cities ON destination_cities.id = flights.destination 
        WHERE origin_cities.name = $1
        ORDER BY date ASC
    `, [origin]);
    
        if(existOrigin) return existOrigin.rows;
        
        return {};
    }
    
    if(destination){

        if(biggerDate && smallerDate) {
            const existDestination = await db.query(`SELECT flights.id AS id, 
            origin_cities.name AS origin, 
            destination_cities.name AS destination, 
            TO_CHAR(date,'DD-MM-YYYY') AS date
            FROM flights
            JOIN cities AS origin_cities ON origin_cities.id = flights.origin
            JOIN cities AS destination_cities ON destination_cities.id = flights.destination 
            WHERE destination_cities.name = $1 AND date >= $2 AND date <= $3
            ORDER BY date ASC`, [destination, smallerDate, biggerDate]);
            if(existDestination) return existDestination.rows;

            return {};

        }

        const existDestination = await db.query(`SELECT flights.id AS id, 
        origin_cities.name AS origin, 
        destination_cities.name AS destination, 
        TO_CHAR(date,'DD-MM-YYYY') AS date
        FROM flights
        JOIN cities AS origin_cities ON origin_cities.id = flights.origin
        JOIN cities AS destination_cities ON destination_cities.id = flights.destination 
        WHERE destination_cities.name = $1
        ORDER BY date ASC
    `, [destination]);

        if(existDestination) return existDestination.rows;

        return {};

    }

}

const flightRepository = {
    postFlight,
    getFlight,
    getFlightByCitie
}

export default flightRepository;