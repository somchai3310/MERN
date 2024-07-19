async function allUsers(req,res){
  try {
     console.log('userid', req.userId);
  } catch (err) {
    res.status(400).json({
      message : err.meassage || err,
      error:true,
      success: false
    })
  }
}

module.exports = allUsers