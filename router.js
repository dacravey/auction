Auction.Router.map(function() {
  this.resource('lots', {path: '/'});
  this.resource('lot', {path: 'lots/:lot_id'});
  this.resource('products');
});
