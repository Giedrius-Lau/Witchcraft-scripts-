var amb = '=AMB_LT';
var urlStart = 'https://go3.lt';


var getJSON = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};


var urlForTenant = '/api/subscribers/detail?platform=BROWSER';
var urlForActiveSubscriber = '/api/subscribers/payments?platform=BROWSER&lang=EN&tenant=' + amb + '&maxResults=100&channel[]=POSTPAID';

var checkIfUserSubscribed = function () {
    getJSON(urlForTenant, function (err, data) {
        if (err !== null) {
            ga('send', 'event', 'Popup test', 'new user');
            localStorage.setItem('newUser', true);
            console.log(true, data);
        } else {
           console.log(data)

        }
        })
       }

checkIfUserSubscribed()