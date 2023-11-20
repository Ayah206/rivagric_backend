const {users, users2, businesses, categories, operations, products, operationProducts} = require('./data')
const {User, Business, Category, Operation, Product, OperationProduct, OperationProductII} = require('./schemas')



// OperationProductII.create({
//     product: '6548dcb8038f51a73ba5297d',
//     productId: '098',
//     description: 'broilers',
//     size: 'medium',
//     netProductionCapacity: '300 chickens per month',
//     availableQuantity: '4000',
//     costs: [ '4000 per chicken', '500 per day old' ],
//     addedBy: '6547c6290f9be1ef00369044',
//     operation: '6548ded3ba4edeadb19087c4'
//   }).then(function(){ 
//     console.log("Data inserted")  // Success 
// }).catch(function(error){ 
//     console.log(error)      // Failure 
// });

// User.insertMany(users2).then(function(){ 
//     console.log("Data inserted")  // Success 
// }).catch(function(error){ 
//     console.log(error)      // Failure 
// });