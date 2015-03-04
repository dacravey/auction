Auction.LotController = Ember.ObjectController.extend({
  needs: ['lot'],
  actions: {
    save: function() {
      var product = this.store.createRecord('product', {
        name: this.get('name'),
        description: this.get('description'),
        owner: this.get('owner'),
        bidNumber: this.get('bidNumber'),
        startPrice: this.get('startPrice'),
        backstory: this.get('backstory'),
        year: this.get('year')
      });
      product.save();
      console.log(product)


      var lot = this.get('controllers.lot.model');
      lot.get('products').pushObject(product);
      lot.save();
    }
  }

});
