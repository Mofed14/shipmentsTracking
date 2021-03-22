const mongoose = require("mongoose")
const schema = mongoose.Schema;

const track = new schema({
    shipment_status : {
        sent: false ,
        paid : false 
    }
});

module.exports = mongoose.model('Track', track); 
