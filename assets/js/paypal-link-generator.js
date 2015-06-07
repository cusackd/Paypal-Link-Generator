// When the document is ready run this code
$( document ).ready(function() {
	
	// When the button is clicked run this code
	$( ".generateLink" ).click(function(e) {
		
		// Prevent the form from reloading the page
		e.preventDefault();

		// Define the variables to generate the link
		var description = encodeURI($( ".description" ).val()),
			email = $( ".email" ).val(),
			price = $( ".price" ).val(),
			currency = $( ".currency" ).val(),
			link = "https://www.paypal.com/cgi-bin/webscr?business="+ email +"&cmd=_xclick&currency_code="+ currency +"&amount="+ price +"&item_name="+ description;

		// Add the link we generate to the result textarea
		$( ".result" ).val(link);

	});

});