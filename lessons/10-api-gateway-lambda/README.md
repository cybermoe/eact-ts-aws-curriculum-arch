# Lesson 10 – AWS API Gateway + Lambda (Serverless REST)

**Objectives**
- Deploy a simple Lambda behind API Gateway.
- Call it from React with CORS handled.

**What’s here**
- `infra/template.yaml` – AWS SAM template for an API + Lambda
- `app/` – React app that calls the API (set `VITE_API_URL`)

**Deploy (SAM)**
```bash
cd infra
sam build
sam deploy --guided
```

**Run app**
```bash
cd ../app
npm install
VITE_API_URL="https://<your-api-id>.execute-api.<region>.amazonaws.com/Prod/hello" npm run dev
```
