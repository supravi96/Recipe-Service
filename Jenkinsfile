pipeline {
    agent any

    tools {
        nodejs 'NodeJS 22.5.0'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build VSIX') {
            when {
                anyOf {
                    changeset "vs/**"
                    changeset "Jenkinsfile"
                    expression { return env.CHANGE_ID != null }
                }
            }

            steps {
                dir('vs') {
                    echo "installing dependencies"
                    bat 'npm install'

                    echo 'compiling'
                    bat 'npm run compile'

                    echo 'Packaging VSIX'
                    bat 'npx @vscode/vsce package'
                }
            }
        }

        stage('Upload VSIX') {
            steps {
                echo 'Uploading VSIX'
                archiveArtifacts artifacts: 'vs/*.vsix', fingerprint: true
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished'
        }

        success {
            echo 'Pipeline success'
        }

        failure {
            echo 'Pipeline failed'
        }
    }
}