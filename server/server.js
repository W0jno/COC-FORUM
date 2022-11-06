const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const dbCon = require("./databaseConnection");
dotenv.config();

app.use(
	cors({
		credentials: true,
		origin: (_, callback) => {
			callback(null, true);
		},
	})
);
app.use(express.json());

//ROUTERS

const registerRouter = require("./routes/register/register");
const loginRouter = require("./routes/login/login");

//CONNECTION TO DATABASE

dbCon();

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
