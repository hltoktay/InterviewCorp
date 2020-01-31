const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

// Map Global Promise - get rid of warninng
mongoose.Promise = global.Promise;

// Connect to mongoose
mongoose
  .connect("mongodb://localhost/interview", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDb connected"))
  .catch(err => console.log(err));

// Load First Step Model
require("./models/first_step");
const FirstStep = mongoose.model("first_steps");

// Static Folder
app.use(express.static(path.join(__dirname, "public")));

// Handlebars Middleware
app.engine(
  ".hbs",
  exphbs({
    extname: ".hbs",
    defaultLayout: "main",
    partialsDir: path.join(__dirname, "views/partials"),
    layoutsDir: path.join(__dirname, "views/layouts")
  })
);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views"));

// Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Index Route
app.get("/", (req, res) => {
  const title = "Online Interview Platform";
  res.render("index", {
    title: title
  });
});

// About Route
app.get("/about", (req, res) => {
  res.render("about");
});

// Pricing Route
app.get("/pricing", (req, res) => {
  res.render("pricing");
});

// Corparation Route
app.get("/corparation", (req, res) => {
  res.render("corparation");
});

// Contact Route
app.get("/contact", (req, res) => {
  res.render("contact");
});

// Add first step questions
app.get("/first_questions/add", (req, res) => {
  res.render("first_questions/add_first");
});

// User Login
app.get("/login", (req, res) => {
  res.render("users/login");
});

// User Login
app.get("/register", (req, res) => {
  res.render("users/register");
});

// All questions Page
app.get("/all_questions", (req, res) => {
  FirstStep.find({}).then(first_steps => {
    res.render("questions/index", {
      first_steps: first_steps
    });
  });
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running ${port}`);
});
