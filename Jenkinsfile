pipeline {
  agent any
    tools {
    nodejs 'node'
  }
  environment {
    USER_CREDENTIALS = credentials('usernamePassword')
    CI = 'true' 
    URL_GIT_COMMIT = "https://github.com/ratovoson81/jenkins"
    AUTHOR_NAME = bat (
      script: "git log -1 --pretty=%%an ${env.GIT_COMMIT}", 
      returnStdout: true).split('\r\n')[2].trim()
    AUTHOR_EMAIL = bat (
      script: "git log -1 --pretty=%%ae ${env.GIT_COMMIT}",
      returnStdout: true
    ).split('\r\n')[2].trim()
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
          step([$class: 'CoberturaPublisher', coberturaReportFile: 'output/coverage/jest/cobertura-coverage.xml'])
          junit 'output/coverage/junit/junit.xml'
        }
        failure {  
             mail bcc: '', body: "<b>Rapport test</b><br>Project: ${env.JOB_NAME} <br>D&eacute;veloppeur: ${AUTHOR_NAME}, e-mail: ${AUTHOR_EMAIL} <br>Build Number: ${env.BUILD_NUMBER} <br>Url git commit: ${URL_GIT_COMMIT}/commit/${env.GIT_COMMIT} <br> URL de build: ${env.BUILD_URL}",  cc: '', charset: 'UTF-8', from: '', mimeType: 'text/html', replyTo: '', subject: "Rapport test CI: Project name -> ${env.JOB_NAME}", to: "ratovoson81@gmail.com";  
         }
      }     
    }
    stage('Publish') {
      steps {
        echo "${$USER_CREDENTIALS_USR}"
        bat "git config user.name ${AUTHOR_NAME}"
        bat "git config user.email ${AUTHOR_EMAIL}"
        bat 'git checkout master'
        bat 'git pull origin master'
        bat 'git merge origin/dev'
        bat("git push https://github.com/ratovoson81/jenkins.git")
      }
    }
  }
}
