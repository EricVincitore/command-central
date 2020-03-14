var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var TccSchema = new Schema({

    title: {
      type: String,
      required: true
    },
    img: String,
    description: {
        type: String,
        required: true
    },
    link: {
      type: String,
      required: true
    }

});

var Tcc = mongoose.model("Tcc", TccSchema);

module.exports = Tcc;