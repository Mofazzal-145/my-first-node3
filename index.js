const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello world mofazzal');
});

const users = [
    {id: 1, name: 'sabina', email:'sabina@gmail.com', ph:'0174566411' },
    {id: 2, name: 'sanoor', email:'sanoor@gmail.com', ph:'0174566411' },
    {id: 3, name: 'sakila', email:'sakila@gmail.com', ph:'0174566411' },
    {id: 4, name: 'salina', email:'salina@gmail.com', ph:'0174566411' },
    {id: 5, name: 'sadia', email:'sadia@gmail.com', ph:'0174566411' },
    {id: 6, name: 'sohona', email:'sohona@gmail.com', ph:'0174566411' },
    {id: 7, name: 'sabana', email:'sabana@gmail.com', ph:'0174566411' },
]


// filter by search query parameter
app.get('/users', (req, res) => {
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else{
        res.send(users);
    }
    // console.log('query', req.query);
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id == id);
    res.send(user);
});

app.post('/user', (req, res) =>{
    console.log('request',req.body)
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () => {
    console.log('Listening to port', port);
});


