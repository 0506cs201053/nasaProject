const http=require("http");

require('dotenv').config();

const app=require("./app");

const {mongoConnect}=require('./services/mongo.js')

const {loadPlanetsData}=require("./models/planets.model.js");
const {loadLaunchData} = require('./models/launches.model.js');
const PORT=process.env.PORT||8000;

const server=http.createServer(app);

async function startServer(){
   try{ 
      
      await mongoConnect();
    
        await loadPlanetsData();
        await loadLaunchData();
        server.listen(PORT,()=>{
            console.log(`listening server ${PORT}`);
        });

   }catch(error){
      console.error("error starting server", error);
   }
}

startServer();http


