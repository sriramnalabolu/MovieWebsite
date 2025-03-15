pipeline {
    agent any
    stages {
        stage("Tool Checkup") {
            steps {
                //since we are running jenkins on windows, we are using bat but if on linux, we need to use sh
                sh '''
                    docker info
                    docker version
                    docker-compose version
                '''
            }
        }
        //testing6
        stage("Building Docker Images") {
            steps {
                sh '''
                    docker-compose build
                '''
            }
        }
        stage("Running Containers") {
            steps {
                sh '''
                    docker-compose up -d
                '''
            }
        }
    }
}
