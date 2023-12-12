const express = require('express')
const cors = require('cors')
const db = require('./models/index.js')

const app = express()

const PORT = 5001

app.use(express.json())
app.use(cors())

const getall = require('./routes/allproductR.js')
app.use("/api",getall)



app.listen(PORT,()=>{
    console.log(`Server running on port http://localhost:${PORT}`);
})

