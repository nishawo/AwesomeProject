pipeline {
    agent any

    stages {
        stage('Decode HTML Entities') {
            steps {
                script {
                    def originalString = '#Fixing amount issue in all pages (refund modal, tax modal and service fee modal, withdraw payout modal and other) #https://app.asana.com/0/0/1206099554412284/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Fixed validation issue in shipping details field #https://app.asana.com/0/0/1206099554412285/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Fixed tooltip issue on customer details page #https://app.asana.com/0/0/1206099554412286/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Able to add invalid value in Postal Code #https://app.asana.com/0/0/1206009654189540/f #Main #Follow up on &#039;Import Customer Functionality&#039; #https://app.asana.com/0/1141454022157264/1205819601058870/f###Able to add invalid value in Postal Code #https://app.asana.com/0/0/1206009654189540/f #Main #Follow up on Import Customer Functionality #https://app.asana.com/0/1141454022157264/1205819601058870/f###Able to add invalid value in Postal Code #https://app.asana.com/0/0/1206009654189540/f #Main #Follow up on Import Customer Functionality #https://app.asana.com/0/1141454022157264/1205819601058870/f###Issue with entering past due date manually #https://app.asana.com/0/0/1206128022480865/f###Deployment Script #https://app.asana.com/0/1141454022157257/1205590782781960 #main #Deployment Email Notification Implementation #https://app.asana.com/0/1141454022157257/1205590782781957###Deployment Script #https://app.asana.com/0/1141454022157257/1205590782781960 #main #Deployment Email Notification Implementation #https://app.asana.com/0/1141454022157257/1205590782781957###Issue with add new tax when edit the subscription #https://app.asana.com/0/0/1206133016667203/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Deployment Script #https://app.asana.com/0/1141454022157257/1205590782781960 #main #Deployment Email Notification Implementation #https://app.asana.com/0/1141454022157257/1205590782781957###Deployment Script #https://app.asana.com/0/1141454022157257/1205590782781960 #main #Deployment Email Notification Implementation #https://app.asana.com/0/1141454022157257/1205590782781957###Deployment Script #https://app.asana.com/0/1141454022157257/1205590782781960 #main #Deployment Email Notification Implementation #https://app.asana.com/0/1141454022157257/1205590782781957###Issue with entering invalid email format in the CC receipt field #https://app.asana.com/0/0/1206128022480863/f #Main #Follow up on Add ability to send invoices to multiple email addresses also to send draft to different email like we do for receipts #https://app.asana.com/0/1141454022157264/1205831256095045/f###Date Details not displaying when perform Mark as Paid Action #https://app.asana.com/0/0/1206128024030664/f #Main #Follow up on Add ability to send invoices to multiple email addresses also to send draft to different email like we do for receipts #https://app.asana.com/0/1141454022157264/1205831256095045/f###Issue with view invoice by customer &amp; get email to admin #https://app.asana.com/0/0/1206128024030667/f #Main #Follow up on Add ability to send invoices to multiple email addresses also to send draft to different email like we do for receipts #https://app.asana.com/0/1141454022157264/1205831256095045/f###Fixing amount issue in all pages (refund modal, tax modal and service fee modal, withdraw payout modal and other) #https://app.asana.com/0/0/1206099554412284/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Issue with site title when user sign-out #https://app.asana.com/0/0/1206111050822091/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Date Details not displaying when perform Mark as Paid Action #https://app.asana.com/0/0/1206128024030664/f #Main #Follow up on Add ability to send invoices to multiple email addresses also to send draft to different email like we do for receipts #https://app.asana.com/0/1141454022157264/1205831256095045/f###Signup: Successful Message is not displaying in the medium Screen (1366*768) #https://app.asana.com/0/0/1205897602816593/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Issue with enters the invalid data in the &quot;sameAsBillingAddress&quot; column #https://app.asana.com/0/0/1206139023915033/f #Main #Follow up on Import Customer Functionality #https://app.asana.com/0/1141454022157264/1205819601058870/f###Able to add invalid value in Postal Code 01 #https://app.asana.com/0/0/1206009654189540/f #Main #Follow up on Import Customer Functionality #https://app.asana.com/0/1141454022157264/1205819601058870/f###Tab reset Issue on Subscription list #https://app.asana.com/0/0/1206149835111200/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Issue with entering past due date manually #https://app.asana.com/0/0/1206128022480865/f #Main #Follow up on Add ability to send invoices to multiple email addresses also to send draft to different email like we do for receipts #https://app.asana.com/0/1141454022157264/1205831256095045/f###Issue with site title when user sign-out #https://app.asana.com/0/0/1206111050822091/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Signup: Successful Message is not displaying in the medium Screen (1366*768) #https://app.asana.com/0/0/1205897602816593/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Date Details not displaying when perform Mark as Paid Action #https://app.asana.com/0/0/1206128024030664/f #Main #Follow up on Add ability to send invoices to multiple email addresses also to send draft to different email like we do for receipts #https://app.asana.com/0/1141454022157264/1205831256095045/f###Issue with site title when user sign-out #https://app.asana.com/0/0/1206111050822091/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Issue with site title when user sign-out #https://app.asana.com/0/0/1206111050822091/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Signup: Successful Message is not displaying in the medium Screen (1366*768) #https://app.asana.com/0/0/1205897602816593/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Issue with enters the invalid data in the sameAsBillingAddress column&nbsp; #https://app.asana.com/0/0/1206139023915033/f #Main #Follow up on Import Customer Functionality #https://app.asana.com/0/1141454022157264/1205819601058870/f###Issue with view invoice by customer &amp; get email to admin #https://app.asana.com/0/0/1206128024030667/f #Main #Follow up on Add ability to send invoices to multiple email addresses also to send draft to different email like we do for receipts #https://app.asana.com/0/1141454022157264/1205831256095045/f###Hide plan downgrade modal while select free plan #https://app.asana.com/0/0/1206044309024717/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f'
                    def decodedString = sh(script: "echo '${originalString}' | perl -MHTML::Entities -pe 'decode_entities(\$_)'", returnStdout: true).trim()
                    sh "curl -X POST -d \"projectName=test\" -d \"environment=test\" -d \"version=123\" -d \"buildUser=456\" -d \"commitMessages='${commitMessages}'\" -d \"deploymentStatus=failed\" -d \"error=Jenkins Build Result: ${buildResult}\" \"https://dev-api.paid.com:4903/admin/paid/versions\""

                    echo "Decoded String: ${decodedString}"
                }
            }
        }

        // Add more stages as needed
    }
}
