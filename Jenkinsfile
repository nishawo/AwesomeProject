pipeline {
    agent any

    environment {
        JOB_NAME = 'test-pipeline'
        CURRENT_BUILD = ''
        LAST_SUCCESSFUL_BUILD = ''
    }

    stages {
        stage('Get Current Build') {
            steps {
                script {
                    CURRENT_BUILD = currentBuild.getNumber()
                    echo "Current Build for ${JOB_NAME}: ${CURRENT_BUILD}"
                }
            }
        }

        stage('Get Last Successful Build') {
            steps {
                script {
                    def lastSuccessfulBuild = currentBuild.rawBuild.getPreviousSuccessfulBuild()

                    if (lastSuccessfulBuild) {
                        LAST_SUCCESSFUL_BUILD = lastSuccessfulBuild.getNumber()
                        echo "Last Successful Build for ${JOB_NAME}: ${LAST_SUCCESSFUL_BUILD}"
                    } else {
                        error "No previous successful build found for ${JOB_NAME}"
                    }
                }
            }
        }

        stage('Get Changes') {
            steps {
                script {
                    def changes = []
                    def currentBuildObject = currentBuild

                    if (LAST_SUCCESSFUL_BUILD) {
                        def lastSuccessfulBuildObject = currentBuildObject.parent.builds.find { it.number == LAST_SUCCESSFUL_BUILD }

                        if (lastSuccessfulBuildObject) {
                            def changeSets = currentBuildObject.changeSets
                            changes = changeSets.collectMany { changeSet ->
                                changeSet.getItems().collect { item ->
                                    "${item.getCommitId()}: ${item.getMsgAnnotated()}"
                                }
                            }
                        } else {
                            error "No information found for the last successful build number ${LAST_SUCCESSFUL_BUILD}"
                        }
                    } else {
                        error "LAST_SUCCESSFUL_BUILD is not set. Ensure 'Get Last Successful Build' stage is executed."
                    }

                    if (changes) {
                        echo "Changes between builds ${LAST_SUCCESSFUL_BUILD} and ${CURRENT_BUILD}:"
                        echo changes.join('\n')
                    } else {
                        echo "No changes found between builds ${LAST_SUCCESSFUL_BUILD} and ${CURRENT_BUILD}."
                    }
                }
            }
        }

        // ... (rest of your stages)
    }
}
