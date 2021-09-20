const express = require('express');        //acquiring express library
const app = express();                     //calling express app to use
const port = 8000;                         //declaring port number to run

const db = require('./config/mongoose');        //mongoose config
const Todo = require('./models/todo');        //to start using DB Schema


//setup the view engine
app.set('view engine', 'ejs');                  //type and name of view engine
app.set('views', './views');                    //setting path of view engine
app.use(express.urlencoded());                  //initializing parser
app.use(express.static('assets'));              //using static files such as css, javascript and images through this

app.use('/', require('./routes/'));   //use express router


app.listen(port, function(err){                                  //firing up our express server
    if(err){
        console.log('Error!!', err);
    }
    console.log('Server is running successfully in port', port);
});