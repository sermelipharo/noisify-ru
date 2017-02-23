// content.js

var search_box;
var random_terms = []

$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: chrome.extension.getURL("words/word_collection.txt"),
        dataType: "text",
        success: function(data) {
          random_terms = data.split("\n");
          // TODO: deal w/ react updates?
          setTimeout(kickOff, 4000);
        }
     });
});


function kickOff(){
  // TODO: find more robust way of identifying search box
  search_box = $("input[placeholder='Search Facebook']").eq(0);

  window.setInterval(updateSearchPlaceholder, 10000);
}

function updateSearchPlaceholder(){
  var term = random_terms[Math.floor(Math.random()*random_terms.length)];
  search_box.attr("placeholder", "Search for something random! like..."+term);
}
