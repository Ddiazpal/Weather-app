const request = require('request');

var getWeather = (lat, long, callback) =>{
  request({
    url: `https://api.darksky.net/forecast/b066029454fc92298eee8f0d2dafe41b/${lat},${long}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200){
      callback(undefined, {
        temperature: body.currently.temperature,
        ApparentTemp: body.currently.apparentTemperature
      });
    } else{
      callback('Unable to fetch weather.');
    }
  });
};

module.exports = {
  getWeather
};
