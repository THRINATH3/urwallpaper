const express=require('express');
const app=express();

const cors=require('cors');

app.use(cors({
    origin:'https://urwallpaper.vercel.app'
}))

app.use(express.json());

require('dotenv').config();

const {MongoClient}=require('mongodb');
let mcliet=new MongoClient(process.env.DB_URL);

mcliet.connect()
.then((connectionObj)=>{
    const urWallpaperdb=connectionObj.db('urWallpaper');
    app.listen(3000,()=>console.log('HTTP server started on PORT 3000'));
    const usersData=urWallpaperdb.collection('users');
    console.log('DB connection success');
    app.set('usersData',usersData);
})
.catch(err => console.log('Error in DB connection:', err));

//getting userApi router
const userApp=require('./APIs/userApi');
const uploadRoute = require('./APIs/upload');
app.use('/user-api',userApp);
app.use('/image-api',uploadRoute);



//handling invalid path
app.use('*',(req,res,next)=>{
    console.log(req.path)
    res.send({message:`Invalid path`})
})