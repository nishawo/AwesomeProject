pipeline {
    agent any

    stages {
        stage('Decode HTML Entities') {
            steps {
                script {
                    def originalString = 'This is a string with &#039; and &lt;b&gt; HTML-encoded characters.'
                    def decodedString = sh(script: "echo '${originalString}' | perl -MHTML::Entities -pe 'decode_entities(\$_)'", returnStdout: true).trim()

                    echo "Decoded String: ${decodedString}"
                }
            }
        }

        // Add more stages as needed
    }
}
