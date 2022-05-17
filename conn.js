 const  mongoose =  require('mongoose');
const uri = "mongodb+srv://anshika770:anshika770@cluster0.i5bzv.mongodb.net/?retryWrites=true&w=majority";
 mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
     console.log("Connected");
 }).catch((err)=>{
    console.log("error => ",err)
 })