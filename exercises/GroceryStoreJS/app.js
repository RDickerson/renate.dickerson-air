var shopper = {  
    store: "The Cool Place",
    totalPrice: 26.89,
    selfCheckout: true,
    items: []
    everything: function () {
        return "I went to " + shopper.store + " and spent $" + shopper.totalPrice + ".";
    }
 };
 var result = shopper.everything()
 console.log (result)