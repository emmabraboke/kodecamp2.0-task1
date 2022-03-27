const http= require("http")
const {readFileSync} = require("fs")

const about = readFileSync("./pages/about.html","utf-8")
const home = readFileSync("./pages/home.html","utf-8")
const contact = readFileSync("./pages/contact.html","utf-8")
const notFound = readFileSync("./pages/notFound.html","utf-8")
const style = readFileSync("./app.css","utf-8")

const server= http.createServer((req,res)=>{

    if(req.url === "/"){
    res.writeHead(200,{
        "Content-Type" : "text/html"
    })
    res.end(home)
    }

    else if (req.url === "/about"){
        res.writeHead(200,{
            "Content-Type" : "text/html"
        })
        res.end(about)
    }

    else if (req.url === "/contact"){
        res.writeHead(200,{
            "Content-Type" : "text/html"
        })
        res.end(contact)
    }

    else if (req.url === "/app.css"){
        res.writeHead(200,{
            "Content-Type" : "text/css"
        })
        res.end(style)
    }
    
    else {
        res.writeHead(404,{
            "Content-Type" : "text/html"
        })
        res.end(notFound)
    }

    
})


const PORT = 5000

server.listen(PORT, ()=>{
    console.log(`server is listening on ${PORT}...`)
})