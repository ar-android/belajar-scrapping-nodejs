var Scraper = require('./scraper.js');

var scraper = new Scraper({
    baseUrl: 'https://medium.com'
});

scraper.scrape('/@ocittwo', function(err, $) {
  if (err) {
    console.log(err);
    return;
  }

  var name = $('h1.hero-title').text();
  var desc = $('p.hero-description').text();

  var following = $('div.buttonSet--profile > a').map(function() {
    return $(this).text();
  }).get();

  var result = {
  	name: name,
  	desc: desc,
  	following: following[0],
    followers: following[1]
  }

  var json = JSON.stringify(result);
  console.log(json)

});
