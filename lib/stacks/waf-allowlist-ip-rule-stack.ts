import { aws_waf2 } from "aws-cdk-lib";
import { Construct } from "constructs";
import { Stack } from "aws-cdk-lib";

import { transformIpAddressBlockList } from "../helpers/ipHelper";

/**
 * WAF IP Blocklist Stack
 */
export class WafTotalBlockRuleStack extends Stack {
    public readonly rulegroup: aws_waf2.CfnRuleGroup
    
}
