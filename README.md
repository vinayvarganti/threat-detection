# Proactive Threat Detection and Mitigation using CI/CD Pipelines

## Project Overview
This project demonstrates how security tools are integrated into a CI/CD pipeline
to proactively detect vulnerabilities before deployment.

## Tools Used
- GitHub
- Jenkins
- SonarQube
- Trivy
- Docker
- Node.js

## How It Works
1. Developer pushes code to GitHub.
2. Jenkins pipeline is triggered.
3. Security scans are executed.
4. If critical vulnerabilities are found, deployment is blocked.
5. If clean, application is deployed securely.
