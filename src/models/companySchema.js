const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const autoIncrement = require('mongoose-auto-increment');
// initialize the plugin
//autoIncrement.initialize(mongoose.connection);

const companySchema = new Schema({
  companyId: { type: Number, required: true },
    name: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  });

  // companySchema.plugin(autoIncrement.plugin, {
  //   model: 'Company',
  //   field: 'companyId',
  //   startAt: 1
  // });

  module.exports = {companySchema}