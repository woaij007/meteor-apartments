Template.apartmentList.helpers({
	// get apartment total number
	apartmentNumber: function() {
		// console.log(Apartments.find().count());
		return Apartments.find().count();
	},
	// set order-price button class
	OrderByPrice: function() {
		if(Session.get('OrderByPriceOrPopularity') === 1){
			return "clicked-button";
		}else {
			return "unclicked-button";
		}
	},
	// set order-popularity button class
	OrderByPopularity: function() {
		if(Session.get('OrderByPriceOrPopularity') === 1){
			return "unclicked-button";
		}else {
			return "clicked-button";
		}
	}
});

Template.apartmentList.events({
	// when mousemove over a apartment template, get its id
	'mousemove .col-center-block': function() {
		var apartmentId = this._id;
		Session.set('selectedApartment', apartmentId);
		// console.log(Session.get('selectedApartment'));
	},
	// when click popularity button, Session.set('OrderByPriceOrPopularity', 0);
	'click .order-popularity': function() {
		Session.set('OrderByPriceOrPopularity', 0);
		// make apartments sorting by popularity descending
		ApartmentsPages.set({
			perPage: 5,
			sort: {
				popularity: -1
			}
		});
	},
	// when click price button, Session.set('OrderByPriceOrPopularity', 1);
	'click .order-price': function() {
		Session.set('OrderByPriceOrPopularity', 1);
		// make apartments sorting by price descending
		ApartmentsPages.set({
			perPage: 5,
			sort: {
				price: -1
			}
		});
	}
});