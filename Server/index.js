
const mongoose = require('mongoose');
const googleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const cookieSession=require('cookie-session');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
mongoose.connect(keys.mongoURI);
require('./models/User');
require('./models/Product');
require('./models/Address');
require('./models/Img');
require('./models/Order');
require('./models/Payment');
require('./models/Shipping');
require('./models/cart');
const passport = require('passport');

app.use(
	cookieSession({
		maxAge:30*24*60*60*1000,
		keys:[keys.cookieKey]
	})
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(passport.initialize());
app.use(passport.session());
app.enable('trust proxy');
require('./services/passport');

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);
require('./routes/productsRoutes')(app);
if (process.env.NODE_ENV === 'production') {
	// Express will serve up production assets
	// like our main.js file, or main.css file!
	app.use(express.static('client/build'));
  
	// Express will serve up the index.html file
	// if it doesn't recognize the route
	const path = require('path');
	app.get('*', (req, res) => {
	  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
  }

    
    
const PORT = process.env.PORT || 5000;
app.listen(PORT);  