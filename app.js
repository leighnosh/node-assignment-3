const path = require('path');

const express = require('express');

const app = express();

const indexRoutes = require('./routes/index.js');
const usersRoutes = require('./routes/users.js');

app.use(express.static(path.join(__dirname, 'public')));

app.use(usersRoutes);
app.use(indexRoutes);

app.listen(3000);
