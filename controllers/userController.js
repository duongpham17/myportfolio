const User = require('../models/userModel');
const {appError, catchAsync} = require('../util/CatchError');

exports.loadUserData = catchAsync(async(req, res, next) => {

    const user = await User.findById(req.user.id)
    
    if(!user){
        return next (new appError("User does not exist.", 400))
    }

    res.status(200).json({
        status: 'success',
        user
    })
})

//let users change login email
exports.updateUserInfo = catchAsync(async (req, res, next) => {
    // 1) Get user from collection
    const user = await User.findById(req.user.id).select('+password')
  
    // 2) Check if POSTed current password is correct
    if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
      return next(new appError('Current Password Does not Match', 401));
    }
  
    // 3) update user information
    user.user = req.body.user;
    user.email = req.body.email;
    user.password = req.body.password;
    await user.save();
  
    res.status(200).json({
        status: 'success',
        user
    })
});