const http=require("http")
const fs=require("fs")
const url=require("url")
const queryString=require("querystring")
const PORT=3000
const {MongoClient,ObjectId}=require("mongodb")
const {error}=require("console")
const client=new MongoClient("mongodb://127.0.0.1:27017/")

const app=http.createServer(async (req,res)=>{
    const db=client.db("employee")
    const collection=db.collection("details")
    const {pathname}=url.parse(req.url)
    console.log(pathname);
    if(pathname=="/"){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end(fs.readFileSync("../frontend/index.html"))
    }
    else if(pathname=="/css/index.css"){
        res.writeHead(200,{"Content-Type":"text/css"})
        res.end(fs.readFileSync("../frontend/css/index.css"))
    }
    else if(pathname=="/images/logo.png"){
        res.writeHead(200,{"Content-Type":"text/png"})
        res.end(fs.readFileSync("../frontend/images/logo.png"))
    }
    else if(pathname=="/pages/addemployee.html"){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end(fs.readFileSync("../frontend/pages/addemployee.html"))   
    }
    else if(pathname=="/js/add.js"){
        res.writeHead(200,{"Content-Type":"text/js"})
        res.end(fs.readFileSync("../frontend/js/add.js"))   
    }
    else if(pathname=="/css/index.css"){
        res.writeHead(200,{"Content-Type":"text/css"})
        res.end(fs.readFileSync("../frontend/css/index.css"))
    }
    else if(pathname=="/index.html"){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end(fs.readFileSync("../frontend/index.html"))
    }
    else if(pathname=="/pages/edit.html"){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end(fs.readFileSync("../frontend/pages/edit.html"))   
    }
    else if(pathname=="/js/index.js"){
        res.writeHead(200,{"Content-Type":"text/js"})
        res.end(fs.readFileSync("../frontend/js/index.js"))   
    }
    else if(pathname=="/submit" &&req.method=="POST"){
        let body=""
        req.on("data",(chunks)=>{
            body+=chunks.toString()
            console.log(body);
        })
        req.on("end",async()=>{
            const formdata=queryString.parse(body)
            console.log(formdata);
            collection.insertOne(formdata).then(()=>{
                console.log("successfully inserted");
                
            }).catch((error)=>{
                console.log("failed");
                
            })
            
        })
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end(fs.readFileSync("../frontend/index.html"))
    }
    if(pathname=="/getemp"&&req.method=="GET"){
        const data=await collection.find().toArray()
        console.log("hai");
        
        console.log(data);
        console.log(data._id);
        
        const jsondata=JSON.stringify(data)
        console.log(jsondata);
        res.writeHead(200,{"Content-Type":"text/json"})
    }

})

client.connect().then((msg)=>{
    console.log("database connected");
    
    app.listen(PORT,()=>{
        console.log("server Created");
    })
    
}).catch((error)=>{
    console.log("ERROR :::"+error);
    
})