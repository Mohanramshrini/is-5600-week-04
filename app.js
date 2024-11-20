const fs = require('fs').promises
const path = require('path')
const express = require('express')
const api = require('./api')
const middleware = require('./middleware')
const bodyParser = require('body-parser')

// Set the port
const port = process.env.PORT || 3000
@@ -9,31 +10,15 @@ const app = express()

// Register the public directory
app.use(express.static(__dirname + '/public'));

// register the routes
app.get('/products', listProducts)
app.get('/', handleRoot);
app.use(middleware.cors)
app.use(bodyParser.json())
app.get('/products', api.listProducts)
app.get('/', api.handleRoot);
app.get('/products/:id', api.getProduct)
app.post('/products', api.createProduct)
app.delete('/products/:id', api.deleteProduct);
app.put('/products/:id', api.updateProduct);
app.use(middleware.notFound)
app.use(middleware.handleError)