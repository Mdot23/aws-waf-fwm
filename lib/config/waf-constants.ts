/**
 * Constants and enums for WAF configuration
 */

export const WAF_CONSTANTS = {
  NAMING: {
    PREFIX: 'sec',
    IP_SET_SUFFIX: 'ipset',
    RULE_GROUP_SUFFIX: 'rulegroup',
    WEB_ACL_SUFFIX: 'acl'
  },
  
  METRICS: {
    IP_ALLOWLIST_METRICS: 'sec-waf-allowlist-ip-rule-group',
    IP_ALLOWLIST_RULE_METRICS: 'sec-waf-allowlist-ip-rule'
  },

  CAPACITY: {
    IP_SET_RULE_GROUP: 100,
    // Add more rule groups as necessary 
  },

  SCOPE: 'REGIONAL',
  
  VISIBILITY_CONFIG: {
    ENABLED: {
      sampledRequestsEnabled: true,
      cloudWatchMetricsEnabled: true
    }
  }
};

export enum RuleGroupType {
  IP_ALLOWLIST = 'ip-allowlist',
  SQL_INJECTION = 'sql-injection',
  RATE_LIMITING = 'rate-limiting',
  GEO_BLOCKING = 'geo-blocking'
}

export enum RulePriority {
  IP_ALLOWLIST = 0,
  SQL_INJECTION = 1,
  RATE_LIMITING = 2,
  GEO_BLOCKING = 3
}