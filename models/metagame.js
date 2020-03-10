var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var MetagameSchema = new Schema({

    title: {
      type: String,
      required: true
    },
    meta: {
        type: String
    },
    link: {
      type: String,
      required: true
    }

});

var Metagame = mongoose.model("Metagame", MetagameSchema);

module.exports = Metagame;