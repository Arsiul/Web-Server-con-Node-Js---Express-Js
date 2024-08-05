const express = require("express")
const path = require("path")


const startserver = (options)=>{
    const { PORT, PUBLIC_PATH="public"} = options

    const app = express()
    app.use(express.static(PUBLIC_PATH))

    app.get("*",(req,res)=>{
        const indexPath = path.join(__dirname + `../../../${PUBLIC_PATH}/index.html`)
        res.sendFile(indexPath)
    })

    
    
    app.listen(PORT,{
        
    })
}

module.exports={
    startserver
}
