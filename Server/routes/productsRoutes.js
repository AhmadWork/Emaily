const mongoose = require('mongoose');
const Product = mongoose.model('products')

module.exports= (app) => {
app.post('/api/products/create', async (req,res)=> {
    let product =await  new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    ).save().then(result => {
        res.status(200).json({
            status: true,
            message: "log added successfully done"
        })
    }) .catch(error => {
            debugger
            console.log(error);
            next(error);
        });

})

app.get('/api/products/:id',  (req, res) => {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
}
);
app.put('/api/products/:id/update',  (req, res) => {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
})

app.delete('/api/products/:id/delete', (req, res) => {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
});

app.get('/api/products/',  (req, res) => {
  Product.find({}, function(err, products) {
    const productsMap = {};

    products.forEach(function(user) {
        productsMap[user._id] = user;
    });

    res.send(productsMap);  
  });
}
);

}