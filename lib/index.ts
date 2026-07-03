// import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface AwsWafFwmProps {
  // Define construct properties here
}

export class AwsWafFwm extends Construct {

  constructor(scope: Construct, id: string, props: AwsWafFwmProps = {}) {
    super(scope, id);

    // Define construct contents here

    // example resource
    // const queue = new sqs.Queue(this, 'AwsWafFwmQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
