pipeline {
    agent {
        docker {
            image 'node:18'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t devsecops-demo .'
            }
        }

        stage('Container Scan') {
            steps {
                sh 'docker run --rm aquasec/trivy image devsecops-demo > image-scan.txt'
            }
        }

        stage('Mitigation Check') {
            steps {
                script {
                    def result = readFile('image-scan.txt')
                    if (result.contains("CRITICAL")) {
                        error("Build Failed: Critical vulnerabilities found")
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker run -d -p 3000:3000 devsecops-demo'
            }
        }
    }
}

