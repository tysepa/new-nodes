import express from 'express';
import appRoute from'./routes/route.js';
import mongoose from 'mongoose';
import "dotenv/config"

const app = express();

const PORT=process.env.PORT || 5000;


app.use(express.json())
// Router
app.use('/api',appRoute)



// connect database
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_CONNECTION ,
{useNewUrlParser: true},()=>
    console.log("DB connected")
)


app.listen(PORT,()=>console.log(`server run on ${PORT}`))