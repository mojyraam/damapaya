const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

const User = require('../models/User')

module.exports = function(passport) {
    passport.use(
        new localStrategy({ usernameField: 'email' }, (email, password, done) => {
            // Match user
            User.findOne({ email: email })
                .then(user => {
                if(!user) {
                    return done(null, false, { message: 'این ایمیل ثبت نام نشده' })
                }

                // Match password
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if(err) throw err;
                    if(isMatch) {
                        return done(null, user)
                    } else {
                        return done(null, false, { message: 'کلمه عبور نادرست' })
                    }
                })
            }).catch(err => console.log(err))
        })
    )

    passport.serializeUser((user, done) => {
        done(null, user.id);
    })
    
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(null, user);
        })
    })
}