const express = require('express');
const app = express();
const userRouter = require('./routers/userRoute');
// const packageRouter = require('./routers/packageRouter')


app.use(express.json());

const packageRouter = require('./routers/packageRouter')

app.use('/api/v1/pakages',packageRouter);
app.use('/api/v1/users',userRouter);

module.exports = app;