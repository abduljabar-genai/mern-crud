const http=require('http')


const server=http.createServer((req,res)=>{

    if(req.url=='/' && req.method=='GET')
    {
        console.log("Hello World")
        res.end("Hello world")
    }
})

const PORT=3000
server.listen(PORT,()=>{
    console.log("Server is running")
})