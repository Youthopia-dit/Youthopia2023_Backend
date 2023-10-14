const express = require("express");
const mongoose = require("mongoose");
const app = express();
const headRouter = require("./routes/headRoute");
const authRouter = require("./routes/authRoute");

require("dotenv").config();
const PORT = process.env.PORT;
const cors = require("cors");
const eventRouter = require("./routes/eventRoutes");

const connectDb = function () {
  return mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err));
};

connectDb();

app.use(express.json());
app.use(cors("http://localhost:3000"));
app.use("/a", headRouter);
app.use("/event", eventRouter);
app.use("/auth", authRouter);

app.listen(PORT, "192.168.30.61", () => {
  console.log(`server running on port no ${PORT}!!!!!!`);
});

