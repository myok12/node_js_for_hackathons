var express = require('express');
var app = express();

app.use(express.static(__dirname + '/..'));

app.get('/', function (req, res) {
    res.redirect('/Presentation.html');
});

console.log('Server listening on port 8080');
var server = app.listen(8080);

var io = require('socket.io').listen(server);

var manager = null;
var lastSlideIndex = -1;
io.sockets.on('connection', function (socket) {
    console.log('got a new connection');

    if (lastSlideIndex > -1) {
        socket.emit('moveToSlide', {slideIndex: lastSlideIndex});
    }

    socket.on('manager', function (data) {
        console.log('somebody is thinking he\'s the manager');
        if (data.password === require('./password')) {
            console.log('and he\'s correct. we have a new manager');
            if (manager) {
                manager.emit('resignManager');
            }
            manager = socket;
            manager.emit('becameManager');
        }
    });

    socket.on('whatSlide', function (data) {
        socket.emit('moveToSlide', {slideIndex: lastSlideIndex});
    });

    socket.on('slideChanged', function (data) {
        console.log('got a slideChanged event');
        var slideIndex = data.slideIndex;
        if (socket === manager) {
            lastSlideIndex = slideIndex;
            console.log('from the manager, broadcasting');
            socket.broadcast.emit('moveToSlide', {slideIndex: slideIndex});
        }
    });
});

