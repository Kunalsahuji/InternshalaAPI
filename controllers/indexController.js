// homepage 

const { catchAsyncErrors } = require("../middleware/catchAsyncErrors")

module.exports.homepage = catchAsyncErrors((req, res, next) => {
    res.json({ message: "homepage" })
})