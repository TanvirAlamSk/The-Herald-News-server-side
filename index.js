const express = require('express')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
const news_catagory = require('./data/categories.json')

app.get('/', (request, responce) => {
    responce.send("server running successful")
})


app.get("/news-catagory", (request, responce) => {
    responce.send(news_catagory)
})

app.listen(port, (request, responce) => {
    console.log(`the-herald-newsn on port ${port}`)
})