pipeline {
  agent any
  stages {
    stage('checkCode') {
      steps {
        git(url: 'https://github.com/dhs26206/ResQMaster-OpenSource', branch: 'main')
      }
    }

    stage('ShowFiles') {
      steps {
        sh 'ls -la'
      }
    }

    stage('') {
      steps {
        sh '$PATH'
      }
    }

  }
}