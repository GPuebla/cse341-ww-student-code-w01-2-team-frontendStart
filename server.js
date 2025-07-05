//express web server
const express = require('express');
const app = express();
const w1Controllers = require('./controllers/app-week1')
 
app.get('/',w1Controllers.home);

app.get('/1', w1Controllers.one);

app.get('/2', w1Controllers.two);
 
app.listen(process.env.PORT || 3000, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});