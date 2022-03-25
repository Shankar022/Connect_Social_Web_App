const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const app = express();

const userRouter = require('./routes/userRoutes');
const authRouter = require('./routes/authRoutes')


// MIDDLEWARE
app.use(express.json());
app.use(helmet());
app.use(morgan('common'))

// ROUTES
app.use('/api/v1/users',userRouter);
app.use('/api/v1/auth',authRouter);

module.exports = app;