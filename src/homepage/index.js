var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', function (ctx, next) {
    title('Platzigram')
    var main = document.getElementById('main-container')
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
    empty(main).appendChild(template(pictures));
})

// var page = require('page');

// page('/', function(ctx, next){
//     var main = document.getElementById('main-container')
//     main.innerHTML = '<a href="/signup">Signup</a>';
// })