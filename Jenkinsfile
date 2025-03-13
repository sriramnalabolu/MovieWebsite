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
        stage("Docker Compose Down") {
            steps {
                bat '''
                    docker-compose down
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
