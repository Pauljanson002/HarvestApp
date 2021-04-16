const mongoose = require("mongoose")
const Message = require("./server/models/message.model")
mongoose.connect("mongodb+srv://root:root00@cluster0.mq5hg.mongodb.net/harvestApp?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true}).then(
    ()=>{
        console.log("success")

    }
).catch((err)=>{
    console.log(err)
})

Message.find()

