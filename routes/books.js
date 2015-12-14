var express = require('express');
var router = express.Router();

var path = require('path');
var fs = require("fs");

var file = path.format({
    root : "/",
    dir : "/Users/PTS/temp/classwork/tddpractice/data",
    base : "books.db",
    ext : ".db",
    name : "file"
});
var exists = fs.existsSync(file);


if(!exists) {
  console.log("Creating DB file.");
  fs.openSync(file, "w");
}

var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file);

if(!exists) {
  db.run("CREATE TABLE books (title, author)");
}

/* GET users listing. */
router.get('/', function(req, res, next) {

  db.serialize(function(){
    db.all('SELECT title, author FROM books', function(err, data){
      res.send(data);
    })
  });

});

router.post('/', function(req, res, next){
  db.serialize(function(){
    db.run('INSERT INTO books (title, author) VALUES (?, ?)', [req.body.title, req.body.author], function(err){
      console.log('errors', err);
    })
    db.all('SELECT title, author FROM books', function(err, data){
      res.send(data);
    })
  })
})

module.exports = router;
