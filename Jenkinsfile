pipeline {
    agent any

    tools {
        nodejs 'NodeJS 18.20.8'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', 
                url: 'https://github.com/supravi96/Recipe-Service.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies'
                bat 'node -v'
                bat 'npm -v'
                bat 'npm install'
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