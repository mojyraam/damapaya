var Transaction = require('../../models/Transaction')

exports.findAll = (data, prod) => {
    Transaction.find({ 
        email: data
    }).exec(prod)
}

exports.findAllAdmin = (prod) => {
    Transaction.find({}).exec(prod)
}

exports.findOne = (id, prod) => {
    Transaction.findOne({_id: id}).exec(prod)
}

exports.save = (data) => {
    var transaction = new Transaction({
        name: data[0],
        totalprice: data[1],
        totalcount: data[2],
        productcode: data[3],
        description: data[4],
        username: data[5],
        address: data[6],
        fname: data[7],
        family: data[8],
        email: data[9],
        phone: data[10],
        tid: data[11],
        tdate: data[12]
    })
    transaction.save()
}

exports.edit = (id, prod) => {
    Transaction.findOne({_id: id}).exec(prod)
}

exports.update = (data) => {
    Transaction.findByIdAndUpdate({ _id: data[0] },
        { $set: 
            { 
                address: data[1], 
                totalprice: data[2],
                totalcount: data[3],
                paymenttype: data[4]
            }
        },
    { new: true }).exec()
}

// exports.delete = (id) => {
//     Transaction.deleteOne({ _id: id }).exec()
// }