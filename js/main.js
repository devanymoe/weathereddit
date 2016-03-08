// var menubar = require('menubar')
//
// var mb = menubar()
//
// mb.on('ready', function ready () {
//   console.log('app is ready')
//   // your app code here
// })


var $userZip;
var $userSubReddit;
var $submit = $('#submitSettings');
var $reddit = $('#reddit');

$submit.on('click',function() {
  $userZip = $('#zipcode').val();
  $userSubReddit = $('#subreddit').val();
  fetchWeather($userZip);
  fetchReddit($userSubReddit);
  location.href= 'index.html';
  // if zip is invalid, please try again
  // if subredit is invalid, please try again
  // else, location.href= and run functions
});

var fetchWeather = function(zip) {

};

var fetchReddit = function(sub) {
  var subRedditURL;
  if ($userSubReddit === 'front page') {
    subRedditURL = "https://www.reddit.com/hot.json";
  }
  else {
    subRedditURL = "https://www.reddit.com/r/" + $userSubReddit + ".json"
  }
  $.ajax({
    type: "GET",
    dataType: "json",
    url: subRedditURL
  }).then(function(data) {
    // if stickied = true; don't add it to the page
    $reddit.text(data);
  });
};


(function() {
  var $userZip = 98125;
  var $userSubReddit = "trollXChromosomes";
  var subRedditURL = "https://www.reddit.com/r/" + $userSubReddit + ".json";
  $.ajax({
    type: "GET",
    dataType: "json",
    url: subRedditURL
  }).then(function(response) {
    var count = 0;
    for (var i = 0; i < response.data.children.length; i++) {
      var post = response.data.children[i].data
      if (post.stickied === false && count < 10) {
        var $redditPost = $('<div class="post"><div class="postMain"><a class="postURL"><div class="thumbnail"><img></div></a><a class="postURL"><div class="title"></div></a></div><div class="postDetails"><span class="url"></span><a href="permalink"><span class="comments"></span></a><span class="author">by <a class="user"></a></span></div></div>');
        var $postDetails = $('')
        $redditPost.find('.title').text(post.title);
        $redditPost.find('a .postURL').attr('href',post.url);
        $redditPost.find('a .postURL').attr('target','_blank');
        $redditPost.find('.url').text('(' + post.domain + ')');
        $redditPost.find('.comments').text(post.num_comments + ' comments');
        $redditPost.find('.permalink').attr('href', 'https://www.reddit.com' + post.permalink)
        $redditPost.find('.user').text(post.author);
        $redditPost.find('.user').attr('href', 'https://www.reddit.com/user/' + post.author)
        if (post.preview === undefined) {
          $redditPost.find('img').attr('src','images/text.jpg');
        }
        else {
          $redditPost.find('img').attr('src',post.thumbnail);
        }
        $reddit.append($redditPost);
        count += 1;
      }
    }

  });
})()
