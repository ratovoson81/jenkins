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
    stage('Test') {
      steps {
        bat 'npm test a'
      }
    }
    stage('Build') {
      steps {
          bat 'npm start'
      }
    }
  }
}