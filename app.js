require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
const path = require('path');
const { nextTick } = require('process');
const app = express()
const port = process.env.PORT

mongoose.connect(`mongodb+srv://niveyrojulian5:${process.env.MONGO_DB_PASS}@develoment.eczuqsz.mongodb.net/Products?retryWrites=true&w=majority`)
    .then( (result) => {
    app.listen(port, () => {
        console.log(`Aplicacion esta escuchando en puerto: ${port}`)
      })
    console.log('Conexion exitosa a la Base de Datos')
    })
    .catch( (err) => console.log(err));

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    price: Number,
},
{ timestamps: true }
)

const Product = mongoose.model('Product', productSchema)

app.use(express.json())

app.post('/api/v1/products', (req, res, next) => {
    const newProduct = new Product({
        name: req.body.name,
        price: req.body.price
    })
    newProduct
    .save().
    then( result => {
        res.status(201).json({ ok:true })
    })
    .catch((err) => console.log(err))
})

app.use(express.static(path.join(__dirname, 'public')))



