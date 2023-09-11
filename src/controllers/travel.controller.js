import httpStatus from "http-status";
import travelService from "../services/travelService.js"

async function postTravel(req, res){
    const {passengerId, flightId} = req.body

    await travelService.postTravel(passengerId, flightId);

    res.sendStatus(httpStatus.CREATED)

}

const travelController = {
    postTravel
}

export default travelController;