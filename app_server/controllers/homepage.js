module.exports.showLogin= function(req, res) {
    res.render("home-page", {
        title: "Book Shelf Online market Place for Books",
        pageHeader: {
          title: "BookShelf",
          strapline: "Find Used and New Books"
        },
        
      });
    };
module.exports.homePage=function(req,res){
    res.render("home-page",{
        title:"BookShelf",
        title1:"finds used and new books online"
        
    
    });
};
module.exports.myHomePage=function(req,res){
    res.render("home-page-layout",{
        title:"Book Shelf"
        
    });
};
module.exports.searchBook=function(req,res){
    res.render("Search-Book",{
        title: "Book Shelf Online market Place for Books",
        pageHeader: {
          title: "BookShelf",
        },
        text1:"Book Name",
        text2:"Show",
    });
};
module.exports.showBook=function(req,res){
    res.render("Show-Book",{
        title: "Book Shelf Online market Place for Books",
        pageHeader: {
            title: "BookShelf",
          },
        book:{
            name:"Outliers",
            Author:"Malcolm Gladwell",
            price:100,
            
    
        },
        });
}
    