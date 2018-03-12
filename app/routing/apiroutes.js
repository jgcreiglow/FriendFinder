var friends = require('../data/friends');

module.exports = function (app) {

    // get my friends
    app.get('/api/friends', function (req, res) {
        res.json (friends);
    });

    // post my friends
    app.post('/api/friends', function (req, res) {
        var user = {
            name: req.body.name,
            photo: req.body.photo,
            scores: req.body.scores
        };

        //loop through all friends 
        let bff = friends.reduce(function (bff, friend, index) {
           
            let difference = user.scores.reduce(function(memo, score, index2){
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
       
        friends.push(user);

        res.json(bff);
    });


};
