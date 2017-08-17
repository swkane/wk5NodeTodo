const express = require('express');
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');
const path = require('path');

// create web app
const app = express();

app.use(express.static('public'));

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')



let data = {
  list: [
    {
      todo: "Watch The Office for the 15th time",
      yetTodo: true},
    {
      todo: "Clean the house",
      yetTodo: true},
    {
      todo: "Walk the dog",
      yetTodo: true}
  ]
};

//only use 1 render
app.get("/", function(req, res) {
  res.render("index", data)
});

app.listen(3000, function(){
  console.log("Woooohoooo!");
});
