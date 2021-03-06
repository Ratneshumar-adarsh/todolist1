const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");


const app = express();
app.set("view engine", "ejs");
let items = ["buy food", "cook food", "eat food"];
let workitems = [];
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("Public"));
app.get("/", function (req, res) {
      let day = date.getdate();
      res.render("list", { listtitle: day, newitems: items });
});

app.post("/", function (req, res) {
      let item = req.body.newitemto;
      if (req.body.list === "work") {
            workitems.push(item)
            res.redirect("/work");
      }
      else {
            items.push(item);
            res.redirect("/")
      }



});

app.get("/work", function (req, res) {
      res.render("list", { listtitle: "work list", newitems: workitems });
});
// app.post("/work", function (req, res) {
//       let item = req.body.newitemto;
//       workitems.push(item);
//       res.redirect("/work");
// });



app.get("/about", function (req, res) {
      res.render("about");
});

app.listen(3000, function () {
      console.log("server is running at 3000");
})