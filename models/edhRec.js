var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var EdhRecSchema = new Schema({

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

var EdhRec = mongoose.model("EdhRec", EdhRecSchema);

module.exports = EdhRec;