const express = require('express');
const userapp = express.Router();
userapp.use(express.json()); // Use express.json() middleware to parse JSON bodies

require('dotenv').config();

const bcryptjs=require('bcryptjs');

const jwt=require('jsonwebtoken');


//register or signup part
userapp.post('/user',async(req,res)=>{
    const usersData=req.app.get('usersData');
    try{
        const presUser=req.body;
        let getUser=await usersData.findOne({
            username:presUser.username
        })
        if(getUser!== null)
            res.send({ message: "User already existed" });
        else{
            let hashedPassword=await bcryptjs.hash(presUser.password,7);
            presUser.password=hashedPassword;
            await usersData.insertOne(presUser);
            res.send({message:"USER CREATED"});
        }
    }
    catch(err)
    {
        console.error('Error creating user:', err);
        res.status(500).send({ message: 'Error creating user' });
    }
})

//login part
userapp.post('/login',async(req,res)=>{
    const presuser=req.body;
    const userData=req.app.get('usersData');
    try{
        let findUser=await userData.findOne({username:presuser.username});
        if(findUser===null)
            res.send({message:"INVALID USERNAME"});
        else
        {
            let result=await bcryptjs.compare(presuser.password,findUser.password);
            if(result==false)
            {
                 res.send({message:"INVALID PASSWORD"});
            }
            else
            {
                let signedToken=jwt.sign(
                    {username:presuser.username},
                    process.env.SECRET_KEY,
                    {
                        expiresIn:'1h',
                    }
                )
    
                res.send({message:"LOGIN SUCCESS",token:signedToken,user:findUser});
            }
        }
    }
    catch(err)
    {
        console.error('Error creating user:', err);
        res.status(500).send({ message: 'Error creating user' });
    }
})

module.exports = userapp;