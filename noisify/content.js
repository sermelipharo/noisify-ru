// content.js

var search_box;
var random_terms = []

$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: chrome.extension.getURL("word_collection.txt"),
        dataType: "text",
        success: function(data) {
          random_terms = data.split("\n");
          // TODO: deal w/ react updates?
          kickOff();
        }
     });
});


function kickOff(){
  updateDummySearchPlaceholder()
  window.setInterval(updateSearchPlaceholder, 10000);
}

function updateDummySearchPlaceholder(){
  var term = random_terms[Math.floor(Math.random()*random_terms.length)];
  // this is very hack-y
  // need to update search bar more frequently right after page load b/c stuff is shifting
  refreshDummySearch(term);
  setTimeout(function(){refreshDummySearch(term);}, 1000);
  setTimeout(function(){refreshDummySearch(term);}, 2000);
  setTimeout(function(){refreshDummySearch(term);}, 3000);
  setTimeout(function(){refreshDummySearch(term);}, 4000);
  setTimeout(function(){refreshDummySearch(term);}, 5000);
  setTimeout(function(){refreshDummySearch(term);}, 6000);
  setTimeout(function(){refreshDummySearch(term);}, 7000);
  setTimeout(function(){refreshDummySearch(term);}, 8000);
  setTimeout(function(){refreshDummySearch(term);}, 9000);
}
function refreshDummySearch(term){
  search_box = $("input[placeholder='Search Facebook']").eq(0);
  search_box.attr("placeholder", "aren't you curious about..."+term.toUpperCase());
}


function updateSearchPlaceholder(){
  search_box = find_search_box();
  var term = random_terms[Math.floor(Math.random()*random_terms.length)];
  search_box.attr("placeholder", "aren't you curious about..."+term.toUpperCase());
}

function find_search_box(){
  search_box = $("input[aria-label='Search']").eq(0);
  if(search_box.length==0){
    // in case actual search bar hasn't loaded yet
    return $("input[placeholder='Search Facebook']").eq(0);
  } else {
    return search_box;
  };
}
