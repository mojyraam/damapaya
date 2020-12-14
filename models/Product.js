var mongoose = require('mongoose')

var ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    productbranch: {
        type: String,
        required: true
    },
    producttype: {
        type: Number,
        default: 1
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    specifications1: {
        type: String
    },
    specifications2: {
        type: String
    },
    specifications3: {
        type: String
    },
    specifications4: {
        type: String
    },
    specifications5: {
        type: String
    },
    specifications6: {
        type: String
    },
    specifications7: {
        type: String
    },
    specifications8: {
        type: String
    },
    specifications9: {
        type: String
    },
    specifications10: {
        type: String
    },
    specifications11: {
        type: String
    },
    specifications12: {
        type: String
    },
    specifications13: {
        type: String
    },
    specifications14: {
        type: String
    },
    specifications15: {
        type: String
    },
    imagea: {
        type: String
    },
    imageb: {
        type: String
    },
    imagec: {
        type: String
    },
    imaged: {
        type: String
    },
    imagee: {
        type: String
    }
})


module.exports = mongoose.model('Product', ProductSchema)