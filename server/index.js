
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const db = require('../database/database')

const app = express() 
 
app.use(bodyParser.json());
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/../client/build/')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
 
app.get('/getDb', function (req, res) {
  const text = 'SELECT * FROM items';
    db.query(text, (err, query) => {
      if (err) {
        console.log(err.stack)   
      } else { 
        res.send(query.rows)
      }
    }) 
});

let port = 1337;

app.listen(port, () =>
  console.log(`app listening on port ${port}!`)
)