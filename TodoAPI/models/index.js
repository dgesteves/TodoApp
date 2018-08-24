const mongoose = require("mongoose");
mongoose.set("debug", true);

const url = process.env.DATABASEURL || 'mongodb://localhost/TodosAPI';
mongoose.connect(url, {useNewUrlParser: true});

mongoose.Promise = Promise;


module.exports.Todo = require("./todo");

