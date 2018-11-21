var express = require("express");
var router = express.Router();


var homePage=require("../controllers/homepage");
var bookPage=require("../controllers/bookpage")
router.get("/", homePage.homePage);
router.get("/SearchBook", homePage.searchBook);
router.get("/ShowBook", homePage.showBook);
router.get("/Poetry",bookPage.poetry);
router.get("/Literature",bookPage.literature);
router.get("/StoryBooks",bookPage.storyBook);
router.get("/Educational",bookPage.educational);
router.get("/Biography",bookPage.biography);
/* Other pages*/

module.exports = router;