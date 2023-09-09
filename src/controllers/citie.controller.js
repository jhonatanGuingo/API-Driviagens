import httpStatus from "http-status";
import citieService from "../services/citieServices.js";

async function postCitie(req, res){
    const {name} = req.body;

    await citieService.postCitie(name);

    res.sendStatus(httpStatus.CREATED);
}

const citieController = {
    postCitie
}

export default citieController;