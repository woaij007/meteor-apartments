// Create new apartments collection
Apartments = new Mongo.Collection('apartments');

// Set the default pagination, here we sort apartments with price increasing
ApartmentsPages = new Meteor.Pagination(Apartments, {
    perPage: 5,
    sort: {
        price: 1
    },
    itemTemplate: "apartment",
    templateName: "apartmentList",
    availableSettings: {
        perPage: true,
        sort: true,
        filters: true
    }
});

// Schema for apartments, used to do autoForm check
Apartments.attachSchema(new SimpleSchema({
  name: {
    type: String
  },
  image: {
    type: [String]
  },
  price: {
    type: Number
  },
  popularity: {
    type: Number
  },
  description1: {
    type: String
  },
  description2: {
    type: String
  }
}));