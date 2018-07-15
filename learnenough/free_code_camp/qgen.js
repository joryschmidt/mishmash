$(document).ready(function(){
  $('#quote-button').on('click', getInfo);
});

var quote = '';
var author = '';

function getInfo() {
  $.ajaxSetup({
    headers : {   
      'X-Mashape-Key' : 'VNz9M4LuxLmshPkcHM2f1Cl3IoXRp1ZaHq7jsnRd3USeEJHxde',
    }
  });
  var api = "https://andruxnet-random-famous-quotes.p.mashape.com/$cat=";  
  $.getJSON(api, function(json) {
      quote = json.quote;
      author = json.author;
      $('#image').fadeOut(function() {
        $('#image').html("");
        getImage();
        $('#image').fadeIn(3000);
      });
      $('#quote').fadeOut(function() {
        $('#quote').html('<p>"' + quote + '"</p>');
      });
      $('#author').fadeOut(function() {
        $('#author').html('<p>- ' + author + '</p>');
      });
      $('#quote').fadeIn();
      $('#author').fadeIn();
      $('#twitter').attr('href', "https://twitter.com/intent/tweet?text=" + encodeURIComponent('"' + quote + '" - ' + author));
      var cx = '014816764545808411200:alcmxzeoxka';
      var key = 'AIzaSyDo_Sope7VVPl-z_Ftua2nJyucw0G8oX9c';
      var image_req = 'https://www.googleapis.com/customsearch/v1?key=' + key + '&cx=' + cx + '&q=' + author.split(' ').join('+') + '&searchType=image&fileType=jpg&imgSize=large&num=2&alt=json';
      var regex = /imdb.com/;
      function getImage() {
        $.getJSON(image_req, function(response) {
          var res1 = response['items'][0];
          var res2 = response['items'][1];
          if (!res1['link'].match(regex)) {
            $('#image').html('<img class="img-responsive center-block" src="' + res1['link'] + '" alt="' + res1['title'] + '" id="quote_img">');
          } else {
            $('#image').html('<img class="img-responsive center-block" src ="' + res2['link'] + '" alt="' + res2['title'] + '" id="quote_img">');
          }
        });
      };
    });
}