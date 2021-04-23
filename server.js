const express = require('express')
const path= require('path')
require('./model/loadScenes')

const ordersRoutes = require('./routes/orders')
const waiterRoutes = require('./routes/waiter')

const app = express()

const port = process.env.PORT || 3000;

app.use('/api/orders', ordersRoutes);
app.use('/api/waiter', waiterRoutes);

app.get('/', (req, res) => {
    res.redirect('waiter/intro')
    
})

app.listen(port, () => {
  console.log(`Game server listening at http://localhost:${port}`)
})