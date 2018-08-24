const dotenv = require('dotenv'),
    express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan'),
    bodyParser = require("body-parser");


dotenv.config();
const app = express();

//requiring routes
const todoRouter = require('./routes/todos');

const indexHtml = __dirname + "/views/index.html";

app.get("/", ((req, res) => res.sendFile(indexHtml)));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
console.log(__dirname);

// routes Shortcut
app.use('/api/todos', todoRouter);


const port = process.env.PORT || '3000';
app.listen(port);
console.log(" Server is Running on PORT = " + port);
module.exports = app;
