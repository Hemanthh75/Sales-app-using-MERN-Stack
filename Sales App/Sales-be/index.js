const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;
const mongoose = require('mongoose');
const {MONGODB_URL} = require('./config');

mongoose.connect(MONGODB_URL);

mongoose.connection.on('connected', () => {
    console.log('DB connected successfully');
});

mongoose.connection.on('error', () => {
    console.log('Some error while connecting to DB')
});


app.use(express.json());
app.use(cors());

require('./models/user_model');
require('./models/sales_model');

app.use(require('./routes/user_route'));
app.use(require('./routes/sales_route'));


app.listen(PORT, () => {
    console.log(`Server has started in the port: ${PORT}`);
});