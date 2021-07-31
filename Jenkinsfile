pipeline {
  agent any
    tools {
    nodejs 'node'
  }
  environment {
    CI = 'true' 
  }
  stages {


    stage('Build') {
      steps {
          bat 'npm start'
      }
    }
  }
}