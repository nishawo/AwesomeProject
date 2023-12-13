pipeline {
    agent any

    environment {
        JOB_NAME = 'test-pipeline'
        CURRENT_BUILD = ''
        LAST_SUCCESSFUL_BUILD = ''
        PROJECT_NAME= "test"
        ENVIRONMENT = "dev"
        version = "1.0.2"
        BUILD_USER = "test"
        
    }

    stages {
        stage('Get Current Build') {
            steps {
                script {
                    def commitMessages = '#Fixing amount issue in all pages (refund modal, tax modal and service fee modal, withdraw payout modal and other) #https://app.asana.com/0/0/1206099554412284/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Fixed validation issue in shipping details field #https://app.asana.com/0/0/1206099554412285/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Fixed tooltip issue on customer details page #https://app.asana.com/0/0/1206099554412286/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Able to add invalid value in Postal Code #https://app.asana.com/0/0/1206009654189540/f #Main #Follow up on &#039;Import Customer Functionality&#039; #https://app.asana.com/0/1141454022157264/1205819601058870/f###Able to add invalid value in Postal Code #https://app.asana.com/0/0/1206009654189540/f #Main #Follow up on Import Customer Functionality #https://app.asana.com/0/1141454022157264/1205819601058870/f###Able to add invalid value in Postal Code #https://app.asana.com/0/0/1206009654189540/f #Main #Follow up on Import Customer Functionality #https://app.asana.com/0/1141454022157264/1205819601058870/f###Issue with entering past due date manually #https://app.asana.com/0/0/1206128022480865/f###Deployment Script #https://app.asana.com/0/1141454022157257/1205590782781960 #main #Deployment Email Notification Implementation #https://app.asana.com/0/1141454022157257/1205590782781957###Deployment Script #https://app.asana.com/0/1141454022157257/1205590782781960 #main #Deployment Email Notification Implementation #https://app.asana.com/0/1141454022157257/1205590782781957###Issue with add new tax when edit the subscription #https://app.asana.com/0/0/1206133016667203/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Deployment Script #https://app.asana.com/0/1141454022157257/1205590782781960 #main #Deployment Email Notification Implementation #https://app.asana.com/0/1141454022157257/1205590782781957###Deployment Script #https://app.asana.com/0/1141454022157257/1205590782781960 #main #Deployment Email Notification Implementation #https://app.asana.com/0/1141454022157257/1205590782781957###Deployment Script #https://app.asana.com/0/1141454022157257/1205590782781960 #main #Deployment Email Notification Implementation #https://app.asana.com/0/1141454022157257/1205590782781957###Issue with entering invalid email format in the CC receipt field #https://app.asana.com/0/0/1206128022480863/f #Main #Follow up on Add ability to send invoices to multiple email addresses also to send draft to different email like we do for receipts #https://app.asana.com/0/1141454022157264/1205831256095045/f###Date Details not displaying when perform Mark as Paid Action #https://app.asana.com/0/0/1206128024030664/f #Main #Follow up on Add ability to send invoices to multiple email addresses also to send draft to different email like we do for receipts #https://app.asana.com/0/1141454022157264/1205831256095045/f###Issue with view invoice by customer &amp; get email to admin #https://app.asana.com/0/0/1206128024030667/f #Main #Follow up on Add ability to send invoices to multiple email addresses also to send draft to different email like we do for receipts #https://app.asana.com/0/1141454022157264/1205831256095045/f###Fixing amount issue in all pages (refund modal, tax modal and service fee modal, withdraw payout modal and other) #https://app.asana.com/0/0/1206099554412284/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Issue with site title when user sign-out #https://app.asana.com/0/0/1206111050822091/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Date Details not displaying when perform Mark as Paid Action #https://app.asana.com/0/0/1206128024030664/f #Main #Follow up on Add ability to send invoices to multiple email addresses also to send draft to different email like we do for receipts #https://app.asana.com/0/1141454022157264/1205831256095045/f###Signup: Successful Message is not displaying in the medium Screen (1366*768) #https://app.asana.com/0/0/1205897602816593/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Issue with enters the invalid data in the &quot;sameAsBillingAddress&quot; column #https://app.asana.com/0/0/1206139023915033/f #Main #Follow up on Import Customer Functionality #https://app.asana.com/0/1141454022157264/1205819601058870/f###Able to add invalid value in Postal Code 01 #https://app.asana.com/0/0/1206009654189540/f #Main #Follow up on Import Customer Functionality #https://app.asana.com/0/1141454022157264/1205819601058870/f###Tab reset Issue on Subscription list #https://app.asana.com/0/0/1206149835111200/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Issue with entering past due date manually #https://app.asana.com/0/0/1206128022480865/f #Main #Follow up on Add ability to send invoices to multiple email addresses also to send draft to different email like we do for receipts #https://app.asana.com/0/1141454022157264/1205831256095045/f###Issue with site title when user sign-out #https://app.asana.com/0/0/1206111050822091/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Signup: Successful Message is not displaying in the medium Screen (1366*768) #https://app.asana.com/0/0/1205897602816593/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Date Details not displaying when perform Mark as Paid Action #https://app.asana.com/0/0/1206128024030664/f #Main #Follow up on Add ability to send invoices to multiple email addresses also to send draft to different email like we do for receipts #https://app.asana.com/0/1141454022157264/1205831256095045/f###Issue with site title when user sign-out #https://app.asana.com/0/0/1206111050822091/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Issue with site title when user sign-out #https://app.asana.com/0/0/1206111050822091/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Signup: Successful Message is not displaying in the medium Screen (1366*768) #https://app.asana.com/0/0/1205897602816593/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f###Issue with enters the invalid data in the sameAsBillingAddress column&nbsp; #https://app.asana.com/0/0/1206139023915033/f #Main #Follow up on Import Customer Functionality #https://app.asana.com/0/1141454022157264/1205819601058870/f###Issue with view invoice by customer &amp; get email to admin #https://app.asana.com/0/0/1206128024030667/f #Main #Follow up on Add ability to send invoices to multiple email addresses also to send draft to different email like we do for receipts #https://app.asana.com/0/1141454022157264/1205831256095045/f###Hide plan downgrade modal while select free plan #https://app.asana.com/0/0/1206044309024717/f #Main #Sandbox common issues #https://app.asana.com/0/1141454022157257/1205782505653426/f'
                    def decodedString = sh(script: """echo '${originalString}' | sed 's/\\&\#039\\;/\\x27/g'""", returnStdout: true).trim()               
                    sh "curl -X POST -d \"projectName=${PROJECT_NAME}\" -d \"environment=${ENVIRONMENT}\" -d \"version=${version}\" -d \"buildUser=${BUILD_USER}\" -d \"escapedMessage='${commitMessages}'\" -d \"commitMessages=${commitMessages}\" -d \"deploymentStatus=success\" \"https://dev-api.paid.com:4903/admin/paid/versions\""     
                    echo "${decodedString} ${commitMessages}"
                    // CURRENT_BUILD = currentBuild.getNumber()
                    // echo "Current Build for ${JOB_NAME}: ${CURRENT_BUILD}"
                }
            }
        }

        // stage('Get Last Successful Build') {
        //     steps {
        //         script {
        //             def lastSuccessfulBuild = currentBuild.rawBuild.getPreviousSuccessfulBuild()

        //             if (lastSuccessfulBuild) {
        //                 LAST_SUCCESSFUL_BUILD = lastSuccessfulBuild.getNumber()
        //                 echo "Last Successful Build for ${JOB_NAME}: ${LAST_SUCCESSFUL_BUILD}"
        //             } else {
        //                 error "No previous successful build found for ${JOB_NAME}"
        //             }
        //         }
        //     }
        // }

        // stage('Get Changes') {
        //     steps {
        //         script {
        //             def changes = []
        //             def currentBuildObject = currentBuild

        //             if (LAST_SUCCESSFUL_BUILD) {
        //                 def lastSuccessfulBuildObject = Jenkins.instance.getItemByFullName(JOB_NAME).getBuildByNumber(LAST_SUCCESSFUL_BUILD)

        //                 if (lastSuccessfulBuildObject) {
        //                     def changeSets = currentBuildObject.changeSets
        //                     changes = changeSets.collectMany { changeSet ->
        //                         changeSet.getItems().collect { item ->
        //                             "${item.getCommitId()}: ${item.getMsgAnnotated()}"
        //                         }
        //                     }
        //                 } else {
        //                     error "No information found for the last successful build number ${LAST_SUCCESSFUL_BUILD}"
        //                 }
        //             } else {
        //                 error "LAST_SUCCESSFUL_BUILD is not set. Ensure 'Get Last Successful Build' stage is executed."
        //             }

        //             if (changes) {
        //                 echo "Changes between builds ${LAST_SUCCESSFUL_BUILD} and ${CURRENT_BUILD}:"
        //                 echo changes.join('\n')
        //             } else {
        //                 echo "No changes found between builds ${LAST_SUCCESSFUL_BUILD} and ${CURRENT_BUILD}."
        //             }
        //         }
        //     }
        // }

    }
}
