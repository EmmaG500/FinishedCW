const Datastore = require("nedb");

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
        //populate users - new functionality for inserting or deleting as it is a public facing website
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
    lookup(user, cb) { // find user
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