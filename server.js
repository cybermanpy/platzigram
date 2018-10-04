var express = require('express');
var multer = require('multer');
var ext = require('file-extension');
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var expressSession = require('express-session')
var passport = require('passport')
var platzigram = require('platzigram-client')
var config = require('./config')

var client = platzigram.createClient(config.client);

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, + Date.now() + '.' + ext(file.originalname))
  }
})

var upload = multer({ storage: storage }).single('picture')

var app = express();

app.set(bodyParser.json());
app.set(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressSession({
  secret: config.secret,
  resave: false,
  saveUnitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('index', { title: 'Platzigram'} )
})

app.get('/signup', function(req, res){
    res.render('index', { title: 'Platzigram - Signup'})
})

app.post('/signup', function(req, res){
  var user = req.body;
  // console.log(user);
  debugger;
  client.saveUser(user, function (err, usr) {
    if (err) {
      // console.log(err.message);
      debugger;
      return res.status(500).send(err.message);
    }

    res.redirect('/signin');
  })
});

app.get('/signin', function(req, res){
    res.render('index', { title: 'Platzigram - Signin'})
})

app.get('/api/pictures', function (req, res){
    var pictures = [
        {
            user: {
               username: 'cyberman',
               // avatar: 'avatar.jpg'
               avatar: 'https://pbs.twimg.com/profile_images/425812903590383616/U-AaaWik_bigger.jpeg'
            },
            url: 'office.jpg',
            likes: 0,
            liked: false,
            createdAt: new Date().setDate(new Date().getDate() - 10)
        },
        {
            user: {
               username: 'cyberman',
               // avatar: 'avatar.jpg'
               avatar: 'https://pbs.twimg.com/profile_images/425812903590383616/U-AaaWik_bigger.jpeg'
            },
            url: 'office.jpg',
            likes: 1,
            liked: true,
            createAt: new Date()
        }
    ];
    setTimeout(() => res.send(pictures), 2000);
});

app.get('/api/user/:username', function(req, res){
  const user = {
    username: 'cyberman',
    avatar: 'https://pbs.twimg.com/profile_images/425812903590383616/U-AaaWik_400x400.jpeg',
    pictures: [
      {
        id: 1,
        src: 'office.jpg',
        likes: 3,
      },
      {
        id: 2,
        src: 'office.jpg',
        likes: 2
      },
      {
        id: 3,
        src: 'office.jpg',
        likes: 10
      },
      {
        id: 4,
        src: 'office.jpg',
        likes: 31
      },
      {
        id: 5,
        src: 'office.jpg',
        likes: 25
      },
      {
        id: 6,
        src: 'office.jpg',
        likes: 0
      }
    ]
  }
  res.send(user);
})

app.get('/:username', function(req, res){
  res.render('index', { title: `Platzigram - ${req.params.username}` })
});

app.get('/:username/:id', function(req, res){
  res.render('index', { title: `Platzigram - ${req.params.username}` })
});

app.post('/api/pictures', function(req, res){
    upload(req, res, function(err){
        if (err){
            return res.send(500, "Error uploading file");
        }
        res.send('File uploaded');
    })
});

app.listen(3000, function(err){
    if (err) return console.log('Hubo un error'), process.exit(1);
    console.log('Platzigram escuchando en el puerto 3000');
})