const express = require('express');
const app = express();

 require('./conn');
const user = require('./model');
/////////////////////////////////////////////////
app.use(express.json());


app.get('/',async function(req, res){
    try{
        const getUserData =await user.find({});
        res.send(getUserData);
    }catch(err){
        console.log(err);
    }
   
})


app.get('/:id',async function(req, res){
    try{
        const _id = req.params.id;
        const getUser =await user.findById({_id});
        res.send(getUser);
    }catch(err){
        console.log(err);
    }
   
})

app.post('/user',async  function(req, res){
    try{
        const addUser = new user(req.body);
        console.log(req.body);
        const addUserData =await addUser.save();
        res.send(addUserData);
    }catch(err){
        console.log(err);
    } 
})

app.patch('/:id',async  function(req, res){
    try{
        const _id = req.params.id;
        const updateUser =await user.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.send(updateUser);
    }catch(err){
        console.log(err);
    } 
})

app.delete('/:id',async  function(req, res){
    try{
        const _id = req.params.id;
        const deleteUser =await user.findByIdAndDelete(_id);
        res.send(deleteUser);
    }catch(err){
        console.log(err);
    } 
})

app.listen(3000,function(req, res){
    console.log('Connected on port 3000');

});