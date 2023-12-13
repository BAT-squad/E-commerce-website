const postBrandM = require("../models/brands.models")

const postBrandC = (req, res) => {
    postBrandM(req.body, (err, result) => {
       if (err) {
        console.error(err)
       }else{
        res.json(result)
       }
    })
}

module.exports = postBrandC