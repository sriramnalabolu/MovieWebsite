pipeline {
    agent any
    stages {
        stage("Tool Checkup") {
            steps {
                sh '''
                    docker info
                    docker version
                    docker compose version
                '''
            }
        }
        stage("Docker Compose Build") {
            steps {
                sh '''
                    docker-compose build
                '''
            }
        }
        stage("Docker Compose Up") {
            steps {
                sh '''
                    docker-compose up -d
                '''
            }
        }
    }
}
