const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

//ROUTERS

const registerRouter = require("./routes/register/register");
const loginRouter = require("./routes/login/login");

//CONNECTION TO DATABASE

mongoose
	.connect(process.env.MONGO_URI, {})
	.then(() => console.log("Connected to MongoDB"))
	.catch((error) => console.log(error));

//SERVER CONFIGURATION

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(
	express.urlencoded({ extended: true }),
	express.static(path.join(__dirname, "public"))
);

app.use("/", registerRouter);
app.use("/", loginRouter);

app.listen(port, () => console.log("serwer smiga gosciu"));
