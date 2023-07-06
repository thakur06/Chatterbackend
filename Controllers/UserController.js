const User=require('../Schema/UserModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require("dotenv").config();

const login=async(req,res)=>{
try {
    const user=await User.findOne({email:req.body.email});
    
    if (user && await bcrypt.compare(req.body.password,user.password)){

        const token =  jwt.sign(
            { username: user.username, id: user._id },
            process.env.JWTKEY,
            { expiresIn: "1h" }
          );
          res.status(200).json({ user, token });

    }else {
        res.status(401).send(`Invalid username or password`);
    }
} catch (error) {
    console.log(error);
    res.status(500).send(error);
}
}

const signIn=async(req,res)=>{
    try {
        const exist_user=await User.findOne({email:req.body.email});
        if (exist_user) {
res.status(200).send(`User already exists`);
        } else {
            const hashed_password=await bcrypt.hash(req.body.password,10);


            const user=await User.create({

                email:req.body.email,
                password:hashed_password,
                username:req.body.username,
                firstname:req.body.firstname,
                lastname:req.body.lastname,
                

            });
await user.save();

            const token = jwt.sign(
                { username: user.username, id: user._id },
                process.env.JWTKEY,
                { expiresIn: "1h" }
              );
              res.status(200).json({ user, token });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
    };


    module.exports ={login,signIn}