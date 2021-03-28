const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

const {createUser} = require('./Controller/userController')


//db connection
const {Validator} = require('./validate')
async function connectDB() {
    await mongoose.connect('mongodb://127.0.0.1:27017/tasks', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
}
connectDB();


//router
var router = express.Router();

router.post('/post/User', Validator,createUser);

app.use('/', router);

app.listen(3000, () => {

});