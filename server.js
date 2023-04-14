const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'nubstew/build')));

app.listen(80, function () {
  console.log('listening on 80')
}); 


app.get('/', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, '/nubstew/build/index.html'));
});