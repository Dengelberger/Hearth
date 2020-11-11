const db = require("./models");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
    passport.use(
        new localStrategy((username, password, done) => {
            db.User.findOne({ email: username }, (err, user) => {
              if (err) throw err;
              if (!user) return done(null, false);
              bcrypt.compare(password, user.password, (err, result) => {
                if (err) throw err;
                if (result === true) {
                  return done(null, user);
                } else {
                  return done(null, false);
                }
              });
            });
          })
    );

    passport.serializeUser((user, cb) => {
        cb(null, user);
    });
    passport.deserializeUser((id, cb) => {
        User.findOne({ _id: id }, (err, user) => {
            const userInformation = {
                email: user.email,
            };
            cb(err, userInformation);
        });
    });
};
