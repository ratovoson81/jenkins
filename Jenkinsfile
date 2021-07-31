pipeline {
  agent any
    tools {
    nodejs 'node'
  }
  stages {
    stage('Startup') {
      steps {
        bat 'npm install'
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