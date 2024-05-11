pipeline {
  agent any
  stages {
    stage('checkCode') {
      steps {
        git(url: 'https://github.com/dhs26206/ResQMaster-OpenSource', branch: 'main')
      }
    }

    stage('ShowFiles') {
      parallel {
        stage('ShowFiles') {
          steps {
            sh 'ls -la'
          }
        }

        stage('NPM Install') {
          steps {
            sh 'npm i'
          }
        }

        stage('Bun') {
          steps {
            sh '''bun i
ls'''
          }
        }

      }
    }

  }
}