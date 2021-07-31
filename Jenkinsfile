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
          sh 'npm run test'
        }
      }
    }
    stage('Build') {
      steps {
        script {
          sh 'npm start'
        }
      }
    }
  }
}