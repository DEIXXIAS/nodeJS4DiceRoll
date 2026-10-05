const express = require('express');
const app = express();
const PORT = 3000


app.use(express.static(__dirname + '/static'))

app.get('/api/diceRoll', (request, response) => {
    console.log('Calling "/api/diceRoll" on the Node.js server')
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;
    response.json({die1, die2, total: die1 + die2})
})

app.get('/api/ping', (request, response) => {
    console.log('Calling /api/ping')
    response.type('text/plain')
    response.send('ping response')
})

app.listen(PORT, () =>{
    console.log(`Server is running on https://localhost:${PORT}`);
})