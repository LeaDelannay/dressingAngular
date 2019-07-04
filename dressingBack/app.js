var createError = require('http-errors');
var express = require('express');
var path = require('path');
var fs = require("fs"); //filesystem, coeur de nodejs, si j'ai besoin de lire et écrire dans un fichier
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session'); // importe la session après avoir installé via le terminal


const fileUpload = require('express-fileupload'); //upload

var indexRouter = require('./routes/index');

var brandsRouter = require('./routes/brands');
var categoriesRouter = require('./routes/categories');
var clothesRouter = require('./routes/clothes');
var colorsRouter = require('./routes/colors');
var featuresRouter = require('./routes/features');
var notesRouter = require('./routes/notes');
var occasionsRouter = require('./routes/occasions');
var uploadRouter = require('./routes/upload.js'); //upload images
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');

//gestion de passport
var passport = require('passport'); //doit être déclaré avant l'appel à cette librairie
var LocalStrategy = require('passport-local').Strategy;

var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;

var app = express();


//serial user passport
passport.serializeUser(function (user, done) {
   done(null, user);
});

passport.deserializeUser(function (user, done) {
   done(null, user);
});

//setup passport Jwt
var opts = {
   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
   secretOrKey: 'secret'
};

passport.use(new JwtStrategy(opts,
   function (jwt_payload, done) {
      //traitement
      //TODO récupération du user !!
      return done(null, {
            "id": "roro",
            "identifiant": "roro",
            "firstname": "roro",
            "lastname": "elouard",
            "password": "roro123",
            "profil": "user"
         });
   }
));

//setup passport local
passport.use(new LocalStrategy(
   function (username, password, done) {
      //recherche de l'utilisateur dans le répertoire data
      var pathEtNomFichierUtilisateur = path.join(__dirname, 'data', username + '.json');
      console.log(pathEtNomFichierUtilisateur);

      //test si fichier existe
      fs.exists(pathEtNomFichierUtilisateur, (response) => { //si le fichier existe (nomfichier, callback)
         if (!response) {
            //retourne utilisateur non trouvé
            return done(null, false, {
               message: 'Incorrect username.'
            });
         }
         //lecture du fichier
         fs.readFile(pathEtNomFichierUtilisateur, (err, dataDuFichier) => {
            if (err) {
               return done(null, false, {
                  message: 'System problem.'
               });
            }
            //transformation du texte récupéré du fichier en json
            var objRead = JSON.parse(dataDuFichier);
            //teste si password correct
            if (objRead.password === password) {
               return done(null, objRead); //c'est ok (Login)
            } else {
               return done(null, false, {
                  message: 'Username problem.'
               }); //ce n'est pas ok
            }
         });
      });

      /* User.findOne({ username: username }, function(err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      }); */ //fin de la recherche dans la base
   } //fin de la fonction d'autentification
));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
   secret: 'webdev'
})); //c'est ce qui sert à signer le jeton

app.use(express.static(path.join(__dirname, 'public')));

//mise en place du passport dans le middleware
app.use(passport.initialize()); //moteur de passport
app.use(passport.session()); //gestionnaire de session de passport

app.use(fileUpload());

//paramétrage permettant d'éviter l'erreur CORS lorsque Angular tente d'accéder à NodeJs
app.use(function(req, res, next){
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.header("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE,OPTIONS");
   next();
});

app.use('/', indexRouter); //route quand on ne demande aucune page
app.use('/api/brands', brandsRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/clothes', clothesRouter);
app.use('/api/colors', colorsRouter);
app.use('/api/features', featuresRouter);
app.use('/api/notes', notesRouter);
app.use('/api/occasions', occasionsRouter);
app.use('/api/upload', uploadRouter); //upload
app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter); //route quand on demande la page login

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
