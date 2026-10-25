const express = require('express') //express imported
// create an app 
const app = express()
// create port 
const port = process.env.PORT || 3000;

// cors policy 
const cors = require('cors')
app.use(cors())

app.use(express.json())

// create a default server 
app.get('/', (req,res) => {
    res.send('Server is running')
})

// default user 
const users = [
    {id: 1 , name : 'sazib khan', age : 28, email: 'sazibkhan@gmail.com' },
    {id: 2 , name : 'monika khan', age : 20, email: 'monikakhan@gmail.com' },
    {id: 3 , name : 'anika  khan', age : 15, email: 'anikakhan@gmail.com' },
]


// user api 
app.post('/users',(req,res) => {
    res.send(users)
    // const newUsers = res.body
    // console.log(newUsers)
    console.log("ফ্রন্টএন্ড থেকে আসা ডাটা:", req.body);
})


const post =[
    {id:1 , title:'your post', date: 25}
]

app.get('/posts',(req,res) => {
    res.send(post)
})

app.post('/posts',(req,res) => {
    console.log('post data success', req.body)
})

// app listiner 
app.listen(port,(req,res) => {
  console.log(`server is running ${port}`)
})