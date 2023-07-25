const express = require('express')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
const news_catagory = require('./data/categories.json')
const allNwes = require("./data/news.json")

app.get('/', (request, responce) => {
    responce.send("server running successful")
})

app.get("/news-category/:id", (request, responce) => {
    const id = request.params.id
    const newses = allNwes.filter((news) => news.category_id == id)
    if (id == 0) {
        responce.send(allNwes)
    } else {
        responce.send(newses)
    }
})

app.get("/news", (request, responce) => {
    responce.send(allNwes)
})

//single news
app.get("/news/:id", (request, responce) => {
    const id = request.params.id
    const eachNews = allNwes.find((report) => report._id == id)
    responce.send(eachNews)
})


app.get("/news-category", (request, responce) => {
    responce.send(news_catagory)
})



app.listen(port, (request, responce) => {
    console.log(`the-herald-newsn on port ${port}`)
})