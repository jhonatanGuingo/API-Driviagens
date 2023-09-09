import { db } from "../database/databaseConnection.js";

async function postCitie(name){
    await db.query(`INSERT INTO cities (name) VALUES ($1)`, [name]);    
}

async function getCitie(name){
    const citie = await db.query(`SELECT * FROM cities WHERE name = $1 `, [name]);
    return citie.rows[0]
}

const citieRepository = {
    getCitie,
    postCitie
}

export default citieRepository;