//const { list } = require('mongodb/lib/gridfs/grid_store')
const orders = require('./ordersInMongo')
//const products= require('./model/products')


// orders.createOrders("buttercake", 2);
// orders.createOrders("cakepops", 2);
// orders.createOrders("cookies", 3);

// orders.updateOrders("cakepops", 5) //.then((orders)=>{
       


//orders.deleteOrders("cookies")


orders.listOrders().then((orderList) => {
    console.log(orderList);
})