pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = 'payrixonboarding-api-v1.dashboard'
        DESTINATION_FOLDER = '/D/projects/React-Native'
    }
    
    stages {
        stage('Build React App') {
            steps {
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
            echo "${BUILD_USER}"
            echo 'Pipeline completed successfully.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
