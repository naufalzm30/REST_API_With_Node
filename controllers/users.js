import { v4 as uuidv4 } from 'uuid';

let users = [
    // {
    //     name:"John",
    //     lastName:"Lennon"
    // },
    // {
    //     name:"Paul",
    //     lastName:"Mccartney"
    // }
]

export const createUser = (req,res)=>{
    const user = req.body;

    users.push({ ... user, id:uuidv4()});

    res.send(`user ${user.name} sudah ditambahakan`);
}

export const getUser = (req,res)=>{
    res.send(users);
}

export const getUserWithId = (req,res) =>{

    const {id} = req.params;

    const foundUser = users.find((user) => user.id == id);

    res.send(foundUser);
}

export const deleteUser = (req,res) =>{

    const {id} = req.params;

    users = users.filter((user)=> user.id !== id);

    res.send(`user dengan id ${id} sudah dihapus`);
}

export const patchUser = (req,res) =>{

    const {id} = req.params;

    const {name, lastName} = req.body;

    const user = users.find((user) => user.id == id);

    if (name) user.name = name;    

    if (lastName) user.lastName = lastName;

    res.send(`user dengan id ${id} sudah diupdate`);
}