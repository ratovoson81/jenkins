pipeline {
  agent any
    tools {
    nodejs 'node'
  }
  environment {
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
    stage('Build') {
      steps {
        echo 'build'
        //bat 'npm install'
        //bat 'npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9'
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
    stage('Integrate') {
      steps {
        withCredentials([usernamePassword(credentialsId: '3f860a36-896c-46c2-8448-fbc79010a203', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
          bat "git config user.name ${AUTHOR_NAME}"
          bat "git config user.email ${AUTHOR_EMAIL}"
          bat 'git checkout master'
          bat 'git pull origin master'
          bat 'git merge origin/dev'
        }
      }
    }
    stage('Release') {
      steps {
        withCredentials([string(credentialsId: 'PAT-github', variable: 'SECRET')]) {
          bat("git push https://${SECRET}@github.com/ratovoson81/jenkins.git")
        }
      }
    }
    stage('Deploy') {
      steps {
          //bat 'npm install netlify-cli -g'
          bat 'npm run build'
          bat 'npx netlify deploy --dir=build --prod'
      }
    }
  }
}
