$(document).ready (function() {
     $('.tooltip').tooltipster();
	});


	document.getElementById ("button").onclick = function {
	
	var name = document.getElementByID ("name");
	var mail = document.getElementById ("epost");
	
	if (mail.length === 0 || name.length === 0)
	{
		alert ("Du har glömt att ange namn eller e-post");
	}
	else if (mail.indexOf("@") < 0)
	{
		alert ("Ange en e-postadress");
	}
	else
	{
		alert ("Ditt meddelande skickas");
	}

	console.log (name);
