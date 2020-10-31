const express = require('express');
const router = express.Router();
const authUtils = require("../utils/auth");
const passport = require("passport");
const flash = require("connect-flash")

router.get("/login", (req,res,next) => {
    const message = req.flash();
    res.render("login", { message });
})

router.post("/login", passport.authenticate("local", {failureRedirect: "auth/login", failureFlash: "Username and password not correct"}, (req,res,next) => {
    res.redirect("/users");
}))

router.get("/register", (req,res,next) => {
    const message = req.flash();
    res.render("register", { message });
})

router.post("/register",(req,res, next) => {
    const registerParams = req.body;
    const users = req.app.locals.users;
    const payload = {
        username: registerParams.username,
        password: authUtils.hashPassword(registerParams.password),
      };
    
      users.insertOne(payload, (err) => {
        if (err) {
          req.flash('error', 'User account already exists.');
        } else {
          req.flash('success', 'User account registered successfully.');
        }
    
        res.redirect('/auth/register');
    });
});

router.get("/logout",(req,res,next) =>{
    req.session.destroy();
    res.redirect("/");
})

module.exports = router;