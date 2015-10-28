// Set the layout and loading template
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

// The apartment list page
Router.route('/', {
  name: 'apartmentList'
});

// The apartment detail page
Router.route('/apartment/:_id', {
  name: 'apartmentDetail',
  data: function() { return Apartments.findOne(this.params._id); }
});