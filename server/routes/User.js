const express = require('express');
const router = express.Router();
const User = require('../models/User.model')
const CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

const generateAccessToken = (user) => {
  return jwt.sign( {user: {
    username: user.username,
    email: user.email,
    role:user.role,
    id: user.id,
 } }, "mySecretKey", {
    expiresIn: "1h",
  });
};

const generateRefreshToken = (user) => {
  return jwt.sign( {user: {
    username: user.username,
    email: user.email,
    role:user.role,
    id: user.id,
 } }, "myRefreshSecretKey");
};
router.get("/users" ,async(req,res)=>{
  const users = await User.findOne({email :"coserplus@gmail.com"})
  let decryptedPassword =CryptoJS.AES.decrypt(users.password,
    process.env.KEY
  ).toString(CryptoJS.enc.Utf8)
  res.send(decryptedPassword);
})
router.post('/register' ,async (req,res)=>{
    const newUser = new User({
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.KEY
          ).toString(),
      });
    
      try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
      } catch (err) {
        res.status(500).json(err);
      }
    
});
router.post("/login",async (req,res)=>{
    const user = req.body;
    const Suser= await User.findOne({email : req.body.email})
   if(Suser){
    let decryptedPassword =CryptoJS.AES.decrypt(Suser.password,
        process.env.KEY
      ).toString(CryptoJS.enc.Utf8)
      if(decryptedPassword!== req.body.password){
        res.status(401).json("Wrong credentials!");
      }else{
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);
        res.json({
          email: Suser.email,
          accessToken,
          refreshToken,
        });
      }
   }else{
    res.status(401).json("user not found!");

   }
 
   

})
module.exports = router;