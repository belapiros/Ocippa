// translateY and fade in the articles

window.addEventListener('scroll', function() {


  // value of the actual sctolled distance
  var actual_scrolled_distance = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

  // array of articles
  var articles = document.getElementsByClassName("sectionBottomWrapper")[0].getElementsByTagName("article");

  // reference point to start fade
  var reference_point = document.getElementsByClassName("sTH_linkWrapper")[0];

  // fade articles in
  if (reference_point.offsetTop + 820 <= actual_scrolled_distance) {

    articles[4].classList.add("article_fade_in");

  }
  if (reference_point.offsetTop + 585 <= actual_scrolled_distance) {

    articles[3].classList.add("article_fade_in");

  }
  if (reference_point.offsetTop + 350 <= actual_scrolled_distance) {

    articles[2].classList.add("article_fade_in");

  }
  if (reference_point.offsetTop + 100 <= actual_scrolled_distance) {

    articles[1].classList.add("article_fade_in");

  }

});
