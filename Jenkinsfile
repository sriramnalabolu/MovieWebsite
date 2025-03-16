pipeline {
    agent any
    stages {
        stage("Tool Checkup") {
            steps {
                //since we are running jenkins on windows, we are using bat but if on linux, we need to use sh
                bin '''
                    docker info
                    docker version
                    docker-compose version
                '''
            }
        }
        //testing4
        stage("Building Docker Images") {
            steps {
                bin '''
                    docker-compose build
                '''
            }
        }
        stage("Running Containers") {
            steps {
                bin '''
                    docker-compose up -d
                '''
            }
        }
    }
}
