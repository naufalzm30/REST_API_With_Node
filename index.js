import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';

// const express = require('express');
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/',(req,res)=>{
    res.send('helehlehlehleh');
});

app.listen(PORT,()=>console.log(`server run di http://localhost:${PORT}`));

// app.get('/hehe',(req,res)=>{
//     res.status(200).send({
//         hehe:'899',
//         hoho:'masuk lhooo'
//     })
// });

// app.post('/hehe/:id',(req,res)=>{
//     const {id} = req.params;
//     const {logo}=req.body;

//     if (!logo){
//         res.status(418).send({message:'We need logo})'})

//     }

//     res.send({
//         hehe:`899 with your ${logo} dan id ${id}`,
//     })
// });
// var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

// numArray = numArray.filter((number) => {
//   for (var i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) return false;
//   }
//   return true;
// });
