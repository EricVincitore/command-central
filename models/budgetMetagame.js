var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var BudgetMetagameSchema = new Schema({

    title: {
      type: String,
      required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String
    },
    link: {
      type: String,
      required: true
    }

});

var BudgetMetagame = mongoose.model("BudgetMetagame", BudgetMetagameSchema);

module.exports = BudgetMetagame;