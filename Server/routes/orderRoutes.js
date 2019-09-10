const requireLogin = require('../middlewares/requireLogin');
module.exports =(app) => {
app.get('/checkout',requireLogin,async (req,res) => {
    
})
app.post('/api/order/create',requireLogin,async (req,res) => {
    const cart = req.body.cart;

    const order ={
        _user:req.user,
        _product:req.car

        
    }
})
}