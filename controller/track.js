const Track = require('../model/track')
const fetch = require('node-fetch')
const create = async (req, res) => {
    try {
      const track = await new Track({
        shipment_status : {
            sent: false ,
            paid : false 
        }
      }).save();

      res.json({
        case: 1,
        message: "The data is inserted",
        data: track,
      });
    } catch (error) {
      res.json({
        case: 0,
        message: error.message,
      });
    }
  }
const ShowTheShipmentTrack = async (req, res) => {
    try {
        const track = await Track.find()
        res.json({
            case : 1, 
            message : "track shipment",
            data : track
        })
    } catch (error) {
        res.json({
            case : 0,
            message : error.message
        })
    }
}

const updateTrack = async (req, res) => {
  try {
      const track = await Track.findByIdAndUpdate(req.params.id)
      if(track) {
        const notification ={
          'title': 'title of notification',
          'text' : 'subtitle',
      };
      const fcm_tokens = {}
      const notification_body = {
        'notification' : notification,
        'registeration_ids' : fcm_tokens
      }
      fetch('https://fcm.googleapis.com/fcm/send',{
        "method":"POST",
        "headers":{
        "Authorization" : "keys"+'AAAAKxIEydA:APA91bGvfzqYVM7jbQBGJIqpAf3eVT6bPS6R2MHriSdGQP45d26QlOKq3eMLD6ngyWKHCgQotRZ33OjSutaa8imkB6kIvo4ce3cxwi7hig6gYZjf_3rW4n60UYGhA5Ipkn9b_a_6hV9l',
        "content-type" : "application/json"
        },
      "body":JSON.stringify(notification_body)
    })
    res.status(200).send('notifaction sent successfully')
    res.json({
      case : 1, 
      message : "update track shipment",
      data : req.body
  })
      } else { 
        res.status(2400).send('notifaction something wrong')

      }
  } catch (error) {
      res.json({
          case : 0,
          message : error.message
      })
  }
}

module.exports = {
    ShowTheShipmentTrack,create,updateTrack
}