const products = require('../product.json')

const getProducts=(req, res) => {
    const productCount= products.length;
    res.status(200).json({
        count: productCount,
        products: products
    });
}

module.exports={
    getProducts
};