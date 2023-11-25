pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = 'payrixonboarding-api-v1.dashboard'
        DESTINATION_FOLDER = '/D/projects/React-Native'
    }
    
    stages {
        stage('Build React App') {
            steps {
                def build = currentBuild.rawBuild
                def BUILD_USER = "ToBeSet"

                try {
                    def cause = build.getCause(hudson.model.Cause.UserIdCause.class)
                    BUILD_USER = cause.getUserName()
                } catch(Exception ex) {
                    println "\n\n-- Build caused by either Multi-Branch Pipeline Scanning -or- Timer i.e. not directly by a logged in user\n";
                    BUILD_USER = "Multi_Branch_Scan_or_Timer"
                }
                echo "${BUILD_USER}"

                
                // sh 'docker build -t ${DOCKER_IMAGE} .'
            }
        }
        
        // stage('Run Docker Image') {
        //     steps {
        //         sh "docker run -p 80:80 ${DOCKER_IMAGE}"
        //     }
        // }

        // stage('Transfer Build') {
        //     steps {
        //         sh "docker cp ${DOCKER_IMAGE}:/app/build ${DESTINATION_FOLDER}"
        //     }
        // }
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
