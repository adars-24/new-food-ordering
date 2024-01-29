const mongoose = require('mongoose');

// const mongoURI = 'mongodb+srv://ideal:17devil18@cluster0.snz82da.mongodb.net/gofoodmern?retryWrites=true&w=majority'
 const mongoURI = 'mongodb+srv://ideal:17devil18@cluster0.snz82da.mongodb.net/gofoodmern?retryWrites=true&w=majority'

 const mongoDB= async ()=>{
//  mongoose.connect(mongoURI, ()=>{
//    console.log("connected");
//  });
await mongoose. connect(mongoURI,{ useNewurlParser: true }) . then(() => { console. log('Connection to database!')
const fetched_data =  mongoose.connection.db.collection("food_item");
fetched_data.find({}).toArray(function(err, data){
              if(err) console.log(err);
                else console.log(data);
              })
})
 }
// const connectToMongo = async () => {
//     try {
//       mongoose.set("strictQuery", false);
//       mongoose.connect(mongoURI);
//       console.log("Connected to Mongo Successfully!");
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   module.exports = connectToMongo;





// 23 se 41 tak commented hai?


// const mongoDB = async() =>{
//     try{
    
//     mongoose.set("strictQuery", false);
    
//    await mongoose.connect(mongoURI);
//    console.log("connected");
//     }
//     catch (error) {
//              console.log(error);

//              const fetched_data = await mongoose.connection.db.collection("food_items");
//              fetched_data.find({}).toArray(function(err, data){
//                 if(err) console.log(err);
//                 else console.log(data);
//              })

//            }
// }

module.exports= mongoDB;




