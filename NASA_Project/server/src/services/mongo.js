const mongoose=require('mongoose');

const MONGO_URL=process.env.MONGO_URL;

mongoose.connection.once('open',()=>{
    console.log('MongoDb connection ready:')
})

mongoose.connection.on('error',(err)=>{
    console.error(err);
});


async function mongoConnect(){
    await mongoose.connect(MONGO_URL,{
        useNewUrlParser: true, 
      useUnifiedTopology: true,
     //useFindAndModify: false, // Add this option
      //useCreateIndex: true // Add this option
       });
}

module.exports={
    mongoConnect,
}