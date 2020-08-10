const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())

const getUserData = require('./controllers/app');

app.get('/', getUserData.getList)
 
app.listen(3002)