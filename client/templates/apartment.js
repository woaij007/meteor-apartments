Template.apartment.helpers({
	selectedClass: function() {
		var apartmentId = this._id;
		var selectedApartment = Session.get('selectedApartment');
		if(apartmentId == selectedApartment) {
			return "selected";
		}
	},

	imgUrl: function() {
		return this.image[0];
	}
});