var request = require('request');

var auth = 'apikey:' + require('./apikey.js');

var data = {
    'From': '+13474915748',
    'To': '+13473462425',
    'Body' : process.argv[2]
}
console.log(data);

var host = 'api.twilio.com:443';
var url = 'https://' + auth + '@' + host + '/2010-04-01/Accounts/ACb6aba5852a93667ce3545d28fe8c98cf/SMS/Messages.json';

var processData = function (e, r, body) {
    console.log(body);
    console.log('done.');
};

request.post({url: url, form: data, headers: {auth: auth} }, processData);
console.log('Msg send. Receiving...');
