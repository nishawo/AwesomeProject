pipeline {
    agent any

    stages {
        stage('Decode HTML Entities') {
            steps {
                script {
                    def originalString = 'This is a string with &#039; and &lt;b&gt; HTML-encoded characters.'
                    def decodedString = sh(script: "python -c 'import html; print(html.unescape(\"\"\"${originalString}\"\"\"))'", returnStdout: true).trim()

                    echo "Decoded String: ${decodedString}"
                }
            }
        }

        // Add more stages as needed
    }
}
