pipeline {
    agent any

    stages {
        stage('Decode HTML Entities') {
            steps {
                script {
                    def commitMessages = "#Disputes #https://app.asana.com/0/1141454022157264/1206053963850092 #main #Transfer payment-related information from Stripe to our DB. #https://app.asana.com/0/1141454022157264/1206053963850090###Deployment Script #https://app.asana.com/0/1141454022157257/1205590782781960 #main #Deployment Email Notification Implementation #https://app.asana.com/0/1141454022157257/1205590782781957###Deployment Script #https://app.asana.com/0/1141454022157257/1205590782781960 #main #Deployment Email Notification Implementation #https://app.asana.com/0/1141454022157257/1205590782781957###Deployment Script #https://app.asana.com/0/1141454022157257/1205590782781960 #main #Deployment Email Notification Implementation #https://app.asana.com/0/1141454022157257/1205590782781957###Branding: Receipt download #https://app.asana.com/0/1141454022157264/1203990832293576/f###Saved in partner as CanGift but somehow it is ignoring casing and loading as Cangift Also Partner logo not visible properly #https://app.asana.com/0/1141454022157264/1206126343586731###Saved in partner as CanGift but somehow it is ignoring casing and loading as Cangift Also Partner logo not visible properly #https://app.asana.com/0/1141454022157264/1206126343586731###Not displaying PaidWeb service when signup through partner's URL #https://app.asana.com/0/0/1206017614550486/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Date Details not displaying when perform Mark as Paid Action #https://app.asana.com/0/0/1206128024030664/f #Main #Follow up on Add ability to send invoices to multiple email addresses also to send draft to different email like we do for receipts #https://app.asana.com/0/1141454022157264/1205831256095045/f###Invoice:- Product /service field has validation for length #https://app.asana.com/0/0/1206147961255409/f #Main #Sandbox common issues https://app.asana.com/0/1141454022157257/1205782505653426/f###Deployment Script #https://app.asana.com/0/1141454022157257/1205590782781960 #main #Deployment Email Notification Implementation #https://app.asana.com/0/1141454022157257/1205590782781957###Branding: Receipt download #https://app.asana.com/0/1141454022157264/1203990832293576/f###Subscription: issue with adding new tax in the add subscription module #https://app.asana.com/0/0/1206158298015856/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Send Feedback: Alignment issue with send feedback Popup #https://app.asana.com/0/0/1205990010367267/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Able to add invalid value in Postal Code #https://app.asana.com/0/0/1206009654189540/f #Main #Follow up on Import Customer Functionality #https://app.asana.com/0/1141454022157264/1205819601058870/f###Follow up on Add ability to send invoices to multiple email addresses also to send draft to different email like we do for receipts #https://app.asana.com/0/1141454022157264/1205831256095045/f###Products & Services : Issue of alignment of row when products are added with varying image heights #https://app.asana.com/0/0/1206117982037679/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Date Details not displaying when perform Mark as Paid Action #https://app.asana.com/0/0/1206128024030664/f #Main #Follow up on Add ability to send invoices to multiple email addresses also to send draft to different email like we do for receipts #https://app.asana.com/0/1141454022157264/1205831256095045/f###Issue with Due date while admin save the invoice (draft invoice) #https://app.asana.com/0/0/1206128024030661/f #Main #Follow up on Add ability to send invoices to multiple email addresses also to send draft to different email like we do for receipts #https://app.asana.com/0/1141454022157264/1205831256095045/f###Issue with entering past due date manually #https://app.asana.com/0/0/1206128022480865/f #Main #Follow up on Add ability to send invoices to multiple email addresses also to send draft to different email like we do for receipts #https://app.asana.com/0/1141454022157264/1205831256095045/f###Issue with entering invalid email format in the CC receipt field #https://app.asana.com/0/0/1206128022480863/f #Main #Follow up on Add ability to send invoices to multiple email addresses also to send draft to different email like we do for receipts #https://app.asana.com/0/1141454022157264/1205831256095045/f###Issue with Send Email Notifications When toggles in send invoice window #https://app.asana.com/0/0/1206191760459751/f #Main #Follow up on Add ability to send invoices to multiple email addresses also to send draft to different email like we do for receipts #https://app.asana.com/0/1141454022157264/1205831256095045/f###Issue with enters the invalid data in the sameAsBillingAddress column #https://app.asana.com/0/0/1206139023915033/f #Follow up on Import Customer Functionality #https://app.asana.com/0/1141454022157264/1205819601058870/f###Tab and side bar options visibility issue in ADMIN section #https://app.asana.com/0/0/1206201202712655/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f##removed condition:login as user not redirecting in case of sys employee###Issue with Clear All Filter Tag in subscription module #https://app.asana.com/0/0/1206201538979394/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Issue while duplicate customer #https://app.asana.com/0/0/1206200990314346/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Branding: Receipt download #https://app.asana.com/0/1141454022157264/1203990832293576/f###Fixing amount issue in all pages (refund modal, tax modal and service fee modal, withdraw payout modal and other) #https://app.asana.com/0/0/1206099554412284/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Issue with changing / selecting the plan's popup model #https://app.asana.com/0/0/1206201538979396/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Issue with edit invoice and check product description #https://app.asana.com/0/0/1206191760459746/f #Main #Follow up on Add ability to send invoices to multiple email addresses also to send draft to different email like we do for receipts #https://app.asana.com/0/1141454022157264/1205831256095045/f###Hide plan downgrade modal while select free plan #https://app.asana.com/0/0/1206044309024717/f #Main #https://app.asana.com/0/1141454022157257/1205782505653426/f###UI modification in signup-success-page #https://app.asana.com/0/0/1206209923385170/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Subscription: issue with adding new tax in the add subscription module #https://app.asana.com/0/0/1206158298015856/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Message issue while paying invoice through multiple customers #https://app.asana.com/0/0/1206209860833173/f #Main #Follow up on Add ability to send invoices to multiple email addresses also to send draft to different email like we do for receipts #https://app.asana.com/0/1141454022157264/1205831256095045/f###Branding: Receipt download #https://app.asana.com/0/1141454022157264/1203990832293576/f##removed condition:login as user not redirecting in case of sys employee###Message issue while paying invoice through multiple customers #https://app.asana.com/0/0/1206209860833173/f###Recipients #https://app.asana.com/0/1141454022157257/1205590782781964 #main #Deployment Email Notification Implementation #https://app.asana.com/0/1141454022157257/1205590782781957###Recipients #https://app.asana.com/0/1141454022157257/1205590782781964 #main #Deployment Email Notification Implementation #https://app.asana.com/0/1141454022157257/1205590782781957##changes###Deployment Script #https://app.asana.com/0/1141454022157257/1205590782781960 #main #Deployment Email Notification Implementation #https://app.asana.com/0/1141454022157257/1205590782781957##Updated server port and version.";
                    def originalString = '#Fixing amount issue in all pages (refund modal, tax modal and service fee modal, withdraw payout modal and other) #https://app.asana.com/0/0/1206099554412284/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Fixed validation issue in shipping details field #https://app.asana.com/0/0/1206099554412285/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Fixed tooltip issue on customer details page #https://app.asana.com/0/0/1206099554412286/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Able to add invalid value in Postal Code #https://app.asana.com/0/0/1206009654189540/f #Main #Follow up on &#039;Import Customer Functionality&#039; #https://app.asana.com/0/1141454022157264/1205819601058870/f###Able to add invalid value in Postal Code #https://app.asana.com/0/0/1206009654189540/f #Main #Follow up on Import Customer Functionality #https://app.asana.com/0/1141454022157264/1205819601058870/f###Able to add invalid value in Postal Code #https://app.asana.com/0/0/1206009654189540/f #Main #Follow up on Import Customer Functionality #https://app.asana.com/0/1141454022157264/1205819601058870/f###Issue with entering past due date manually #https://app.asana.com/0/0/1206128022480865/f###Deployment Script #https://app.asana.com/0/1141454022157257/1205590782781960 #main #Deployment Email Notification Implementation #https://app.asana.com/0/1141454022157257/1205590782781957###Deployment Script #https://app.asana.com/0/1141454022157257/1205590782781960 #main #Deployment Email Notification Implementation #https://app.asana.com/0/1141454022157257/1205590782781957###Issue with add new tax when edit the subscription #https://app.asana.com/0/0/1206133016667203/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Deployment Script #https://app.asana.com/0/1141454022157257/1205590782781960 #main #Deployment Email Notification Implementation #https://app.asana.com/0/1141454022157257/1205590782781957###Deployment Script #https://app.asana.com/0/1141454022157257/1205590782781960 #main #Deployment Email Notification Implementation #https://app.asana.com/0/1141454022157257/1205590782781957###Deployment Script #https://app.asana.com/0/1141454022157257/1205590782781960 #main #Deployment Email Notification Implementation #https://app.asana.com/0/1141454022157257/1205590782781957###Issue with entering invalid email format in the CC receipt field #https://app.asana.com/0/0/1206128022480863/f #Main #Follow up on Add ability to send invoices to multiple email addresses also to send draft to different email like we do for receipts #https://app.asana.com/0/1141454022157264/1205831256095045/f###Date Details not displaying when perform Mark as Paid Action #https://app.asana.com/0/0/1206128024030664/f #Main #Follow up on Add ability to send invoices to multiple email addresses also to send draft to different email like we do for receipts #https://app.asana.com/0/1141454022157264/1205831256095045/f###Issue with view invoice by customer &amp; get email to admin #https://app.asana.com/0/0/1206128024030667/f #Main #Follow up on Add ability to send invoices to multiple email addresses also to send draft to different email like we do for receipts #https://app.asana.com/0/1141454022157264/1205831256095045/f###Fixing amount issue in all pages (refund modal, tax modal and service fee modal, withdraw payout modal and other) #https://app.asana.com/0/0/1206099554412284/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Issue with site title when user sign-out #https://app.asana.com/0/0/1206111050822091/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Date Details not displaying when perform Mark as Paid Action #https://app.asana.com/0/0/1206128024030664/f #Main #Follow up on Add ability to send invoices to multiple email addresses also to send draft to different email like we do for receipts #https://app.asana.com/0/1141454022157264/1205831256095045/f###Signup: Successful Message is not displaying in the medium Screen (1366*768) #https://app.asana.com/0/0/1205897602816593/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Issue with enters the invalid data in the &quot;sameAsBillingAddress&quot; column #https://app.asana.com/0/0/1206139023915033/f #Main #Follow up on Import Customer Functionality #https://app.asana.com/0/1141454022157264/1205819601058870/f###Able to add invalid value in Postal Code 01 #https://app.asana.com/0/0/1206009654189540/f #Main #Follow up on Import Customer Functionality #https://app.asana.com/0/1141454022157264/1205819601058870/f###Tab reset Issue on Subscription list #https://app.asana.com/0/0/1206149835111200/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Issue with entering past due date manually #https://app.asana.com/0/0/1206128022480865/f #Main #Follow up on Add ability to send invoices to multiple email addresses also to send draft to different email like we do for receipts #https://app.asana.com/0/1141454022157264/1205831256095045/f###Issue with site title when user sign-out #https://app.asana.com/0/0/1206111050822091/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Signup: Successful Message is not displaying in the medium Screen (1366*768) #https://app.asana.com/0/0/1205897602816593/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Date Details not displaying when perform Mark as Paid Action #https://app.asana.com/0/0/1206128024030664/f #Main #Follow up on Add ability to send invoices to multiple email addresses also to send draft to different email like we do for receipts #https://app.asana.com/0/1141454022157264/1205831256095045/f###Issue with site title when user sign-out #https://app.asana.com/0/0/1206111050822091/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Issue with site title when user sign-out #https://app.asana.com/0/0/1206111050822091/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Signup: Successful Message is not displaying in the medium Screen (1366*768) #https://app.asana.com/0/0/1205897602816593/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Issue with enters the invalid data in the sameAsBillingAddress column&nbsp; #https://app.asana.com/0/0/1206139023915033/f #Main #Follow up on Import Customer Functionality #https://app.asana.com/0/1141454022157264/1205819601058870/f###Issue with view invoice by customer &amp; get email to admin #https://app.asana.com/0/0/1206128024030667/f #Main #Follow up on Add ability to send invoices to multiple email addresses also to send draft to different email like we do for receipts #https://app.asana.com/0/1141454022157264/1205831256095045/f###Hide plan downgrade modal while select free plan #https://app.asana.com/0/0/1206044309024717/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f'
                    def decodedString = sh(script: "echo '${originalString}' | perl -MHTML::Entities -pe 'decode_entities(\$_)'", returnStdout: true).trim()
                    sh "curl -X POST -d \"projectName=test\" -d \"environment=test\" -d \"version=123\" -d \"buildUser=456\" -d \"commitMessages='${commitMessages}'\" -d \"deploymentStatus=failed\"  \"https://dev-api.paid.com:4903/admin/paid/versions\""

                    echo "Decoded String: ${decodedString}"
                }
            }
        }

        // Add more stages as needed
    }
}
