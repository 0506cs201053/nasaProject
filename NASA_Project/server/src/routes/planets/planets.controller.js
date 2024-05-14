// const {getAllPlanets}=require("../../models/planets.model.js")

// function httpGetAllPlanets(req, res){
//    return res.status(200).json(getAllPlanets);
// }

// module.exports={
//     getAllPlanets
// }


const { getAllPlanets } = require("../../models/planets.model.js");

async function httpGetAllPlanets(req, res) {
    //const planets = getAllPlanets(); // Call getAllPlanets function to fetch planets data

    // Return the fetched planets as JSON response
    return res.status(200).json(await getAllPlanets());
}

module.exports = {
    httpGetAllPlanets
};