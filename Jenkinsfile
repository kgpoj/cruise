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
                echo 'Building..'
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
