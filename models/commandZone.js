var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CommandZoneSchema = new Schema({

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

var CommandZone = mongoose.model("CommandZone", CommandZoneSchema);

module.exports = CommandZone;