const {
  getAllLaunches,
  scheduleNewLaunch,
  existsLaunchWithId,
  abortLaunchById,
}=require('../../models/launches.model');

const { getPagination}=require('../../services/query');

async function httpGetAllLaunches(req ,res){
  const {skip,limit}=getPagination(req.query);
  const launches=await getAllLaunches(skip , limit)
  return res.status(200).json(launches);
}

async function httpAddNewLaunch(req, res){
  const launch=req.body;

  if(!launch || !launch.mission || !launch.rocket ||!launch.launchDate
  || !launch.target){
    return res.status(400).json({
      error:'Missing required property',
    });
  }

 const launchDate = new Date(launch.launchDate);
 if (isNaN(launchDate)) {
     return res.status(400).json({
         error: 'Invalid launch date',
     });
 }
 // Update launchDate in launch object with validated date
 launch.launchDate = launchDate;

  await scheduleNewLaunch(launch);
  console.log(launch);
  return res.status(201).json(launch);
}

async function httpAbortLaunch(req,res){
   const launchId=Number(req.params.id);
   
    const existsLaunch=await existsLaunchWithId(launchId);
   if(!existsLaunch){
    return res.status(404).json({
      error:'Launch not found',
     });
   }
   

   //if launch does exist
   const aborted=await abortLaunchById(launchId);
   if(!aborted){
    return res.status(400).json({
      error:'Launch not aborted',
    })
   }
   return res.status(200).json({
    ok:true,
   });
}

module.exports={
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch,
};