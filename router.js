Auction.Router.map(function() {
  this.resource('lots', {path: '/'});
  this.resource('lot', {path: 'lots/:lot_id'});
  this.resource('products');
  this.resource('product', {path: 'products/:product_id'});
});
