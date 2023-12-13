const express = require('express')
const cors = require('cors')
const db = require('./models/index.js')
const app = express()
const productrouter = require('./routes/products.router.js')

const PORT = 5001

app.use(express.json())
app.use(cors())


app.use('/api',productrouter)



app.listen(PORT,()=>{
    console.log(`Server running on port http://localhost:${PORT}`);
})

