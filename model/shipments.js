const mongoose = require("mongoose")
const schema = mongoose.Schema;

const Shipments = new schema({
    shipment : [{
        shipmentname: { type: String, require: true },
        price: { type: Number, require: true },
        quan: { type: Number, require: true },
    }],
   address : [{
        userName: { type: String, require: true },
        phoneNumber: { type: String, require: true },
        city: { type: String, require: true },
        country: { type: String, require: true },
        email: {
            type: String,
            require: true,
            match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        },
    }],
    payment_stauts : [{
        paid: Boolean,
        total: { type: Number }
    }]
});

module.exports = mongoose.model('Shipments', Shipments); 
