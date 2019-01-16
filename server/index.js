const express = require('express');
const bodyParser = require('body-parser');
const bc = require('./controllers/book_controller')

const app = express();

//middleware
app.use(bodyParser.json());

//endpoints
app.get('/api/books', bc.read);
app.post('/api/books', bc.create);
app.put('/api/books/:id', bc.update)
app.delete('/api/books/:id', bc.delete)

//listen method
app.listen(4000, () => {
    console.log('4000 listening')
});