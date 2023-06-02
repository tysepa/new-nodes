import express from 'express';
import User from "../database/model/user.model.js"
const router = express.Router();
// dffgf


router.get('/user', async(req, res)=>{
    try{
        const user= await User.find();
res.json(user)

    } catch(err){
        res.json({message: err});
    }

})

router.post('/post',(req, res)=>{
    const {name, email, role}= req.body;
    User.create({
        name: name,
        email: email,
        role:role
    }).then(()=>{
        res.status(200).json("User created well!")
    }).catch((err)=>{
        if(err)
        res.status(400).send({error: err})
    })
})




export default router