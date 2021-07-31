pipeline {
  agent any
  stages {
    stage('Startup') {
      steps {
        script {
          bat 'npm install'
        }
      }
    }
    stage('Test') {
      steps {
        script {
          bat 'npm run test'
        }
      }
    }
    stage('Build') {
      steps {
        script {
          bat 'npm start'
        }
      }
    }
  }
}