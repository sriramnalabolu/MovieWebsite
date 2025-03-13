pipeline {
    agent any
    stages {
        stage("tool checkup") {
            sh '''
                docker info
                docker version
                docker compose version
            '''
        }
        stage("docker compose build") {
            steps {
                sh '''
                    docker-compose build .
                '''
            }
        }
        stage("docker compose up") {
            steps {
                sh '''
                    docker-compose up
                '''
            }
        }
    }
}