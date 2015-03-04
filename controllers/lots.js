Auction.LotsController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newLot = this.store.createRecord('lot', {
        title: this.get('title'),
        date: this.get('date')
      });

      newLot.save();
    }
  }
});
