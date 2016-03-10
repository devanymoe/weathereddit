(function() {
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
    url: subRedditURL
  }).then(function(response) {
    var count = 0;
    for (var i = 0; i < response.data.children.length; i++) {
      var post = response.data.children[i].data
      if (post.stickied === false && count < 10) {
        var $postText = post.selftext;
        var $redditPost = $('<div class="post"><div class="postMain"><a class="thumbURL"><div class="thumbnail"><img></div></a><div class="postContainer"><a class="postURL"><div class="title"></div></a><div class="postDetails"><span class="url"></span><a class="permalink"><span class="comments"></span></a><span class="author">by <a class="user"></a></span><p class="innerText hidden">' + $postText + '</p></div></div></div></div>');
        // var $innerText = $('.innerText')
        // var $postContainer = $('.postContainer');
        // $postContainer.append($innerText);
        $redditPost.find('.title').text(post.title);
        $redditPost.find('.postURL').attr('href',post.url);
        $redditPost.find('.url').text('(' + post.domain + ')');
        $redditPost.find('.comments').text(post.num_comments + ' comments');
        $redditPost.find('.permalink').attr('href', 'https://www.reddit.com' + post.permalink)
        $redditPost.find('.user').text(post.author);
        $redditPost.find('.user').attr('href', 'https://www.reddit.com/user/' + post.author);
        if (post.is_self === true) {
          $redditPost.find('img').attr('src','images/textopen.jpg');
          $redditPost.find('img').addClass('textimage');
          var $expandPost = $('.textimage');
          $redditPost.find('img').on('click', function(){
            var $clickedImage = $(this);
            var $thisMain = $clickedImage.closest('.postMain');
            var $thisPostText = $thisMain.find('.innerText');
            $thisPostText.toggleClass('hidden');
            if ($clickedImage.attr('src') === 'images/textopen.jpg') {
              $clickedImage.attr('src','images/textclose.jpg')
            }
            else {
              $clickedImage.attr('src','images/textopen.jpg')
            }
          })
        }
        else if (post.preview === undefined) {
          $redditPost.find('img').attr('src','images/nopreview.jpg');
        }
        else {
          $redditPost.find('img').attr('src',post.thumbnail);
          $redditPost.find('img').attr('data-alt-src',post.preview.images[0].source.url);
          $redditPost.find('.thumbURL').attr('href',post.url);
          $redditPost.find('.thumbURL').attr('target','_blank');
          var removeHover = function($hoverImage,$thisHover) {
            $hoverImage.on('mouseout', function(){
              $thisHover.remove();
            })
            $(document).on('scroll', function(){
              $thisHover.remove();
            })
          }
          $redditPost.find('img').on('mouseover', function(){
            var $hoverImage = $(this);
            var $hoverPostMain = $hoverImage.closest('.postMain');
            var $thisHover = $('<img class="hoverZoom" src='+ $hoverImage.attr('data-alt-src') +'>')
            $hoverPostMain.append($thisHover);
            window.onmousemove = function (e) {
              var x = e.clientX;
              var y = e.clientY;
              $thisHover.css('left',(x + 20) + 'px');
              if (y < 50) {
                $thisHover.css('top',(y + 40) + 'px');
              }
              else if (y < 200) {
                $thisHover.css('top',(y + -20) + 'px');
              }
              else if (y < 200) {
                $thisHover.css('top',(y + -50) + 'px');
              }
              else if (y < 300) {
                $thisHover.css('top',(y + -120) + 'px');
              }
              else if (y < 370) {
                $thisHover.css('top',(y + -200) + 'px');
              }
              else {
                $thisHover.css('top',(y + -330) + 'px');
              }
            };
            removeHover($hoverImage,$thisHover);
          })
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
