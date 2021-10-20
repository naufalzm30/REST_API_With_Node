import express from 'express';

const router = express.Router();

const users = [
    {
        name:"John",
        lastName:"Lennon"
    },
    {
        name:"Paul",
        lastName:"Mccartney"
    }
]

router.get('/', (req,res)=>{
    res.send(users);
});

router.post('/', (req,res)=>{
    const user = req.body;

    users.push(user);

    res.send(`user ${user.name} sudah ditambahakan`);
});

export default router;
