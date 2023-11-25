pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = 'payrixonboarding-api-v1.dashboard'
        DESTINATION_FOLDER = '/D/projects/React-Native'
        BUILD_USER = 'ToBeSet'
    }
    
    stages {
        stage('Build React App') {
            steps {
                 script {
                def build = currentBuild.rawBuild
                
                try {
                    def cause = build.getCause(hudson.model.Cause.UserIdCause.class)
                    BUILD_USER = cause.getUserName()
                } catch(Exception ex) {
                    println "\n\n-- Build caused by either Multi-Branch Pipeline Scanning -or- Timer i.e. not directly by a logged in user\n";
                    BUILD_USER = "Multi_Branch_Scan_or_Timer"
                }
                    echo "${BUILD_USER}"

                    def jsExport = readFile "src/app-config.js"
                    def regex = /version\s*:\s*'([\d.]+)'\s*,/
                    def result = (jsExport =~ regex)
                    
                    echo "${result[0][0]}"
                 }
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
