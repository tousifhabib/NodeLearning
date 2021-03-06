const path = require('path');
const express = require('express');
const router = express.Router();

const rootDir = require('../util/path');
const adminData = require('./admin');

router.get('/', (req, res, next) => {
    const products = adminData.products;
    //console.log(adminData.products);
    //res.sendFile(path.join(rootDir,'views', 'shop.html'));
    res.render('shop', {prods: products, pageTitle: 'Shop', path: "/"});
});

module.exports = router;