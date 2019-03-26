
module.exports = function (app) {
    // Home page
    app.get("/", function (req, res) {
        res.render("home", {});
    });

  //   // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });

};