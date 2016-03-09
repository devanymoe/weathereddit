(function() {
  var userSubReddit = localStorage.getItem('userSubReddit')
  var subRedditURL = "https://www.reddit.com/r/" + userSubReddit + ".json";
  var postText = [];
  $.ajax({
    type: "GET",
    dataType: "json",
    url: subRedditURL
  }).then(function(response) {
    var count = 0;
    for (var i = 0; i < response.data.children.length; i++) {
      var post = response.data.children[i].data
      if (post.stickied === false && count < 10) {
        var $redditPost = $('<div class="post"><div class="postMain"><a class="thumbURL"><div class="thumbnail"><img></div></a><div class="postContainer"><a class="postURL"><div class="title"></div></a><div class="postDetails"><span class="url"></span><a class="permalink"><span class="comments"></span></a><span class="author">by <a class="user"></a></span></div></div></div></div>');
        var $postDetails = $('')
        $redditPost.find('.title').text(post.title);
        $redditPost.find('.postURL').attr('href',post.url);
        $redditPost.find('.url').text('(' + post.domain + ')');
        $redditPost.find('.comments').text(post.num_comments + ' comments');
        $redditPost.find('.permalink').attr('href', 'https://www.reddit.com' + post.permalink)
        $redditPost.find('.user').text(post.author);
        $redditPost.find('.user').attr('href', 'https://www.reddit.com/user/' + post.author);
        postText.push(post.selftext);
        if (post.preview === undefined) {
          $redditPost.find('img').attr('src','images/textopen.jpg');
          $redditPost.find('img').addClass('textimage');
          var $expandPost = $('.textimage');
          $redditPost.find('img').on('click', function(){
            console.log("check");

          })
        }
        else {
          $redditPost.find('img').attr('src',post.thumbnail);
          $redditPost.find('.thumbURL').attr('href',post.url);
          $redditPost.find('.thumbURL').attr('target','_blank');
        }
        $reddit.append($redditPost);
        count += 1;
      }
    }
  }).then(function(){
    var $reddit = $('.reddit');
    var $posts = $reddit.find('.post');
    var $links = $posts.find('a');
    $links.attr('target','_blank');
  });
})()
