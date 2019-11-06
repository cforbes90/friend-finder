var path = require("path");
htmlRoutes = function (app) {

    app.get("/survey", function(req,res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));

    });
    //wildcard for redirecting everything back to the home page
    app.get("*", function(req,res) {
        res.sendFile(path.join(__dirname, "..public/home.html"));
    });
};

module.exports =htmlRoutes;