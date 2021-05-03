// ------------ Date Idea ------------ \\
// Dictionary of date ideas
var ideas = {"free": ["Go to a nice park and have a picnic",
				"Just go on a lovely walk, no matter the weather",
				"BEACH DAY! (optional: go boogie boarding)",
				"Take a hike", 
				"Go camping somwhere",
				"Just chill in the spa for the evening (optional: bring cheese and wine)",
				"Day trip somwhere", 
				"Visit the botanical gardens (optional: combine with picnic)",
				"Go look at the cute animals at a pet shop",
				"Have a paint night",
				"Tour the Old Melbourne Gaol",
				"Build a fort",
				"Go to a signal workshop",
				"Find a geocache",
				"Conduct some eyebombing",
				"Explore the fitzroy gardens",
				"Watch what penguins do with their time at St Kilda Beach",
				"Ejoy some free comedy at the Spleen bar",
				"Walk through the Sherbrooke Forest (optional: tea shops)",
				"B.East Trivia Night",
				"Ride the city circle tram",
				"Travel to where Kath & Kim was filmed"],
			"cheap": ["Go op shopping somewhere", 
				"Go to the Melbourne Zoo",
				"Go visit the fishies at the aquarium",
				"Explore a farmer's market",
				"Go bowling",
				"Embark on a dollar menu date (optional: somewhere new)",
				"Go see a movie at any cinema",
				"Take public transport anywhere then come back (optional: go to the end of the line)",
				"Join a ghost tour (oooOOooOOOoooO)",
				"Go to a museum",
				"Explore the Queen Victoria Market",
				"Oyster and Bubbles at the woodshed",
				"Get retro at Pixel Alley",
				"Stay the night at a SUPA CHEAP AirBnB"],
			"expensive": ["Time to relive the past and go to sidetracked", 
				"Go to dinner at a fancy restaruant",
				"SPLISH and SPLASH at a water park",
				"Watch a movie at a drive-in cinema",
				"Enjoy a perfomance at the Paris Cat",
				"Go on a dinner cruise on the yarra",
				"Go kayaking on the yarra",
				"Book in and go to a smash room"]};

// ------------ Popup Box ------------ \\
// Get the modal
var modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// ------------ BUTTONS ------------ \\
var listOfIdeas;
var value;
var idea;
// FREE BUTTON
var btnFree = document.getElementById("free");
btnFree.onclick = function() {
	listOfIdeas = ideas["free"];
	value = Math.floor((Math.random() * listOfIdeas.length));
	idea = listOfIdeas[value];
	document.getElementById("date-idea").innerHTML = idea;
	modal.style.display = "block";
}

// CHEAP BUTTON
var btnCheap = document.getElementById("cheap");
btnCheap.onclick = function() {
	listOfIdeas = ideas["cheap"];
	value = Math.floor((Math.random() * listOfIdeas.length));
	idea = listOfIdeas[value];
	document.getElementById("date-idea").innerHTML = idea;
	modal.style.display = "block";
}

// EXPENSIVE BUTTON
var btnExpensive = document.getElementById("expensive");
btnExpensive.onclick = function() {
	listOfIdeas = ideas["expensive"];
	value = Math.floor((Math.random() * listOfIdeas.length));
	idea = listOfIdeas[value];
	document.getElementById("date-idea").innerHTML = idea;
	modal.style.display = "block";
}



// ------------ CLOSE BOX ------------ \\
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
