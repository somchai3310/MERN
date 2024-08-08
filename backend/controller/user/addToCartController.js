const addToCartModel = require("../../models/cartProduct");

const addToCardController = async (req, res) => {
  try {
    const { productId } = req?.body;
    const currentUser = req.userId;

    const isProductAvailable = await addToCartModel.findOne({ productId,userId: currentUser });

    console.log('isProductAvailable',isProductAvailable);
    if (isProductAvailable) {
      return res.json({
        message: "Already exits in Add to cart",
        success: false,
        error: true,
      });
    }

    const payload = {
      productId: productId,
      quantify: 1,
      userId: currentUser,
    };

    const newAddToCart = await addToCartModel(payload);
    const saveProduct = await newAddToCart.save();

    return res.json({
      data: saveProduct,
      message: "Product Added in cart",
      success: true,
      error: false,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = addToCardController