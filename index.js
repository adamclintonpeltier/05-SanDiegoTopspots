$(document).ready(function(){

// calls JSON object into javaScript file.  

$.getJSON ("index.json" , function(data){

// Creates a 'new' Array of all the objects {} from the index.json

	var tableString = new Array ();

// 'for' loops the objects {} in the array until the list is complete. Additional Objects can be added. 

	for (var i = 0 ; i < data.length; i++){
		tableString[i] = '<tr><td>' + data [i].name + '</td><td>' + data[i].description + '</td><td>' + '<a href ="https://www.google.com/maps?q=' + data[i].location + '" target="_blank" class="btn btn-primary active" role="button">Link to Google Maps</a></td></tr>';
	}

	// Connects the HTML to the long string concatenation we made above. 
	$('#dataTable').html(tableString.join(''));
});

});