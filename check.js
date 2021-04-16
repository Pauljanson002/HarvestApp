const mongoose = require("mongoose")
const Demand = require("./server/models/demand.model")
mongoose.connect("mongodb+srv://root:root00@cluster0.mq5hg.mongodb.net/harvestApp?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true}).then(
    ()=>{
        console.log("success")

    }
).catch((err)=>{
    console.log(err)
})

const a = {
    heading:"Question",
    content:"fadfafadfasfda",
    askedBy:"User",
    comments:[
        {
            user:"dfadfaf",
            comment:"dadfad",
            timestamp:"",
        }
    ]
}