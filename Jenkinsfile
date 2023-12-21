pipeline {
    agent any

    stages {
        stage('Escape and Send Data') {
            steps {
                script {
                    // Data to be sent
                    def dataToSend = "Your data with special characters: & ? = !"

                    // Escape the data using URLEncoder
                    def escapedData = URLEncoder.encode(dataToSend, 'UTF-8')
                    echo "${escapedData}"

                    // Use curl to send the data
                    // sh "curl -X POST -d 'data=${escapedData}' https://your-api-endpoint"
                }
            }
        }
    }
}
