import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
// import * as async from 'async';
// import * as AWS from 'aws-sdk';
const sns = require('./src/aws/sns');

// const sns: AWS.SNS = new AWS.SNS({apiVersion: '2006-03-01'});

// const NOTIFICATION_TOPIC = process.env.NOTIFICATION_TOPIC;
const NOTIFICATION_TOPIC = 'arn:aws:sns:us-east-1:871094195766:s3-alert-Notifications';

export const hello: APIGatewayProxyHandler = async (event, _context) => {

  await sendNotification("The notification");

return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event,
    }, null, 2),
  };
}

async function sendNotification(voicemail) {
  console.log('sending voicemail notification...');

  return await sns.publish({
    topicArn: NOTIFICATION_TOPIC,
    subject: voicemail,
    message: voicemail,
  });
}
