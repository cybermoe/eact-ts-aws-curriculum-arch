// Pseudocode CDK-like sketch
// import * as cdk from 'aws-cdk-lib'
// import { Bucket } from 'aws-cdk-lib/aws-s3'
// import { Distribution, OriginAccessIdentity } from 'aws-cdk-lib/aws-cloudfront'
// import { S3Origin } from 'aws-cdk-lib/aws-cloudfront-origins'

// new Bucket(this, 'SiteBucket', { websiteIndexDocument: 'index.html', publicReadAccess: false })
// new OriginAccessIdentity(...)
// new Distribution(this, 'CDN', { defaultBehavior: { origin: new S3Origin(bucket) } })
