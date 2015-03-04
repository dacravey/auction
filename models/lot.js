Auction.Lot = DS.Model.extend({
  title: DS.attr(),
  date: DS.attr(),
  products: DS.hasMany('product', {async: true})
});
