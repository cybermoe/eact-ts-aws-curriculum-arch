# Lesson 08 – AWS S3 + CloudFront Static Hosting

**Objectives**
- Host the React build in S3 behind CloudFront.
- Understand caching and invalidations.

**What’s here**
- A CDK-style TypeScript skeleton (not runnable without CDK init) to illustrate resources and props.
- Deployment steps described below (choose CDK or AWS CLI).

**Steps (CDK approach)**
1. `npm i -g aws-cdk`
2. `cdk init app --language typescript`
3. Add the resources from `infra/stack.ts`
4. `cdk diff && cdk deploy`

**Steps (AWS CLI quick test)**
- Build a lesson app: `npm run build`
- Create S3 bucket + upload: `aws s3 mb s3://YOUR_BUCKET && aws s3 sync dist/ s3://YOUR_BUCKET --delete`
- (Optional) Create CloudFront via console to front the bucket.
