var path = require("path");
var friendsArray = require(path.join(__dirname, "../data/friends.js"));

//Attempting to export the function the way it was done in Hot Restaurant
apiRoutes =function(app) {


app.get("/api/friends", function(req, res){
    return res.json(friendsArray);

});

app.post("/api/friends", function(req, res) {
    let seventhFriend= req.body;
    let 
})
}

module.exports =apiRoutes;