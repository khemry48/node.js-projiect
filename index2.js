const http = require('http')
const fs = require('fs')

const indexPage = fs.readFileSync(`${__dirname}/wedpages/index.html`,'utf-8')
const productPage = fs.readFileSync(`${__dirname}/wedpages/product.html`,'utf-8')


const server = http.createServer((req,res)=>{
    
    const pathname = req.url
    console.log("url = ",pathname)
    if(pathname==="/"|| pathname==="/home"){
    res.end(indexPage)
    }else if(pathname==="/product"){
        res.end(productPage)
    }else{
        res.writeHead(404)
        res.end("<h1>not Found</h1>")
    }
})
server.listen(8080,'localhost',()=>{
    console.log("start server in port 8080")
})





