const express = require('express');
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');
const path = require('path');

// create web app
const app = express();

// connecting the style sheet
app.use(express.static('public'));

// parsing the body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


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

let listArr = data.list;

app.get("/", function(req, res) {
  res.render("index", data)
});

app.post("/", function(req, res) {
  let newTask = req.body.task;
  let newTodo = {todo: newTask, yetTodo: true};
  data.list.push(newTodo);
  res.render("index", data);
});

app.post("/complete", function(req, res) {
  // console.log(req.body);
  function isMarked(element) {
      if (element.todo === req.body.marked) {
        element.yetTodo = false;
      }
  }
  listArr.find(isMarked);
  // console.log(`req.body.marked is: ${req.body.marked}`);
  // console.log(listArr);
  res.redirect('/');
})

app.listen(3000, function(){
  console.log("Woooohoooo!");
});
