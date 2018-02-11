// Attach a button listener to the button
//
// On click on the button, make an AJAX request to reddit for results of cute puppies
//
// http://www.reddit.com/r/aww/search.json?q=puppy&restrict_sr=true
// 
// For each of the elements in data.children, append a new <img> element to .text with the src as the child.data.thumbnail

$('.btn').click(function() {
  
    $('.text').text('loading . . .');
    
    $.ajax({
      type:"GET",
      data: {
        q: "puppy",
        restrict_sr: "true"
      },
      url:"http://www.reddit.com/r/aww/search.json",
      success: function(response) {
        $('.text').html('');
        var children = response.data.children;
        for (var i = 0; i < children.length; i++) {
          if (children[i].data.thumbnail !== "self" && children[i].data.thumbnail !== "default") {
            $('.text').append('<img src="' + children[i].data.thumbnail + '" />');
          }
        }
        
      },
    });
    
  });

