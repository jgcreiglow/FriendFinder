var friends = require('../data/friends');

module.exports = function (app) {

    // get my friends
    app.get('/api/friends', function (req, res) {
        res.json (friends);
    });

    // post my friends
    app.post('/api/friends', function (req, res) {
        console.log(req.body)
        var userData = {
            name: req.body.name,
            photo: req.body.photo,
            scores: req.body['scores[]']
        };
        console.log(userData);
        //loop through all friends 
        let bff = friends.reduce(function (bff, friend, index) {
           
            let difference = userData.scores.reduce(function(memo, score, index2){
                return memo +  Math.abs(score - friends[index].scores[index2])
            }, 0);

           if (bff === null || bff.difference > difference){
               return { 
                    name: friend.name,
                    photo: friend.photo,
                    scores: friend.scores,
                    difference: difference
                }; 
            }

            return bff;
        }, null);
       
        friends.push(userData);

        res.json(bff);
    });


};
