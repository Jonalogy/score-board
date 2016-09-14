//Instantiating node packages
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var cors = require('cors');

//2. Mounting sub-app, cors
app.use(cors());

//3. Mounting sub-app, bodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//4. Similated DATA file
var data = [{id:0, name:'Mr. Socks', score:3000},{id:1, name:'Lana Divana', score:9000},{id:2, name:'Tofu King', score:7500}];

//5. Creating routes
app.get('/entries',function(req, res){
  rank();
  res.json(data);
});

app.post('/entries',function(req,res){
  console.log("Received AJAX data",req.body);
  req.body.id = data.length;
  var newData = req.body;
  data.push(newData); //Updates 'database'
  rank();
  res.json(data);
});

// app.put()

app.delete('/entries/:id',function(req,res){
  console.log("id to delete "+req.params.id);
  var idToDelete = req.params.id;
  for(i=0; i<data.length; i++){
    if(data[i].id == idToDelete){
      console.log("Profile to delete: ", data[i])
      data.splice(i,1);
      console.log("updated database: ", data)
    }//End of if()
  }//END of for()
  rank();
  res.json(data);
});//END of delete route

//-----Helper Functions-----
function rank(){
  data.sort(compareNumbers)//Sorts data file by numbers

  //For loop is reallocate profile id
  for(i=0; i<data.length; i++){
    data[i].id = i;
  }//End of for()

  function compareNumbers(a, b) {
  return -(a.score - b.score);
  }
}//END of rank()

//-----Launch server!-----
app.listen(3000,console.log('Local Host is on!'));
