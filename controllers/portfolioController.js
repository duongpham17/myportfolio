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
    const create_portfolio = await Portfolio.create({label: req.body.label, user: req.user.id})

    if(!create_portfolio){
        return next(new appError("Portfolio has no user", 400))
    }

    const portfolio = await getPortfolio(req.user.id)

    res.status(200).json({
        status: "success",
        portfolio
    })
})

exports.deletePortfolio = catchAsync(async(req, res, next) => {
    const delete_portfolio = await Portfolio.findByIdAndDelete(req.params.id)

    if(!delete_portfolio){
        return next(new appError("Portfolio does not exist", 401))
    }

    const portfolio = await getPortfolio(req.user.id)

    res.status(200).json({
        status: "success",
        portfolio
    })
})

exports.addAssetToPortfolio = catchAsync(async(req, res, next) => {
    const port_add_asset = await Portfolio.findById(req.params.id)

    if(port_add_asset.portfolio.length >= 20){
        return next (new appError("Max 20 assets", 400))
    }

    port_add_asset.portfolio.push({name: req.body.name, amount: req.body.amount, price: req.body.price})

    await port_add_asset.save()

    const portfolio = await getPortfolio(req.user.id)

    res.status(200).json({
        status: "success",
        portfolio
    })
})

exports.removeAsset = catchAsync(async(req, res, next) => {
    let port_asset = await Portfolio.findById(req.params.portId)

    port_asset.portfolio.find(el => el.id === req.params.id)

    if(!port_asset){
        return next( new appError('asset does not exist', 400))
    }

    const index = port_asset.portfolio.indexOf(port_asset.portfolio.find(el => el.id === req.params.id))

    port_asset.portfolio.splice(index, 1)

    await port_asset.save()

    const portfolio = await getPortfolio(req.user.id)

    res.status(200).json({
        status: "success",
        portfolio
    })
})

exports.trackPortfolioValuation = catchAsync(async(req, res, next) => {

    const port = await Portfolio.findByIdAndUpdate(req.params.id, {
        total: req.body.total, days: Date.now()
    })

    if(!port){
        return next(new appError("Portfolio does not exist", 400))
    }

    const portfolio = await getPortfolio(req.user.id)

    res.status(200).json({
        status: "success",
        portfolio
    })
})