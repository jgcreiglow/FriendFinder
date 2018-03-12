var path = require('path');

module.exports = function(app){

    // go to survey 
    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // go home 
    app.get('/home', function(req,res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // I'm confused, send me home
    app.all('*', function(req, res){
        res.redirect('/home');
    
    });
};
