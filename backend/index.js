import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRouter from './routerss/book_route.js';
import userRouter from './routerss/user_route.js';
import contactRouter from './routerss/contact_route.js';
import cors from 'cors';
const app = express();
//enable http request frontend to backend 
app.use(cors());
dotenv.config();
//for data send  req,body
app.use(express.json());
const port = process.env.PORT || 1102;
const mongoseUrl = process.env.MURL;

app.get("/", (req, res) => {
    res.send("hello");
})

//connt for database
try {
    mongoose.connect(mongoseUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("database connected !")
} catch (error) {
    console.log("error = ", error)
}
app.use("/book", bookRouter);
app.use("/user", userRouter);
app.use("/contact",contactRouter);
app.listen(port, () => {
    console.log(`server is run ! ${port}`)
})