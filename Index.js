const express= require('express');
const cors= require('cors');
const EventEmitter = require('events');

const ChatRoute= require('./Routes/ChatRoutes');



const eventEmitter = new EventEmitter();
const app = express();
eventEmitter.setMaxListeners(20);
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/chat",ChatRoute);
const port = 4000
app.listen(port,(err)=>{
    if (err){
        console.log(err)
    }else {
        console.log(`app listening on port ${port}`)
    }
});