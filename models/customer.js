const mongoose = require('mongoose');

//  Customer schema
const customerSchema = mongoose.Schema({
   firstname: {type: String}, 
   lastname: {type: String},
   phone: {type: String},
   email: {type: String}
});

// Define and export
module.export = mongoose.model('Customer', customerSchema);

