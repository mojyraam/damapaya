var Disel = require('../models/Product')

exports.findAll = (prod) => {
    Disel.find({}).exec(prod)
}

exports.findOne = (id, prod) => {
    Disel.findOne({_id: id}).exec(prod)
}

exports.save = (data) => {
    var disel = new Disel({
        name: data[0],
        productbranch: data[1],
        producttype: data[2],
        description: data[3],
        specifications1: data[4],
        specifications2: data[5],
        specifications3: data[6],
        specifications4: data[7],
        specifications5: data[8],
        specifications6: data[9],
        specifications7: data[10],
        specifications8: data[11],
        specifications9: data[12],
        specifications10: data[13],
        specifications11: data[14],
        specifications12: data[15],
        specifications13: data[16],
        specifications14: data[17],
        specifications15: data[18],
        producttype: data[19],
        imagea: data[20],
        imageb: data[21],
        imagec: data[22],
        imaged: data[23],
        imagee: data[24]
    })
    disel.save()
}

exports.edit = (id, prod) => {
    Disel.findOne({_id: id}).exec(prod)
}

exports.update = (data) => {
    Disel.findByIdAndUpdate({ _id: data[0] },
        { $set: 
            {
                name: data[1],
                productbranch: data[2],
                producttype: data[3],
                description: data[4],
                specifications1: data[5],
                specifications1: data[6],
                specifications1: data[7],
                specifications1: data[8],
                specifications1: data[9],
                specifications1: data[10],
                specifications1: data[11],
                specifications1: data[12],
                specifications1: data[13],
                specifications1: data[14],
                specifications1: data[15],
                specifications1: data[16],
                specifications1: data[17],
                specifications1: data[18],
                specifications1: data[19],
                imagea: data[20],
                imageb: data[21],
                imagec: data[22],
                imaged: data[23],
                imagee: data[24]
            }
        },
    { new: true }).exec()
}

exports.delete = (id) => {
    //Disel.deleteOne({ _id: id }).exec()
    Disel.findByIdAndUpdate({ _id: data[0] },
        { $set: 
            {
                producttype: 0
            }
        },
    { new: true }).exec()
}