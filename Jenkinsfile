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
                    def lastSuccessfulBuild = sh(script: "curl -s '${JENKINS_URL}/job/${JOB_NAME}/api/json?tree=builds[number,result]{0,1}&pretty=true' | jq -r '.builds[] | select(.result == \"SUCCESS\") | .number'", returnStdout: true).trim()
                    echo "Last Successful Build for ${JOB_NAME}: ${lastSuccessfulBuild}"
                    env.LAST_SUCCESSFUL_BUILD = lastSuccessfulBuild
                }
            }
        }
        stage('Get Current Build') {
            steps {
                script {
                    // Get information about the current build
                    def currentBuild = sh(script: "curl -s '${JENKINS_URL}/job/${JOB_NAME}/lastBuild/api/json?tree=number&pretty=true'", returnStdout: true).trim()

                    echo "Raw JSON response for current build: ${currentBuild}"

                    def parsedCurrentBuild
                    try {
                        parsedCurrentBuild = readJSON(text: currentBuild)
                        echo "Parsed JSON response for current build: ${parsedCurrentBuild}"
                    } catch (Exception e) {
                        error "Error parsing JSON response for current build: ${e.message}"
                    }

                    if (parsedCurrentBuild && parsedCurrentBuild.number) {
                        env.CURRENT_BUILD = parsedCurrentBuild.number
                        echo "Current Build for ${JOB_NAME}: ${env.CURRENT_BUILD}"
                    } else {
                        error "No valid current build information found in the JSON response."
                    }
                }
            }
        }

        // stage('Get Current Build') {
        //     steps {
        //         script {
        //             // Get information about the current build
        //             def currentBuild = sh(script: "curl -s '${JENKINS_URL}/job/${JOB_NAME}/lastBuild/api/json?tree=number&pretty=true' | jq -r '.number'", returnStdout: true).trim()
        //             echo "Current Build for ${JOB_NAME}: ${currentBuild}"
        //             env.CURRENT_BUILD = currentBuild
        //         }
        //     }
        // }
        stage('Get Changes') {
            steps {
                script {
                    // Get details about changes in the range of builds
                    def changes = sh(script: "curl -s '${JENKINS_URL}/job/${JOB_NAME}/${env.LAST_SUCCESSFUL_BUILD},${env.CURRENT_BUILD}/api/json?tree=builds[changeSet[items[commitId,comment]{0,10}]]&pretty=true'", returnStdout: true).trim()

                    echo "Raw JSON response for changes: ${changes}"

                    def parsedChanges
                    try {
                        parsedChanges = readJSON(text: changes)
                        echo "Parsed JSON response for changes: ${parsedChanges}"
                    } catch (Exception e) {
                        error "Error parsing JSON response for changes: ${e.message}"
                    }

                    if (parsedChanges && parsedChanges.builds && parsedChanges.builds[0]?.changeSet?.items) {
                        def changesList = parsedChanges.builds[0].changeSet.items.collect { item ->
                            "${item.commitId}: ${item.comment}"
                        }

                        if (changesList) {
                            echo "Changes between builds ${env.LAST_SUCCESSFUL_BUILD} and ${env.CURRENT_BUILD}:"
                            echo changesList.join('\n')
                        } else {
                            echo "No changes found between builds ${env.LAST_SUCCESSFUL_BUILD} and ${env.CURRENT_BUILD}."
                        }
                    } else {
                        echo "No valid changes information found in the JSON response."
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