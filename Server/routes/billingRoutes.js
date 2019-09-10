const kyes = require('../config/keys');
const stripe = require("stripe")(kyes.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
app.post ('/api/stripe',requireLogin,async (req,res) => {
   
    let charge = await stripe.charges.create({
        amount: 500,
        currency: "usd",
        source: req.body.id, // obtained with Stripe.js
        description: "Charge for 5 credit"
      });
req.user.credits+=5;
const user =await req.user.save();
res.send(user);
})


};