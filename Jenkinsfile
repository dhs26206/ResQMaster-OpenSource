pipeline {
    agent any

    environment {
        NVM_DIR = "$HOME/.nvm"
    }

    stages {
        stage('Initialize NVM') {
            steps {
                sh '''
                export NVM_DIR="$HOME/.nvm"
                [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
                [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
                nvm install 20.13.1
                nvm use 20.13.1
                '''
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('List Files') {
            steps {
                sh 'ls -al'
            }
        }
    }
}
