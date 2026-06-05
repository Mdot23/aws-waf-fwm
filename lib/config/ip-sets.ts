import * as fs from 'fs';
import * as path from 'path';

/**
 * Configuration for IP allowlists
 * Centralized location for managing allowlists file paths and loading logic
 */

export interface IpAllowlistConfig {
  filePath: string;
  description: string;
}

export const IP_ALLOWLIST: { [key: string]: IpAllowlistConfig } = {
  TOTAL_ALLOW: {
    filePath: path.resolve(__dirname, '../../scripts/allowlist.txt'),
    description: 'IP addresses to completely allow'
  },
  // Future allowlists can be added here
  // RATE_LIMIT: {
  //   filePath: path.resolve(__dirname, '../../scripts/rate-limit.txt'),
  //   description: 'IP addresses for rate limiting'
  // }
};

/**
 * Load IP addresses from a allowlist file
 * @param allowlistKey - Key from IP_ALLOWLISTS config
 * @returns Array of IP addresses/CIDR allow
 */
export function loadIpAllowlist(allowlistKey: string): string[] {
  const config = IP_ALLOWLISTS[allowlistKey];
  
  if (!config) {
    throw new Error(`Allowlist configuration not found for key: ${allowlistKey}`);
  }

  let ipAddresses: string[];
  try {
    ipAddresses = fs.readFileSync(config.filePath, 'utf-8')
      .split('\n')
      .map(line => line.trim())
      .filter(line => line && !line.startsWith('#'));
    
    console.log(`Found ${ipAddresses.length} IP addresses from ${allowlistKey} allowlist`);
  } catch (error) {
    console.error(`Error reading allowlist ${allowlistKey}: ${error}`);
    ipAddresses = [];
  }

  return ipAddresses;
}