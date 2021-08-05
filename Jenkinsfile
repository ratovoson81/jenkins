pipeline {
  agent any
    tools {
    nodejs 'node'
  }
  environment {
    CI = 'true' 
    URL_GIT_COMMIT = "https://github.com/ratovoson81/jenkins"
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
             mail bcc: '', body: "<b>Rapport test</b><br>Project: ${env.JOB_NAME} <br>Développeur: ${env.CHANGE_URL}, e-mail: ${env.CHANGE_TITLE} <br>Build Number: ${env.BUILD_NUMBER} <br>Url git commit: ${env.URL_GIT_COMMIT}/commit/${env.GIT_COMMIT} <br> URL de build: ${env.BUILD_URL} <br> ${env.CHANGE_AUTHOR} <br> ${env.CHANGE_AUTHOR_DISPLAY_NAME} <br> ${env.CHANGE_AUTHOR_EMAIL}",  cc: '', charset: 'UTF-8', from: '', mimeType: 'text/html', replyTo: '', subject: "ERROR CI: Project name -> ${env.JOB_NAME}", to: "ratovoson81@gmail.com";  
         }
      }     
    }

  }
}
