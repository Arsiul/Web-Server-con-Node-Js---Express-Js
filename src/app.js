const { envs } = require("./config/env")
const { startserver } = require("./server/server")

function main(){
    startserver({
        PORT: envs.PORT,
        PUBLIC_PATH: envs.PUBLIC_PATH
    })
}

(async()=>{
    main()
})()