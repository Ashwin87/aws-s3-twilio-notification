# aws-s3-twilio-notification

1. Download this project.

2. Run npm install to download the required modules.

3. Install Serverless.

4. Install AWS CLI and configure it with your account.

5. Create a Twilio account at https://www.twilio.com/

6. In the serverless.yml file.

7. Set the region and profile according to your AWS CLI configuration.

8. Change the name of the bucket in custom -> bucket.

9. Add your Twilio Account SID (account-SID).

10. Add your Twilio Account Token (auth_token).

11. Add your Twilio Phone Number (twilio_phone_No).

12. Add the desired phone number to receive the SMS (phone_no_to_recieve_sms).

13. Run serverless deploy -v.

14. Test this function by adding any file in the bucket.
