pipeline {
  agent any
    tools {
    nodejs 'node'
  }
  stages {
    stage('Startup') {
      steps {
        script {
          bat 'npm run install'
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