def fileContents

pipeline {
    agent any

    stages {
        stage('Build React App') {
            steps {
                script {
                    // Read and extract version from metro.config.js
                    fileContents = readFile('metro.config.js').trim()
                    echo "Config File Contents:\n${fileContents}"
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}