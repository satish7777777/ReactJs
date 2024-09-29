// const express = require('express');
import express from 'express';

const app = express();

// Define the port to listen on (default is 3000)
const port = process.env.PORT || 3000;

// Define a simple GET route to respond with "Hello World!"
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/joke',(req,res) =>{
    const jokes = [
        {
            id:1,
            title:"A Joke",
            content:"This is a joke"
        },
        {
            id:2,
            title:"Another Joke",
            content:"This is another joke"
        },
        {
            id:3,
            title:"Other Joke",
            content:"This is OTHER joke"
        },
        {
            id:4,
            title:"Why Joke",
            content:"This is WHY joke"
        }
    ]
    res.send(jokes)
})

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
