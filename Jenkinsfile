def fileContents

pipeline {
    agent any

    stages {
        stage('Build React App') {
            steps {
                script {
                    // Read and extract version from metro.config.js
                    fileContents = readFile('src/app-config.js').trim()
                    echo "Config File Contents:\n${fileContents}"
                    // Use a regular expression to extract the version
                    def versionMatch = fileContents =~ /version:\s*'([\d.]+)'\s*,/
                    def version = versionMatch ? versionMatch[0][1] : null

                    if (version == null) {
                        error 'Failed to extract version from config file.'
                    }

                    echo "Version: ${version}"
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