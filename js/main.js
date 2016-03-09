var zip;
var $userSubReddit;
var $submit = $('#submitSettings');
var $reddit = $('#reddit');
var $form = $('.form');
var count = 0;

// on index load, if userzip or usersubreddit is undefined or null, location.href= 'settings.html'

$submit.on('click',function() {
  localStorage.setItem('userZip', $('#zipcode').val());
  localStorage.setItem('userSubReddit', $('#subreddit').val());
  authenticate();
  count = 0;
})

var authenticate = function(){
  var zipResponse;
  var subResponse;
  var zip = localStorage.getItem('userZip')
  var mykey = config.key;
  var weatherURL = "http://api.wunderground.com/api/" + config.key + "/forecast/q/" + zip + ".json";

  if (localStorage.getItem('userSubReddit') === 'front page'){
    var subRedditURL = "https://www.reddit.com/hot.json";
  }
  else {
    var userSubReddit = localStorage.getItem('userSubReddit');
    var subRedditURL = "https://www.reddit.com/r/" + userSubReddit + ".json";
  }

  $.ajax({
    type: "GET",
    dataType: "json",
    url: weatherURL,
    success: function(data){
      if (data.response.error.type !== null){
        $form.append('<p>Please enter a valid zip code.</p>');
      }
      else {
        zipResponse = response;
        count += 1;
      }
    },
    error: function(response){
      $form.append('<p>Please enter a valid zip code.</p>');
    }
  }).then(function() {
    $.ajax({
      type: "GET",
      dataType: "json",
      url: subRedditURL,
      success: function(data){
        subResponse = data;
        count += 1;
      },
      error: function(){
        $form.append('<p>Please enter a valid subreddit.</p>');
      }
    }).then(function(){
      if (count === 2) {
        location.href= 'index.html';
      }
    })
  })
}
