
var mongoose = require("mongoose");
var Book= mongoose.model("Book");
var User= mongoose.model("User");

// module.exports.poetry=function(req,res){
//     res.render("category-show.pug",{
//         title:"Poetry"
//     });
// };

// module.exports.literature=function(req,res){
//     res.render("category-show.pug",{
//         title:"Literature"
//     });
// };

// module.exports.storyBook=function(req,res){
//     res.render("category-show.pug",{
//         title:"Story Books"
//     });
// };

// module.exports.educational=function(req,res){
//     res.render("category-show.pug",{
//         title:"Educational"
//     });
// };

// module.exports.biography=function(req,res){
//     res.render("category-show.pug",{
//         title:"Biography"
//     });
// };
module.exports.searchByID=function(req,res){
    Book.findById(req.params.id,function(err,bookFound){
        if(!bookFound){
            console.log(req.params.id);
            console.log("Book not found");
        }
        else if(err){
            console.log(err);
        }
        else{
        console.log(bookFound.name);
        res.render("show.ejs",{
            book:bookFound
        })
    }
    });
}
module.exports.showAllBooks=function(req,res){
    var name =req.body.name;
    var image= req.body.image;
    var cat = req.body.category;
    var con = req.body.condition;
    var desc = req.body.description;
    var pr=req.body.price;
    var ge = req.body.genre;
    var oid = req.session.user._id;
    console.log(ge);
    var newBook = {name: name , image: image, description: desc , category:cat , condition:con,price:pr , genre:ge , addedBy:oid }
    Book.create(newBook , function(err , newlyBook){
       if(err) { console.log(err);}
        else  {
            console.log(oid);
            //implementation required
            User.findOneAndUpdate({_id:oid} , {$push : {booksAdded : newlyBook._id},function(err , useee) {
                console.log("----------------------Also Added to user-----------------------");
            }});    
            res.redirect("/AllBooks");
            console.log("Book created"+name);
        }
    });
}
module.exports.getNew=function(req,res){
    if(req.session && req.session.user){
        console.log(req.session.user._id);
        res.render("new.ejs");
    }
    else{
        res.redirect('/login');
    }
}
module.exports.createNewBook=function(req,res){
    Book.find({}, function(err , AllBooks){
        if(err) console.log("error");
        else console.log("good")
            res.render("allBooks.ejs" ,{AllBooks:AllBooks});
    });
}
module.exports.getByGenre=function(req,res){
    
    var GivenGenre=req.params.genre;
    console.log("finding "+GivenGenre);
    Book.find({genre:GivenGenre},function(err,BooksFound){
        if(err)console.log("Error")
        else if(!BooksFound) console.log("No Books Found")
        else{
            res.render("allBooks.ejs",{
                AllBooks:BooksFound
            })
        }
    });
}

module.exports.getByTitle= function(req,res){
    
    var givenTitle = req.query.title;
    console.log(givenTitle);
    Book.find({name :{$regex:givenTitle}},function(err,BooksFound){
        if(err)console.log("Error")
        else if(!BooksFound) console.log("No Books Found")
        else{
            res.render("allBooks.ejs",{
                AllBooks:BooksFound
            })
        }
    });
}