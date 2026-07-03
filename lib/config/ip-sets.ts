import * as fs from 'fs';
import * as path from 'path';

/**
 * Configuration for IP allowlists
 * Centralized location for managing allowlist file paths and loading logic
 */

export interface IpAllowlistConfig {
  filePath: string;
  description: string;
}

export const IP_ALLOWLISTS: { [key: string]: IpAllowlistConfig } = {
  TRUSTED_SOURCES: {
    filePath: path.resolve(__dirname, '../../scripts/allowlist.txt'),
    description: 'IP addresses that are allowed to access resources'
  },
  // Future allowlists can be added here
  // ADMIN_SOURCES: {
  //   filePath: path.resolve(__dirname, '../../scripts/admin-allowlist.txt'),
  //   description: 'IP addresses for admin panel access'
  // },
  // PARTNER_SOURCES: {
  //   filePath: path.resolve(__dirname, '../../scripts/partner-allowlist.txt'),
  //   description: 'IP addresses for partner integrations'
  // }
};

/**
 * Load IP addresses from an allowlist file
 * @param allowlistKey - Key from IP_ALLOWLISTS config
 * @returns Array of IP addresses/CIDR blocks that are allowed
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
    
    console.log(`Found ${ipAddresses.length} allowed IP addresses from ${allowlistKey} allowlist`);
  } catch (error) {
    console.error(`Error reading allowlist ${allowlistKey}: ${error}`);
    ipAddresses = [];
  }

  return ipAddresses;
}