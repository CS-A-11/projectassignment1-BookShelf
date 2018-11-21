module.exports.poetry=function(req,res){
    res.render("category-show",{
        title:"Poetry"
    });
};

module.exports.literature=function(req,res){
    res.render("category-show",{
        title:"Literature"
    });
};

module.exports.storyBook=function(req,res){
    res.render("category-show",{
        title:"Story Books"
    });
};

module.exports.educational=function(req,res){
    res.render("category-show",{
        title:"Educational"
    });
};

module.exports.biography=function(req,res){
    res.render("category-show",{
        title:"Biography"
    });
};

