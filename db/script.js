conn = new Mongo("mongodb+srv://root:root00@cluster0.mq5hg.mongodb.net/harvestApp?retryWrites=true&w=majority")
db = conn.getDB("harvestApp")
start = new Date("2021-01-01").getFullYear()
db.demands.aggregate([
    {
        $match:{
            "demand_year":start
        }
    },{
        $project:{
            _id:0,
            province:1,
            vegetable_type:1,
            demand_amount:1,
        }
    }
])
