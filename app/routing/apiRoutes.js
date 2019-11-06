var path = require("path");
const friendsArray = require(path.join(__dirname, "../data/friends.js"));

//Attempting to export the function the way it was done in Hot Restaurant
apiRoutes = function (app) {

    //Trying out the arrow
    app.get("/api/friends", (req, res) => {
        return res.json(friendsArray);

    });

    app.post("/api/friends", function (req, res) {
        let seventhFriendScores = req.body.scores;
        var scoresArr = [];
        var bestMatch = 0;
        //I wanted to use MAP or something, but time got the best of me
        for (var i = 0; i < friendsArray.length; i++) {
            var scoreDiff = 0;
            for (var j = 0; j < seventhFriendScores.length; j++) {
                scoreDiff += (Math.abs(parseInt(friendsArray[i].scores[j]) - parseInt(seventhFriendScores)))
            }
            scoresArr.push(scoreDiff);
        }
        for (var i=0; i<scoresArr.length; i++){
            if (scoresArr[i] <=scoresArr[bestMatch]){
                bestMatch=i;
            }
        }

        let userFriendMatch=friendsArray[bestMatch];
        res.json(userFriendMatch);
        console.log (req.body);
        //Push user to friends array AFTER comparison or else matches themselves
        friendsArray.push(req.body);
        scoresArr=[];
    })
}

module.exports = apiRoutes;