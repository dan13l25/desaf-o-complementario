import express from "express"
import handlebars from "express-handlebars"
import { Server } from "socket.io"
import mongoose from "mongoose"
import __dirname from './utils.js';
import { productRouter } from "./routes/productRouter.js";

const app = express()
const port = process.env.port || 8080
const  server = app.listen(port, ()=> console.log("servidor operando en puerto", port))


app.set('views',__dirname+'/views')
app.set('view engine', 'handlebars')
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(__dirname+'/public'))
app.engine('handlebars', handlebars.engine())

app.use("/api/products", productRouter)

app.get("/", (req,res) =>{
    res.render("home")
})

const connectMongoDB = async () => {
    const DB_URL = "mongodb+srv://dan13l:dani06011998@cluster0.pm7efvk.mongodb.net/"
    try{
        await mongoose.connect(DB_URL)
        console.log("mongodb conectado")
    }catch(error){
        console.error("No se conecto a mongo", error)
        process.exit()
    }
    }
    
connectMongoDB()


const io = new Server(server)


