const mongoose = require('mongoose')
const validator = require('validator')

const user = mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
        default : 'user'+Date.now()
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: value => {
            if (!validator.isEmail(value)) {
                throw new Error({error: 'Invalid work Email address'})
            }
        }
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    middleName: {
        type: String,
        required: true,
        trim: true
    },
    role:{
        type: String,
        required: true,
        trim: true
    },
    addedOn : {
        type : Date,
        default : Date.now
    }
})

const business = mongoose.Schema({
    regId: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId, 
		ref: 'User'
    },
    cacId: {
        type: String,
        required: true,
        trim: true,
    },

    address: {
        type: String,
        required: true,
    },
    addedBy: {
        type: mongoose.Schema.Types.ObjectId, 
		ref: 'User'
    },
    addedOn : {
        type : Date,
        default : Date.now
    }
})

const operation = mongoose.Schema({
    operationId:{
        type: String,
        required: true,
        default : 'op'+Date.now(),
        unique: true,
    },
    runBy: {
        type: mongoose.Schema.Types.ObjectId, 
		ref: 'Business',
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId, 
		ref: 'Category',
        required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    contactNumbers: {
        type: [String],
        required: false,
    },
    locations: {
        type: [String],
        required: true
    },
    status:{
        type: String,
        required: true
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OperationProduct'
    }],
    addedBy: {
        type: mongoose.Schema.Types.ObjectId, 
		ref: 'User',
        required: true,
    },
    mediaURLs: [{
        type: String
    }],
    addedOn : {
        type : Date,
        default : Date.now
    }
})

const product = mongoose.Schema({
    productId: {
        type: String,
        required: true,
        unique: true,
        default : 'product'+Date.now()

    },
    name:{
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId, 
		ref: 'Category',
        required: true,
    },
    addedBy: {
        type: mongoose.Schema.Types.ObjectId, 
		ref: 'User',
        required: true,
    },
    addedOn : {
        type : Date,
        default : Date.now
    }
})

const category = mongoose.Schema({
    categoryId:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        default : 'cat'+Date.now()
    },
    name:{
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    addedBy: {
        type: mongoose.Schema.Types.ObjectId, 
		ref: 'User',
        required: true,
    },
    addedOn : {
        type : Date,
        default : Date.now
    }
})

const operationProduct = mongoose.Schema({
    opProductId:{
        type: String,
        required: true,
        unique: true,
        default : ()=>{return('opp'+Date.now())}
    },
    product: {
        type: mongoose.Schema.Types.ObjectId, 
		ref: 'Product',
        required: true,
    },
    operation: {
        type: mongoose.Schema.Types.ObjectId, 
		ref: 'Operation',
        required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    size: {
        type: String,
        trim: true,
    },
    netProductionCapacity: {
        type: String,
        required: true
    },
    costs: {
        type: [String],
    },
    availableQuantity: {
        type: String,
    },
    addedBy: {
        type: mongoose.Schema.Types.ObjectId, 
		ref: 'User',
        required: true,
    },
    addedOn: {
        type : Date,
        default : Date.now
    },
    lastEdited: {
        type : Date,
        default : Date.now
    }
})


module.exports = {
    User : mongoose.model('User', user),
    Business : mongoose.model('Business', business),
    Operation : mongoose.model('Operation', operation),
    Product : mongoose.model('Product', product),
    Category : mongoose.model('Category', category),
    OperationProduct : mongoose.model('OperationProduct', operationProduct),
};

