import { WAF_CONSTANTS } from '../config/waf-constants';

/**
 * Helper functions for WAF resource naming
 */

export function generateIpSetName(identifier: string): string {
  return `${WAF_CONSTANTS.NAMING.PREFIX}-waf-${identifier}-${WAF_CONSTANTS.NAMING.IP_SET_SUFFIX}`;
}

export function generateRuleGroupName(identifier: string): string {
  return `${WAF_CONSTANTS.NAMING.PREFIX}-waf-${identifier}-${WAF_CONSTANTS.NAMING.RULE_GROUP_SUFFIX}`;
}

export function generateWebAclName(identifier: string): string {
  return `${WAF_CONSTANTS.NAMING.PREFIX}-waf-${identifier}-${WAF_CONSTANTS.NAMING.WEB_ACL_SUFFIX}`;
}

/**
 * Create a visibility config object
 */
export function createVisibilityConfig(metricName: string) {
  return {
    sampledRequestsEnabled: WAF_CONSTANTS.VISIBILITY_CONFIG.ENABLED.sampledRequestsEnabled,
    cloudWatchMetricsEnabled: WAF_CONSTANTS.VISIBILITY_CONFIG.ENABLED.cloudWatchMetricsEnabled,
    metricName: metricName
  };
}