pipeline {
  agent any
    tools {
    nodejs 'node'
  }
  environment {
    CI = 'true' 
  }
  stages {
    stage('Test') {
      steps {
        bat 'npx jest --coverage --coverageDirectory=output/coverage/jest'
      }
      post {
        always {
          step([$class: 'CoberturaPublisher', coberturaReportFile: 'output/coverage/jest/cobertura-coverage.xml'])
        }
        failure {  
             mail bcc: '', body: "<b>Rapport test</b><br>Project: ${env.JOB_NAME} <br>Développeur: ${env.GIT_AUTHOR_NAME}, e-mail: ${env.GIT_AUTHOR_EMAIL} <br>Build Number: ${env.BUILD_NUMBER} <br>Url git commit: https://github.com/ratovoson81/jenkins/commit/${env.GIT_COMMIT} <br> URL de build: ${env.BUILD_URL}",  cc: '', charset: 'UTF-8', from: '', mimeType: 'text/html', replyTo: '', subject: "ERROR CI: Project name -> ${env.JOB_NAME}", to: "ratovoson81@gmail.com";  
         }
      }     
    }

  }
}
