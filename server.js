if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const user = require("./models/user.js");


//ROUTERS
const registerRouter = require("./routes/register/register");
const loginRouter = require("./routes/login/login");

mongoose
	.connect("mongodb://0.0.0.0:27017/cocForum", {})
	.then(() => console.log("Connected to MongoDB"))
	.catch((error) => console.log(error));

app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
//app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use("/", registerRouter);
app.use("/", loginRouter);
app.get('/users', async (req, res)=>{
	const users = await user.findOne({
		'email': 'dupa@dupa'
	}
	)
	res.json(users)
})
app.listen(port, () => console.log("serwer smiga gosciu"));
