pipeline {
    agent any
    stages {
        stage("Tool Checkup") {
            steps {
                //since we are running jenkins on windows, we are using bat but if on linux, we need to use sh
                bat '''
                    docker info
                    docker version
                    docker compose version
                '''
            }
        }
        stage("Removing Docker Containers") {
            steps {
                bat '''
                    docker ps
                '''
            }
        }
        stage("Building Docker Images") {
            steps {
                bat '''
                    docker-compose build
                '''
            }
        }
        stage("Running Containers") {
            steps {
                bat '''
                    docker ps
                    docker-compose up -d
                '''
            }
        }
    }
}
