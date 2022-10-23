if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

//ROUTERS
const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");

mongoose
	.connect("mongodb://localhost:27017/cocForum", {
		dbName: "dupa",
		//useNewUrlPraser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Connected to MongoDB"))
	.catch((error) => console.log(error));

app.use(express.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use("/", registerRouter);
app.use("/", loginRouter);

app.listen(port, () => console.log("serwer smiga gosciu"));
