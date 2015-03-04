Auction.Product = DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  owner: DS.attr(),
  bidNumber: DS.attr(),
  startPrice: DS.attr(),
  backstory: DS.attr(),
  year: DS.attr(),
  photo: DS.attr(),
  lot: DS.belongsTo('lot', {async: true})
});
