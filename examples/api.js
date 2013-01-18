var express = require('express');
var app = express();
app.use(express.bodyParser());

app.get('/', function (req, res) {
    var str = '<form method="post">';
    str +=  '<textarea name="msg" placeholder="Write your message here"></textarea>';
    str += '<br><input type="submit" value="Send"></form>';
    res.send(str);
});

app.post('/', function (req, res) {
    var querystring = require('querystring');
    var str = querystring.stringify({
        'From': '+13474915748',
        'To': '+13473462425',
        'Body' : req.body.msg
    });
    console.log(str);

    var url = require('url');
    var twilioObj = url.parse('https://api.twilio.com:443/2010-04-01/Accounts/ACb6aba5852a93667ce3545d28fe8c98cf/SMS/Messages.json');
    twilioObj.auth = 'apikey:password';
    twilioObj.method = 'POST';
    twilioObj.headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': str.length
    };

    var https = require('https');
    var twilioReq = https.request(twilioObj, function (twilioRes) {
        console.log('Msg send. Receiving...');
        twilioRes.setEncoding('utf8');
        twilioRes.on('data', function (chunk) {
            console.log(chunk);
        });
        twilioRes.on('end', function () {
            console.log('done');
            console.log('');
            res.redirect('/');
        });
    });

    twilioReq.end(str);
});

app.listen(3000);
console.log('Listening on port 3000');
