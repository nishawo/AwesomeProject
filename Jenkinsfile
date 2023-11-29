def appVonfigContents
def version
def port
def host
pipeline {
    agent any

    environment {
        JOB_NAME = 'test-pipeline'
        JENKINS_URL = 'http://localhost:8080'
    }
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

                     // Get information about the last successful build
                    def lastSuccessfulBuild = sh(script: "curl -s '${JENKINS_URL}/job/${JOB_NAME}/api/json?tree=builds[number,result]{0,1}&pretty=true' | jq -r '.builds[] | select(.result == \"SUCCESS\") | .number'", returnStdout: true).trim()
                    echo "Last Successful Build for ${JOB_NAME}: ${lastSuccessfulBuild}"
                    env.LAST_SUCCESSFUL_BUILD = lastSuccessfulBuild
                    // Get information about the current build
                    def currentBuild = sh(script: "curl -s '${JENKINS_URL}/job/${JOB_NAME}/lastBuild/api/json?tree=number&pretty=true' | jq -r '.number'", returnStdout: true).trim()
                    echo "Current Build for ${JOB_NAME}: ${currentBuild}"
                    env.CURRENT_BUILD = currentBuild
                    // Get details about changes in the range of builds
                    def changes = sh(script: "curl -s '${JENKINS_URL}/job/${JOB_NAME}/${env.LAST_SUCCESSFUL_BUILD},${env.CURRENT_BUILD}/api/json?tree=builds[changeSet[items[commitId,comment]{0,10}]]&pretty=true' | jq -r '.builds[].changeSet.items[] | \"\(.commitId): \(.comment)\"'", returnStdout: true).trim()

                    if (changes) {
                        echo "Changes between builds ${env.LAST_SUCCESSFUL_BUILD} and ${env.CURRENT_BUILD}:"
                        echo changes
                    } else {
                        echo "No changes found between builds ${env.LAST_SUCCESSFUL_BUILD} and ${env.CURRENT_BUILD}."
                    } 
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