var mongoose = require("mongoose");
var User= mongoose.model("User");

module.exports.addNew=function(req,res){
    if(!req.body.email || !req.body.username ||  !req.body.password  || !req.body.passwordConf){
        console.log("All input fields should be filled");
    }
    else{
        if(req.body.password !== req.body.passwordConf){
            console.log("Passwords Donot match");
        }
        else{
            var userData = {
                email: req.body.email,
                username: req.body.username,
                password: req.body.password,
                passwordConf: req.body.passwordConf,
              }
              User.create(userData, function (err, user) {
                if (err) {
                  return next(err)
                } else if(!user) {
                  console.log("User Creation not successfull");
                }
                else{
                    console.log("User Created");
                 res.redirect('/');  //Sessions needs to be added
                }
             });
        }
    }
}
module.exports.getNew=function(req,res){
    res.render("signup.ejs");
}
module.exports.loginTemp=function(req,res){
    res.render("signin.ejs");
}
module.exports.loginUser= function(req,res){
    var em = req.body.email;
    var pass = req.body.password;
    User.findOne({email: em , password:pass}, function(err, user){
        if(err){
            console.log(err);
        }
        else if(!user){
            console.log("User Not found");
        }
        else{
            req.session.user=user;
            res.redirect('/userDashboard');
        }
        
    });
}
module.exports.userDash= function(req,res){//needs implementation
    if(req.session.user){
        console.log(req.session.user.username);
        res.render("userdashboard.ejs");
    }
    else{
        console.log("user not logged in");
        res.redirect('/login');
    }
}

module.exports.logoutUser= function(req,res){
    if(req.session){
        req.session.destroy(function(err){
            if(err){
                console.log("logout not successfull");
            }
            else{
                res.redirect('/');
            }
        });
    }
}