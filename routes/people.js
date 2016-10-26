const router = require('express').Router();
const Person = require('../models/person');

router.get('/', function(req, res){
  // dataFromTheDatabase is the list of documents that match the query
  // all the people in the database
  Person.find([]).then(function(dataFromTheDatabase){
    console.log('Documents from mongo', dataFromTheDatabase);
    res.send(dataFromTheDatabase);
  });
});

router.post('/', function(req, res){
  console.log('whats the boday',req.body);
  var name = req.body[0].name;
  var hometown = req.body[1].hometown;
  var favoriteMovie = req.body[2].favoriteMovie;
  console.log('name', name,hometown,favoriteMovie);
  var personToSave = new Person({name: name, hometown: hometown, favoriteMovie: favoriteMovie});
  console.log('whats the personToSave',personToSave);
  personToSave.save().then(function(){
    console.log('saved a new person');
    res.send(201);
  });
});


module.exports = router;
