pipeline {
    agent any

    tools {
        nodejs 'Node 18'
    }
    
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', 
                url: 'https://github.com/dhdhgb/Recipe-Service.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies'
                sh 'npm install'
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