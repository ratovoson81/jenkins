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
    stage('Publish') {
      steps {
        withCredentials([usernamePassword(usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
          echo USERNAME
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
}
