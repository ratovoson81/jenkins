pipeline {
  agent any
    tools {
    nodejs 'node'
  }
  environment {
    CI = 'true' 
  }
  stages {
    stage('Startup') {
      steps {
        bat 'npm install'
      }
    }

    stage('Build') {
      steps {
          bat 'npm start'
      }
    }
  }
}