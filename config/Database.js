// const mongoose=require('mongoose');
// const connectDatabase =()=>{
// mongoose.connect(process.env.BD_URL),{useNewUrlParser:true,
// useUnifiedTopology:true}.then(console.log("Databse connected")).catch(console.log("error in connection"));
// }
// module.exports=connectDatabase;
const mongoose = require("mongoose");
const connectDatabase =()=> {
  mongoose.connect(process.env.BD_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
//     .then(console.log("DATABASE Connected"));
// };
// module.exports = connectDatabase;
.then(() => {
    console.log("DATABASE Connected");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
};

module.exports = connectDatabase;
