// const express = require("express")
// const fetch = require("node-fetch")

// const router = express.Router()

// router.post('/sentToAll', (req,res)=>{
// const notification ={
//     'title': 'title of notification',
//     'text' : 'subtitle',
// };
// const fcm_tokens = {}
// const notification_body = {
//     'notification' : notification,
//     'registeration_ids' : fcm_tokens
// }

//     fetch('https://fcm.googleapis.com/fcm/send',{
//     "method":"POST",
//     "headers":{
//         "Authorization" : "keys"+'AAAAKxIEydA:APA91bGvfzqYVM7jbQBGJIqpAf3eVT6bPS6R2MHriSdGQP45d26QlOKq3eMLD6ngyWKHCgQotRZ33OjSutaa8imkB6kIvo4ce3cxwi7hig6gYZjf_3rW4n60UYGhA5Ipkn9b_a_6hV9l',
//         "content-type" : "application/json"
//     },

//     "body":JSON.stringify(notification_body)
//     }).then(()=>{
//         res.status(200).send('notifaction sent successfully')
//     }).catch((err)=>{
//         res.status(2400).send('notifaction something wrong')

//     })
// })

// module.exports = router