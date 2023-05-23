pipeline {
    agent any

    tools {nodejs "NODEJS"}

    stages {
        stage('Test') {
            steps {
                sh 'npm install'
                sh 'npm run lint'
                sh 'npm run test'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                script {
                    def instanceHost = '3.26.103.169'
                    def remotePath = '/var/www/html'

                    // Start SSH agent and add private key
                    sshagent(credentials: ['ec2-ssh-key']) {
                        // Copy build files to EC2 instance using SCP
                        sh "scp -o StrictHostKeyChecking=no -r build/ ec2-user@${instanceHost}:${remotePath}"

                        // Restart Nginx
                        sh "ssh -o StrictHostKeyChecking=no ec2-user@${instanceHost} sudo service nginx restart"
                    }
                }
            }
        }
    }
}
