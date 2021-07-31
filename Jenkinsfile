pipeline {
  stages {
    stage('Startup') {
      steps {
        script {
          sh 'npm install'
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