var express = require('express');
var app = express();

app.use(express.static('express_server/static'));

app.listen(3000, function () {
  console.log('Commercials site is up and listening on port 3000');
});