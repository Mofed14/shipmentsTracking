const Shipments = require('../model/shipments')

  const create = async (req, res) => {
    try {
      const shipments = await new Shipments({
            shipment : [{
                    shipmentname: req.body.shipmentname,
                    price: req.body.price,
                    quan: req.body.quan,
                },],
            address : { userName: req.body.userName,
                phoneNumber: req.body.phoneNumber,
                city: req.body.city,
                country: req.body.country,
                email: req.body.email,
            },
            payment_stauts : {
                paid: false,
                total: req.body.price * req.body.quan
            }
      }).save();


      res.json({
        case: 1,
        message: "The data is inserted",
        data: shipments,
      });
    } catch (error) {
      res.json({
        case: 0,
        message: error.message,
      });
    }
  }

  const getAllShipments = async (req, res) => {
      try {
          const shipments = await Shipments.find()
          res.json({
              case : 1, 
              message : "All Data",
              data : shipments
          })
      } catch (error) {
          res.json({
              case : 0,
              message : error.message
          })
      }
  }


  module.exports = {
    create,
   getAllShipments,
  };
