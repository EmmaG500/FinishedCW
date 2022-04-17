const Datastore = require("nedb");
const bcrypt = require('bcrypt');
const saltRounds = 10;

class UserDAO {
    constructor(dbFilePath) {
        if (dbFilePath) {
            //embedded
            this.db = new Datastore({ filename: dbFilePath,
            autoload: true });
        } else {
            //in memory
            this.db = new Datastore();
        }
    }
    // password is bcrypt of password
    init() {
        this.db.insert({
            user: 'Molly.Ringwald',
            password:
            '$2a$12$tDOFFvGg5OoN8Xn0Fw/3Ce6Z3xKs184IuArquwDDa0lFN9uIidx1u'
        });
        this.db.insert({
            user: 'Jon.Snow',
            password: '$2a$12$tDOFFvGg5OoN8Xn0Fw/3Ce6Z3xKs184IuArquwDDa0lFN9uIidx1u'
        });
        return this;
    }
    create(username, password) {
        const that = this;
        bcrypt.hash(password, saltRounds).then(function(hash) {
            var entry = {
                user: username,
                password: hash,
            };
            that.db.insert(entry, function (err) {
            if (err) {
            console.log("Can't insert user: ", username);
            }
            });
        });
    }
    lookup(user, cb) {
        this.db.find({'user': user}, function (err, entries) {
        if (err) {
            return cb(null, null);
        } else {
            if (entries.length == 0) {
                return cb(null, null);
            }
                return cb(null, entries[0]);
            }
        });
    }
}
const dao = new UserDAO();
dao.init();

module.exports = dao;