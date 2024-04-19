const express = require('express')
const app = express();
const port = 3006;

// songs 
const songs = [
    { id: 1, name: 'Kilometros', artist: 'Caligaris', year: 2007 },
    { id: 2, name: 'Umbrella', artist: 'Rihanna', year: 2000 },
    { id: 3, name: 'Back in black', artist: 'AC/DC', year: 1980 },
    { id: 4, name: 'Gasolina', artist: 'Daddy Yankee', year: 2002 },
];

app.get('/', (req, res) => {
    res.send('hola dev nodemon');
});

app.get('/songs', (req, res) => {
    res.json(songs);
    
});

app.listen(port, () => {
    console.log("servidor estar corriendo", port);
});