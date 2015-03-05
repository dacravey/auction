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
        year: this.get('year'),
        photo: this.get('photo')
      });
      product.save();

      var lot = this.get('controllers.lot.model');
      lot.get('products').pushObject(product);
      lot.save();
    },

    delete: function() {
      if (confirm("Are you sure?")) {
        console.log ("got here")
        console.log(this.get('model'))
      this.get('product').destroyRecord();

      // lot.get('products').destroyRecord();
      }
    }
  }

});
