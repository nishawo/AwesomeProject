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

                    // Use a regular expression to extract the exported object
                    def objectMatch = fileContents =~ /const AppConfig = (\{[^}]+\});/
                    def objectJson = objectMatch ? objectMatch[0][1] : null

                    if (objectJson == null) {
                        error 'Failed to extract the AppConfig object from config file.'
                    }

                    // Parse the JSON representation of the object
                    def appConfig = readJSON(text: objectJson)

                    // Access the 'version' property of the AppConfig object
                    host = appConfig.host
                    port = appConfig.port

                    if (version == null) {
                        error 'Failed to extract version from AppConfig object.'
                    }

                    echo "Version: ${version}"
                    def url = "https://${host}:${port}"
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