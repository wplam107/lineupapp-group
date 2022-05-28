const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const cors = require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const chatData = [];

app.get('/', (req, res) => {
  res.send(chatData);
});

app.post('/', (req, res) => {
  const data = req.body;
  console.log(data);
  chatData.push(data);
  res.json(chatData);
});

app.listen(3000, () => console.log("Server Running..."));