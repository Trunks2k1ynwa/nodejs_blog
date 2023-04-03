const Course = require("../models/Course");
const { mutipleMongooseToObject } = require("../../util/mongoose");
class SiteController {
  //[GET]/
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("home", {
          courses: mutipleMongooseToObject(courses),
        });
      })
      .catch(next);
    // res.render("home");
  }
  //[GET]/search
  show(req, res) {
    res.send("NEW Detail");
  }
}
module.exports = new SiteController();
