const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const adSchema = new Schema({
    companyId: {
      type: Number,
      required: true
    },
    primaryText: {
      type: String,
      required: true
    },
    headline: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    CTA: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    }
  });

  module.exports = mongoose.model('Ad', adSchema);

  