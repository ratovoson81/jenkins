pipeline {
  agent any
    tools {
    nodejs 'default-nodejs'
  }
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