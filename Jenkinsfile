def appVonfigContents
def version
def port
def host
pipeline {
    agent any

    stages {
        stage('Build React App') {
            steps {
                script {
                    // Read and extract version from metro.config.js
                    appVonfigContents = readFile('src/app-config.js').trim()
                    echo "Config File Contents:\n${appVonfigContents}"
                    // Use a regular expression to extract the version
                    def versionMatch = appVonfigContents =~ /version:\s*'([\d.]+)'\s*,/
                    version = versionMatch ? versionMatch[0][1] : null

                    if (version == null) {
                        error 'Failed to extract version from config file.'
                    }

                    echo "Version: ${version}"

                   
                    // Dynamically replace values based on environment variables
                    appVonfigContents = appVonfigContents.replaceAll(/process\.env\.(\w+)/) { _, key ->
                        // Read corresponding values from environment variables
                        def envValue = sh(script: "echo \${${key}}", returnStdout: true).trim()
                        envValue ?: "''"  // Replace with an empty string if the environment variable is not set
                    }

                    // Use a regular expression to extract the exported object
                    def objectMatch = appVonfigContents =~ /export default (\{[^}]+\});/
                    def objectJson = objectMatch ? objectMatch[0][1] : null

                    if (objectJson == null) {
                        error 'Failed to extract the AppConfig object from the config file.'
                    }

                    // Parse the JSON representation of the object
                    def appConfig = readJSON(text: objectJson)

                    // Access properties of the AppConfig object
                    version = appConfig.version
                    host = appConfig.host
                    port = appConfig.port
                   

                    echo "Version: ${version}"
                    echo "Host: ${host}"
                    echo "Port: ${port}"
                    
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