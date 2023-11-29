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
                    def lastSuccessfulBuild = "curl -s '${JENKINS_URL}/job/${JOB_NAME}/api/json?tree=builds[number,result]{0,1}&pretty=true' | jq -r '.builds[] | select(.result == \"SUCCESS\") | .number'"
                    echo "Last Successful Build for ${JOB_NAME}: ${lastSuccessfulBuild}"
                    env.LAST_SUCCESSFUL_BUILD = lastSuccessfulBuild
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