const requireLogin = require('../middlewares/requireLogin');
const minCredits = require('../middlewares/minCredits');
const mongoose = require('mongoose');
const Survey= mongoose.model('surveys');
module.exports = (app) => {
app.post('/api/surveys',requireLogin,minCredits,(req,res)=>{

    const {title,subject,body,recipients} = req.body;

const Survey = new Survey({
    title,
    subject,
    body,
    recipients:recipients.split(',').map(email => ({ email: email.trim() })),
    _user:req.user.id,
    dateSent:Date.now()
})

})



}