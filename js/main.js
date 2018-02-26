// 1. When the h1 is clicked
	// a) Fade in the image
	// b) Change the text of the h1 to "Let's Party!"
	// c) Add the party class to the div with the class .box
	// BONUS: Add your own class to the CSS file and add it to the body when the event occurs.

  $( "h1" ).click(function() {
    $( "img" ).fadeIn( 900 );
    $( "h1" ).text( "Let's Party!" );
    $( ".box" ).addClass( "party" );
    $( "body").addClass( "hey-now" );
  });
