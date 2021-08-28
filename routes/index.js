const express=require("express")
const router=express.Router()

router.use('/register',require('./signupRoute'))
router.use('/login',require('./loginRoute'))
router.use('/location',require('./locationRoute'))
router.use('/foodCategory',require('./foodCategoryRoute'))
router.use('/addcard',require('./addTocardRoute'))
router.use('/order',require('./orderRoute'))


module.exports=router