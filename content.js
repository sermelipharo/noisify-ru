// content.js

// TODO: deal w/ react updates?
setTimeout(kickOff, 2000);

var search_box;
// from http://www.desiquintans.com/articles/noungenerator.php
// TODO: a more random source of random nouns
var random_terms = [
  'babies',
  'juice',
  'wolf',
  'congressman',
  'brain',
  'Ghana',
  'Tom',
  'Lisa',
  'Jordan'
]


function kickOff(){
  // TODO: find more robust way of identifying search box
  search_box = $("input[placeholder='Search Facebook']").eq(0);

  window.setInterval(updateSearchPlaceholder, 4000);
}

function updateSearchPlaceholder(){

  var term = random_terms[Math.floor(Math.random()*random_terms.length)];
  search_box.attr("placeholder", "Search for something random! like..."+term);
}
