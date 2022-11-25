import passport from "passport";
import { Database, client } from "../db/connect.js";
import passportLocal from "passport-local";
import bcrypt from "bcrypt";
import session from "express-session";
import App from "../Core/Application.js";
import MongoStore from "connect-mongo";
import ENV from "../Core/HandleEnv.js";
//clientss
var connection;
client.then((res) => {
  connection = res;
});

const options = {
  client: Database.getClient(),
  dbName: ENV.DB_NAME,
  collection: "sessions",
  ttl: 20,
};

App.use(
  session({
    secret: "veryGood",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create(options),
  })
);

App.use(passport.initialize(undefined));
App.use(passport.session(undefined));
passport.serializeUser(function (user, done) {
  done(null, user._id);
});

// passport.deserializeUser(function(id,done){
passport.deserializeUser(async function (id, done) {
  const result = await Database.db.collection("users").findOne({ _id: id });
  if (result) done(null, result);
  else done(null, false);
});
//Use the express router
const LocalStrategy = passportLocal.Strategy;
passport.use(
  "local",
  new LocalStrategy({}, function (username, password, done) {
    console.log("email", username);
    console.log("password", password);
    const collection = Database.db.collection("users");
    collection.findOne({ username: username }, function (err, user) {
      console.log(user);
      if (err) return done(err);
      if (!user) return done(null, false, { message: "Incorrect username" });
      bcrypt.compare(password, user.password, function (err, res) {
        if (err) return done(err);
        if (res) return done(null, user);
        else return done(null, false, { message: "Incorrect password" });
      });
    });
  })
);

export { passport };
