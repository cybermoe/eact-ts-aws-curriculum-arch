# React + TypeScript + AWS – Hands-on Curriculum

This repository contains a progressive, lesson-by-lesson path to learn **React + TypeScript** with **AWS**, **Vitest**, **ESLint/Prettier**, and modern tooling—from **fundamentals** to **expert-level architecture**.

## How to use this repo

- Each folder under `lessons/` is a **self-contained workshop** with:
  - A `README.md` walkthrough (objectives, steps, and commands)
  - Starter code (`src/`, infra IaC, tests) or a scaffold script
- Work through lessons **in order**. Each lesson takes 30–120 minutes.
- Lessons marked with **[code]** include runnable starter code.
- Lessons marked with **[infra]** include AWS IaC (CDK/SAM/Terraform-style JSON) examples.
- The **capstone** combines all topics into a production-grade stack.

> You can open any lesson folder in VS Code and run the commands listed in its `README.md`.

## Prerequisites

- Node.js 20+ and npm
- AWS account + IAM user/role with appropriate permissions (for AWS lessons)
- AWS CLI configured (`aws configure`)
- (Optional) Docker for local testing of some infra tools

## Lessons

01. Foundations – The Web, HTML/CSS/JS [code]  
02. TypeScript Basics [code/tests]  
03. React Basics with Vite [code/tests]  
04. Tooling: ESLint + Prettier + Project Structure [code]  
05. State, Effects & Forms [code/tests]  
06. Routing with React Router [code/tests]  
07. Testing with Vitest & Testing Library [code/tests]  
08. AWS S3 + CloudFront Static Hosting [infra]  
09. Data Fetching & Error Handling [code/tests]  
10. AWS API Gateway + Lambda (Serverless REST) [infra+code]  
11. Authentication with AWS Cognito [infra+code]  
12. CI/CD with GitHub Actions (Build, Test, Deploy) [infra]  
13. Global State (Redux Toolkit or Zustand) [code/tests]  
14. GraphQL with AppSync (Realtime) [infra+code]  
15. Advanced Testing (MSW, integration patterns) [code/tests]  
16. Performance & Security (Split, Suspense, hardening) [code]  
17. Capstone – Full Stack AWS-Powered App [infra+code+tests]

See `.github/workflows/ci.yml` for a sample CI that runs on lessons with tests.
