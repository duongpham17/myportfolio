const Portfolio = require('../models/portfolioModel');
const {appError, catchAsync} = require('../util/CatchError');

//return get portfolio
const getPortfolio = (req) => Portfolio.find({user: req})

exports.myPortfolio = catchAsync(async(req, res, next) => {
    const portfolio = await getPortfolio(req.user.id)

    if(!portfolio){
        return next(new appError("Portfolio has no user", 400))
    }

    res.status(200).json({
        status: "success",
        portfolio
    })
})

exports.newPortfolio = catchAsync(async(req, res, next) => {
    const portfolio = await Portfolio.create({label: req.body.label, user: req.user.id})

    if(!portfolio){
        return next(new appError("Portfolio has no user", 400))
    }

    res.status(200).json({
        status: "success",
        portfolio
    })
})

exports.deletePortfolio = catchAsync(async(req, res, next) => {
    const portfolio = await Portfolio.findByIdAndDelete(req.params.id)

    if(!portfolio){
        return next(new appError("Portfolio does not exist", 401))
    }

    res.status(200).json({
        status: "success",
        portfolio
    })
})

exports.addAssetToPortfolio = catchAsync(async(req, res, next) => {
    const portfolio = await Portfolio.findById(req.params.id)

    if(portfolio.portfolio.length >= 20){
        return next (new appError("Max 20 assets", 400))
    }

    portfolio.portfolio.push({name: req.body.name, amount: req.body.amount, price: req.body.price})

    await portfolio.save()

    res.status(200).json({
        status: "success",
        portfolio
    })
})

exports.removeAsset = catchAsync(async(req, res, next) => {
    let portfolio = await Portfolio.findById(req.params.portId)

    portfolio.portfolio.find(el => el.id === req.params.id)

    if(!portfolio){
        return next( new appError('asset does not exist', 400))
    }

    const index = portfolio.portfolio.indexOf(portfolio.portfolio.find(el => el.id === req.params.id))

    portfolio.portfolio.splice(index, 1)

    await portfolio.save()

    res.status(200).json({
        status: "success",
        portfolio
    })
})

exports.trackPortfolioValuation = catchAsync(async(req, res, next) => {

    const portfolio = await Portfolio.findByIdAndUpdate(req.params.id, {
        total: req.body.total, days: Date.now()
    }, {new: true})

    if(!portfolio){
        return next(new appError("Portfolio does not exist", 400))
    }

    res.status(200).json({
        status: "success",
        portfolio
    })
})