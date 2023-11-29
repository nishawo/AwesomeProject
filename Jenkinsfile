pipeline {
    agent any

    environment {
        JOB_NAME = 'test-pipeline'
        JENKINS_URL = 'http://localhost:8080'
    }

    stages {
        stage('Get Last Successful Build') {
            steps {
                script {
                    // Get information about the last successful build
                    def lastSuccessfulBuildResponse = sh(script: "curl -s '${JENKINS_URL}/job/${JOB_NAME}/lastSuccessfulBuild/buildNumber'", returnStdout: true).trim()

                    echo "Raw response for last successful build number: ${lastSuccessfulBuildResponse}"

                    def parsedLastSuccessfulBuild
                    try {
                        parsedLastSuccessfulBuild = Integer.parseInt(lastSuccessfulBuildResponse)
                        echo "Parsed last successful build number: ${parsedLastSuccessfulBuild}"
                    } catch (Exception e) {
                        error "Error parsing last successful build number: ${e.message}"
                    }

                    if (parsedLastSuccessfulBuild) {
                        env.LAST_SUCCESSFUL_BUILD = parsedLastSuccessfulBuild
                        echo "Last Successful Build for ${JOB_NAME}: ${env.LAST_SUCCESSFUL_BUILD}"
                    } else {
                        error "No valid last successful build number found in the response."
                    }
                }
            }
        }

   
        // stage('Get Changes') {
        //     steps {
        //         script {
        //             // Get details about changes in the range of builds
        //             def changes = sh(script: "curl -s '${JENKINS_URL}/job/${JOB_NAME}/${env.LAST_SUCCESSFUL_BUILD},${env.CURRENT_BUILD}/api/json?tree=builds[changeSet[items[commitId,comment]{0,10}]]&pretty=true' | jq -r \'.builds[].changeSet.items[] | \"\\(.commitId): \\(.comment)\"'", returnStdout: true).trim()

        //             if (changes) {
        //                 echo "Changes between builds ${env.LAST_SUCCESSFUL_BUILD} and ${env.CURRENT_BUILD}:"
        //                 echo changes
        //             } else {
        //                 echo "No changes found between builds ${env.LAST_SUCCESSFUL_BUILD} and ${env.CURRENT_BUILD}."
        //             }
        //         }
        //     }
        // }
    }
}