pipeline {
    agent any
    stages {
        stage("Tool Checkup") {
            steps {
                //since we are running jenkins on windows, we are using bat but if on linux, we need to use sh
                bat '''
                    docker info
                    docker version
                    docker-compose version
                '''
            }
        }
        //testing1
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
                    docker-compose up -d
                '''
            }
        }
    }
}
