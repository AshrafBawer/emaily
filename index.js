const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

// only once require the whole model and then anytime we needed User model
// we can call mongoose.model('users')
// it needs to be before passport.js because passport.js uses it
require('./models/User');
require('./services/passport');

// Setup
const app = express();
mongoose.connect(keys.mongoURI, {useNewUrlParser:true , useUnifiedTopology: true });
app.use(cookieSession({
    maxAge: 30 * 24 * 60* 60* 1000,
    keys: [keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

// Routes
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);