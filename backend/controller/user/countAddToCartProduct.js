const addToCardModel = require("../../models/cartProduct")

const countAddToCartProduct = async(req,res)=>{
  try {
    const userId = req.userId

    const count = await addToCardModel.countDocuments({
      userId: userId
    })
    console.log('count',count);
    res.json({
      data: {
        count: count
      },
      message: 'ok',
      error: false,
      success: true,
    })
  } catch (err) {
    res.status(400).json({
      message : err.message || err,
      error:true,
      success: false
    })
  }
}

module.exports = countAddToCartProduct