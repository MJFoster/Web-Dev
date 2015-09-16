// Create an array object for band members, that includes what instrument each member plays.
// Add a 'method', or function of theBand object, to this array that  determines whether or not a given 'name'
// is one of the members of 'theBand' array.
		
var theBand = {
	members: [
		{
		name: "Peter",
		instrument: "Sax"
		},
		{
		name: "Paul",
		instrument: "Flute"
		},
		{
		name: "Mary",
		instrument: "Piano"
		}],
		
		// Create a method that accepts a argument of a name, then locate it in the array 'theBand'
		// If the name passed into the method is found in 'theBand' array, alert to the screen their name and instrument.
		
		isMember: function(nameToFind) {
			for(var i = 0; i < this.members.length; i++) {
				if(nameToFind === this.members[i].name) {
					return alert(nameToFind + " is in the band, and plays the " + this.members[i].instrument);
				}
			}
			alert(nameToFind + " is NOT in the band");
		}
}

// Call the method, 'isMember', of this array object named 'theBand'.
theBand.isMember('Paul');
theBand.isMember('MJ');
