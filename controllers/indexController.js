const Student = require('../models/studentModel')
// homepage 
const { catchAsyncErrors } = require("../middleware/catchAsyncErrors")
const ErrorHandler = require('../utils/ErrorHandler')

module.exports.homepage = catchAsyncErrors((req, res, next) => {
    res.json({ message: "homepage" })
})

module.exports.studentSignUp = catchAsyncErrors(async (req, res, next) => {
    const student = await new Student(req.body).save()

    res.status(200).json(student)

})
module.exports.studentSignIn = catchAsyncErrors(async (req, res, next) => {
    const student = await Student.findOne({ email: req.body.email }).select("+password").exec()
    if (!student) return next(new ErrorHandler("Student Not Found with this email address!", 404))


    const isMatch = student.comparepassword(req.body.password)
    if (!isMatch) return next(new ErrorHandler("Wrong Credentials", 401));
    res.json(student)
})
module.exports.studentSignOut = catchAsyncErrors(async (req, res, next) => {
})

