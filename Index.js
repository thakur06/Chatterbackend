const express= require('express');
const cors= require('cors');
const DB= require('./Auth/DB');
const EventEmitter = require('events');

const ChatRoute= require('./Routes/ChatRoutes');
const userRoute= require('./Routes/UserRoutes');


const eventEmitter = new EventEmitter();
const app = express();
eventEmitter.setMaxListeners(20);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
DB();

app.use("/chat",ChatRoute);
app.use("/user",userRoute)
const port = 4000;
app.listen(port,(err)=>{
    if (err){
        console.log(err)
    }else {
        console.log(`app listening on port ${port}`)
    }
});