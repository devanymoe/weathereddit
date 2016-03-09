var zip;
var $userSubReddit;
var $submit = $('#submitSettings');
var $reddit = $('#reddit');

$submit.on('click',function() {
  localStorage.setItem('userZip', $('#zipcode').val());
  localStorage.setItem('userSubReddit', $('#subreddit').val());
  location.href= 'index.html';
  // if zip is invalid, please try again
  // if subredit is invalid, please try again
  // else, location.href= and run functions
});

// var fetchWeather = function(zip) {
//
// };
//
// var fetchReddit = function(sub) {
//   var subRedditURL;
//   if ($userSubReddit === 'front page') {
//     subRedditURL = "https://www.reddit.com/hot.json";
//   }
//   else {
//     subRedditURL = "https://www.reddit.com/r/" + $userSubReddit + ".json"
//   }
//   $.ajax({
//     type: "GET",
//     dataType: "json",
//     url: subRedditURL
//   }).then(function(data) {
//     $reddit.text(data);
//   });
// };
