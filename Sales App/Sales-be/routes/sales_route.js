const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const SalesModel = mongoose.model('SalesModel');


//Post API for adding the product details

router.post('/addsales', (req, res) => {
    const{product_name, product_quantity,  product_amount } = req.body;
    if(!product_name || !product_quantity || !product_amount) {
        res.status(400).json({'error' : 'One or more mandatory fields are empty'});
    }
    SalesModel.findOne({product_name : product_name})
    .then((productInDB) => {
        if(productInDB) {
            res.status(400).json({'error' : 'Product is already added'});
        }

        const product = new SalesModel({product_name, product_quantity, product_amount});
        product.save()
        .then((newproduct) => {
            if(newproduct) {
                res.status(201).json({'result' : 'Product added successfully'})
            }
        })
        .catch((err) => {
            console.log(err)
        })

    })
    .catch((err) => {
        console.log(err)
    })
});


//Get API for getting the top sales

router.get('/top5sales', (req, res) => {
    SalesModel.find()
    .sort({product_quantity : -1})
    .limit(5)
    .then((topsales) => {
        res.json(topsales);
    })
    .catch((err) => {
        console.log(err)
        res.status(500).json({'error' : 'Internal server error'})
    })
    
});


//Get API to get today's total revenue
router.get('/totalrevenue', (req, res) => {
    SalesModel.aggregate([
        {
            $group : {
                _id : null,
                totalRevenue : {$sum : '$product_amount'}
            }
        }
    ])
    .then((result) => {
        const totalRevenue = result[0] ? result[0].totalRevenue : 0;
        res.json(totalRevenue);
    })
    .catch((err) => {
        console.log(err)
    })
    
});




module.exports = router