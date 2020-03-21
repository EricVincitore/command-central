var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CardsSchema = new Schema({

    name: {
      type: String,
      required: true
    },
    cmc: {
        type: String,
        required: true
    },
    set: {
      type: String,
    },
    description :{
      type: String,
      required: true
    }

});

var Cards = mongoose.model("Cards", CardsSchema);

module.exports = Cards;