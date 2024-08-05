const productModel = require("../../models/productModel");

const searchProduct = async(req,res)=>{
  try {
    const query = req.query.q

    const regex = new RegExp(query,'i','g')

    const product = await productModel.find({
      "$or" : [
        {
          productName: regex,
        },
        // {
        //   brandName: regex,
        // },
        {
          category: regex,
        },
      ]
    })

    res.json({
      data: product,
      message: 'serach produc list',
      error: false,
      success: true,
    })

    console.log('qqqq ',query);
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = searchProduct