const express = require('express')
const cors = require('cors')
const db = require('./models/index.js')
const userRoute = require('./routes/user.route.js')
const app = express()
const productrouter = require('./routes/products.router.js')
const brandsRoute = require("./routes/brands.route.js")
const basket=require('./routes/basket.js')
const PORT = 5001

app.use(express.json())
app.use(cors())


app.use('/api/products',productrouter)
app.use('/api/user',userRoute)
app.use('/api/brands',brandsRoute)
app.use('/api/basket',basket)





app.listen(PORT,()=>{
    console.log(`Server running on port http://localhost:${PORT}`);
})

