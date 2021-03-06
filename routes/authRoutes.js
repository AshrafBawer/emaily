const passport = require('passport');

module.exports = (app) => {
    // it forwards the user to google servicies
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    // this time it will redirect back go googleStartegy and run the callback
    app.get('/auth/google/callback', passport.authenticate('google'), (req,res) => {
        res.redirect('/surways');
    });

    app.get('/api/current_user', (req,res) => {
        res.send(req.user);
    })

    app.get('/api/logout', (req,res) => {
        req.logout();
        res.redirect('/');
    })

    app.get('/', (req,res) => {
        res.send({ start: "This is the home page" });
    });
}
