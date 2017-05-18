$(document).ready(function() {
  $('#inputForm').on('submit', function(e) {
    e.preventDefault();
    var word = $('#inputText').val();
    var url = 'http://www.memidex.com/' + word + '#etymology';
    chrome.extension.getBackgroundPage().console.log(url);
    chrome.tabs.create({url: url});
  });
});