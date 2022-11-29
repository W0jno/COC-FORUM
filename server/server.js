const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");

const dotenv = require("dotenv");
const dbCon = require("./databaseConnection");
const auth = require("./routes/login/loginFunc");
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
app.use(cookieParser());

//ROUTERS

const registerRouter = require("./routes/register/register");
const loginRouter = require("./routes/login/login");
const postRouter = require("./routes/post/post");
const showPostRouter = require("./routes/post/showPost");
const showCommentRouter = require("./routes/post/comment");
const selectPost = require("./routes/post/selectPost");

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
app.use("/", postRouter);
app.use("/", showPostRouter);
app.use("/", showCommentRouter);
app.use("/", selectPost )
app.get("/api/users", auth.authenticate, (req, res) => {
	res.send("huej");
});

app.listen(port, () => console.log("serwer smiga gosciu"));
