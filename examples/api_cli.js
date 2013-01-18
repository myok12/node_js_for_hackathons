var querystring = require('querystring');
var str = querystring.stringify({
    'From': '+13474915748',
    'To': '+13473462425',
    'Body' : process.argv[2]
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
        console.log('done.');
        console.log('');
        process.exit(0);
    });
});

twilioReq.end(str);
