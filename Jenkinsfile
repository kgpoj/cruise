pipeline {
    agent any

    tools {nodejs "NODEJS"}

    stages {
        stage('Test') {
            steps {
                sh 'npm install'
                sh 'npm run test'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run Build'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                sh 'node --version'
            }
        }
    }
}
