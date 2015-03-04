Auction.LotsController = Ember.ArrayController.extend({
  actions: {
    save: function() {
      console.log("here")
      var newLot = this.store.createRecord('lot', {
        title: this.get('title'),
        date: this.get('date')
      });

      newLot.save();

    }
  }
});
