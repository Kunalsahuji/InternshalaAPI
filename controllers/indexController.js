const Student = require('../models/studentModel')
const { sendToken } = require('../utils/SendToken')
// homepage 
const { catchAsyncErrors } = require("../middleware/catchAsyncErrors")
const ErrorHandler = require('../utils/ErrorHandler')

module.exports.homepage = catchAsyncErrors((req, res, next) => {

    res.json({ message: "Secure homepage" })
})

module.exports.studentSignUp = catchAsyncErrors(async (req, res, next) => {
    const student = await new Student(req.body).save()
    sendToken(student, 201, res)
})
module.exports.studentSignIn = catchAsyncErrors(async (req, res, next) => {
    const student = await Student.findOne({ email: req.body.email }).select("+password").exec()
    if (!student) return next(new ErrorHandler("Student Not Found with this email address!", 404))


    const isMatch = student.comparepassword(req.body.password)
    if (!isMatch) return next(new ErrorHandler("Wrong Credentials", 401));
    sendToken(student, 200, res)
})

module.exports.currentStudent = catchAsyncErrors(async (req, res, next) => {
    const student = await Student.findById(req.id).exec()
    res.json({ student })
})

module.exports.studentSignOut = catchAsyncErrors(async (req, res, next) => {
    res.clearCookie("token")
    res.json({ message: "Successfully singout!" })
})

