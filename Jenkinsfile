pipeline {
    agent any
    stages {
        stage("Tool Checkup") {
            steps {
                bat '''
                    docker info
                    docker version
                    docker compose version
                '''
            }
        }
        stage("Docker Compose Build") {
            steps {
                bat '''
                    docker-compose build
                '''
            }
        }
        stage("Docker Compose Up") {
            steps {
                bat '''
                    docker-compose up -d
                '''
            }
        }
    }
}
