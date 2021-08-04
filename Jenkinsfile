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
        bat 'npx jest --coverage --coverageDirectory=output/coverage/jest'
      }
      post {
        always {
          junit 'output/coverage/junit/junit.xml'
        }
      }      
    }
    stage('Build') {
      steps {
          bat 'npm start'
      }
    }
  }
}