const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const loggerRoutes = require("./routes/loggerRoutes");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(cors());
const port = process.env.PORT;

mongoose.connect(process.env.MONGODB_URI);

app.use(bodyParser.json());

app.use("/user", userRoutes);
app.use("/logger", loggerRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
