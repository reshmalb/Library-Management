 import express from "express";
 import mongoose from "mongoose";
 import cors from "cors";
 import dotenv from "dotenv";
 import authRoutes from "./routes/auth.js";
 import userRoutes from "./routes/users.js";
 import bookRoutes from "./routes/books.js";
 import transactionRoutes from "./routes/transactions.js";
 import categoryRoutes from "./routes/categories.js";
 import assignment from "./routes/Assignments.js";
 import attendance from "./routes/Attendance.js";
 import dailyreport from "./routes/Dailyreport.js";


 import exams from "./routes/Exams.js";
 import examschedule from "./routes/Examschedule.js";
 import fee from "./routes/Fee.js"
 import homework from "./routes/Homework.js";
 import leavereport from "./routes/Leavereport.js";
 import markcard from "./routes/Markcard.js";
  import notice from "./routes/Notice.js";

/* App Config */
dotenv.config();
const app = express();
const port = process.env.PORT || 4000;


/* MongoDB connection */

// const mongoconnection= async()=>{
 mongoose.connect(
    process.env.MONGO_URL,
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log("MONGODB CONNECTED");
    }
  ); 
// }
//  mongoconnection();

/* Middlewares */
app.use(express.json());
app.use(cors());

/* API Routes */
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/categories", categoryRoutes);

app.use("/api/assignments",assignment);
app.use("/api/attendance",attendance);
app.use("/api/dailyreport",dailyreport);
app.use("/api/exam",exams);
 app.use("/api/examschedule",examschedule);
app.use("/api/fee",fee);
app.use("/api/homework",homework);
 app.use("/api/leavereport",leavereport);
  app.use("/api/markcard",markcard);
 app.use("/api/notice",notice);


app.get("/", (req, res) => {
  res.status(200).send("Welcome to LibraryApp");
});

/* Port Listening In */
app.listen(port, () => {
  console.log(`Server is running in PORT ${port}`);
});
