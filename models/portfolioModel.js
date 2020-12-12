const mongoose = require('mongoose')

const portfolioSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
    },
    label: {
        type: String,
    },
    portfolio:[{
        name: String,
        amount: Number,
        default: ""
    }],
    total: {
        type: Number,
        default: 0
    },
    days:{
        type: Date,
        default: Date.now()
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
})

const Portfolio = mongoose.model('Portfolio', portfolioSchema)
module.exports = Portfolio