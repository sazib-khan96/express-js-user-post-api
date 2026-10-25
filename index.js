const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
app.use(express.json())
const cors = require('cors')
app.use(cors())

app.get('/',(req,res) => {
    res.send(users)
})


app.post('/',(req,res)=>{
    const data = req.body
    console.log('server hitting', data)
})
const users = [
    {name: 'sazib khan', class: 14, roll: 25 },
    {name: 'sazib  and khan', class: 14, roll: 20 },
    {name: ' khan', class: 14, roll: 50 },
    {name: 'sazib ', class: 14, roll: 205 }
]
let products = []
app.post('/products',(req,res) =>{
    const newProducts = req.body
    console.log(newProducts)
    products.push(newProducts)

})

app.get('/products',(req,res) => {
    res.json(products)
})


app.listen(port, ()=> {
    console.log(`swrver is running ${port}`)
})