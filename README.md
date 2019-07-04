create the project:
```
$ mkdir s3-alert
$ cd s3-alert
$ git init

$ npm install serverless
$ npx serverless create -t aws-nodejs-typescript -n s3-alert
$ npm install
$ npm install tsc

$ npx serverless deploy --aws-profile sandbox-bretwaldow-admin
$ npx serverless invoke -f hello

```

