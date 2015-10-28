// Get json data from settings.json and store it in an object
var apartments = Meteor.settings.apartments;

// When you first time open this site, it will insert 12 apartments data into mangoDB
while(Apartments.find().count() < 12) {
	for (var i = 0; i < apartments.length; i++) {
 		Apartments.insert(apartments[i]);
	}	
}
