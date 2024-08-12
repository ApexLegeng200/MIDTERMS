const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/' + 'index.html');
})

app.get('/process_get', function (req, res) {
    
    response = {
        first_name:req.query.first_name,
        last_name:req.query.last_name,
        cars:req.query.cars,
        fav_language:req.query.fav_language,
        vehicle1:req.query.vehicle1,
        vehicle2:req.query.vehicle2,
        vehicle3:req.query.vehicle3
    };


console.log(response) ;
res.end(JSON.stringify(response));
});

app.listen(2007, () => {
    console.log('Server is running on http://localhost:2007');
});