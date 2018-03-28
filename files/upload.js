'use strict';

const AWS = require('aws-sdk'); 
const uuid = require('uuid');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const s3 = new AWS.S3();
const accountSid = process.env.account_SID;
const authToken = process.env.auth_token;
const twilioPhoneNo = process.env.twilio_phone_no;
const phoneNoToReceiveSMS = process.env.phone_no_to_recieve_sms;
const twilio = require('twilio');
const client = new twilio(accountSid, authToken);


module.exports.upload = (event, context, callback) => {
  event.Records.forEach((record) => {
    const filename = record.s3.object.key;
    const name = record.eventName
    const time = record.eventTime

    const params = {
      TableName: 'twilio',
      Item: {
        id: uuid.v1(),
        fileName: filename,
            Type: name,
            Time: time
      }
    }

    dynamoDb.put(params, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("files inserted")
    });

    client.messages.create({
        body: `${filename} is added to your S3 bucket`
        to: phoneNoToReceiveSMS,
        from: twilioPhoneNo
    }).then((message) => console.log(message.sid));
});
};