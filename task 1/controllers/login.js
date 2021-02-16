var Users = require('../models/user')
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.initial=function(req,res,next){
    res.render('index', { title: 'Express' });
}

exports.login = function(req,res,next){
    Users.findOne({email: req.body.email},function(err,doc){
        if(doc)
        {
            bcrypt.compare(req.body.password, doc.hash, function(err, result) {
                if(result)
                {
                    req.session.name=doc.email;
                    res.json({status:true,message:"Valid User"});
                }
                else
                    res.json({status:false,message:"Invalid Username Or Password"});
            });
        }
        else
            res.json({status:false,message:"Invalid Username Or Password"});
    });
}

exports.signup=function(req,res,next){
    Users.findOne({email: req.body.email},function(err,doc){
        if(doc)
        {
            res.json({status:false,message:"User Account already created"});
        }
        else
        {
            bcrypt.genSalt(saltRounds, function(err, salt) {
                bcrypt.hash(req.body.password, salt, function(err, hash) {
                    let user=new Users({ email: req.body.email,
                        name: req.body.name,hash:hash})
                    user.save(function (err, user) {
                        if(err)
                            res.json({status:false,message:"Unable to save data"});
                        else
                          res.json({status:true,message:"Saved Successfully"});
                    })
                });
            });
        }
    })
}