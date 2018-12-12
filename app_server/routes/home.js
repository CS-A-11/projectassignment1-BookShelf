var express = require("express");
var router = express.Router();
var upload    = require('./upload');

var homePage=require("../controllers/homepage");
var bookPage=require("../controllers/bookpage");
var userPage = require("../controllers/userpage");
router.get("/", homePage.homePage);
//router.get("/SearchBook", homePage.searchBook);
//router.get("/ShowBook", homePage.showBook);
router.post("/AllBooks",bookPage.showAllBooks);
router.get("/AllBooks/new",bookPage.getNew);
router.get("/AllBooks/:id",bookPage.searchByID);
router.get("/AllBooks",bookPage.createNewBook);
router.get("/GenreBooks/:genre",bookPage.getByGenre);
router.post("/AddUser",userPage.addNew);
router.get("/AddUser", userPage.getNew);
router.get("/login", userPage.loginTemp);
router.post("/login",userPage.loginUser);
router.get("/userDashboard",userPage.userDash);
router.get("/logout",userPage.logoutUser);
router.get("/SearchByTitle",bookPage.getByTitle);
router.get("/addBookToUser/:userid/:bookid",userPage.addNewBookToUser);
router.get("/showUploadedBooks",bookPage.showAllMyBooks);
router.get("/DeleteBook",bookPage.showAllMyBooksDelete);
router.get("/DeleteBook/:id",bookPage.deleteBook);
router.get("/DeleteBookConfirm/:id/:name",bookPage.confirmDelete);
router.get("/allBooks/:id/edit" ,bookPage.edit);
router.post("/allBooks/:id" , bookPage.update);
router.get("/test/:title",bookPage.getAllBooksTemp);
router.get("/test",bookPage.testrender);
router.get("/checkavailabilty", userPage.checkEmail);
router.get("/checkavailabilty", userPage.checkEmail);
router.get("/checkUserNameAvailabilty",userPage.checkUsername);
//router.get("/UpdateBookInfo/:id",bookPage.updateBookInfo);
//router.post("/NewUser",userPage.addNewUser);
/* Other pages*/

module.exports = router;