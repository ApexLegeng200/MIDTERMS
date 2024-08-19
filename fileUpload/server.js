var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var urlencoderParser = bodyParser.urlencoded({ extended: false });

const path = require('path');
const mime = require('mime-types');
const multer = require('multer');

app.use('/', express.static(__dirname));


const fileStorage = multer.diskStorage({
destination: function(req, file, cb) {
cb(null, 'uploads/'); 
},
filename: function(req, file, cb) {
cb(null, file.originalname); 
},
});

const upload = multer({ storage: fileStorage });

app.post('/uploads', upload.single('myFile'), (req, res) => {
console.log(req.file);


req.file.mimetype = mime.lookup(req.file.originalname);


res.sendFile(path.join(__dirname, 'file-uploaded.html'));
});


app.get('/file-upload', (req, res) => {
res.sendFile(__dirname + '/' + 'file-upload.html');
});

app.listen(4000, () => {
console.log('Server is running on http://localhost:4000');
});
