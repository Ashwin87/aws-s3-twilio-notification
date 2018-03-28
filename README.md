# aws-s3-twilio-notification

Download this project
Run npm install to download the required modules
Install Serverless.
Install AWS CLI and configure it with your account.
Create a Twilio account at https://www.twilio.com/
In the serverless.yml file
Set the region and profile according to your AWS CLI configuration
Change the name of the bucket in custom -> bucket
Add your Twilio Account SID (account-SID)
Add your Twilio Account Token (auth_token)
Add your Twilio Phone Number (twilio_phone_No)
Add the desired phone number to receive the SMS (phone_no_to_recieve_sms)
Run serverless deploy -v
Test this function by adding any file in the bucket.
