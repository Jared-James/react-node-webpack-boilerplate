const express = require('express')
const app = express()
const PORT = 3000


app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));

app.get("/", async (req, res) => {
    res.send('hello from index.js')
})


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

