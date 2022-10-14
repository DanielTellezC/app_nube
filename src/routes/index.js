const express = require("express");
const router = express.Router();
const passport = require('passport');

// Ruta raíz
router.get('/', (req, res, next) => {
    res.render('index');
});

// Signup registro de usuarios
router.get('/signup', (req, res, next)=>{
    res.render('signup');
});

router.post('/signup', passport.authenticate('local-signup',{
    successRedirect: '/profile',
    failureRedirect: '/signup',
    passReqToCallback: true
}));

// Signin ingreso de usuarios
router.get('/signin', (req, res, next)=>{
    res.render('signin');
});

router.post('/signin', passport.authenticate('local-signin',{
    successRedirect: '/profile',
    failureRedirect: '/signin',
    passReqToCallback: true
}));

// Cerrar sesion
/*
router.get('/logout', (req,res,next) =>{
    req.logOut();
    res.redirect('/');
});
*/
router.get('/logout', function(req, res, next){
    req.logout(function(err){
        if(err) { return next(err); }
        res.redirect('/');
    });
});

// Perfil
router.get('/profile', isAuthenticated, (req,res, next) =>{
    res.render('profile');
});

function isAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
};

module.exports = router;