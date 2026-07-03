import fs from "fs":
import path from "path";

//**
// Transforms IP addresses from blocklist into format for use in WAF 
// @returns string[] of IP addresses for WAF rules
// 
// */
export const transformIpAddressBlockList = (): string[] => {
    const blocklistFile = path.resolve(__dirname, "../../util/blocklist.txt");
    const rawIpAddresses = fs
        .readFileSync(blocklistFile, "utf-8")
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line && !line.startsWith("#"));
    return transformRawIpAddresses(rawIpAddresses);
};

/** 
 * Transforms raw IP addresses into CIDR notation for WAF rules
 * 
 * @param {string[]} rawIpAddresses - List of IP addresses to trasform 
 * @returns {string[]} The transformed list of IP addresses in CIDR notation
 */
export const transformRawIpAddresses = ( rawIpAddresses: string[]): string[] => {
    const transformed: string[] = [];
    for (const ip of rawIpAddresses) {
      // Verify if the IP address is ipv4
      if (ip.includes(".")) {
        // Verify if the IP address is in CIDR notation 
        if (ip.includes("/")) {
            transformed.push(ip);
        } else {
            // else/if not, assume it's a single IP and convert to CIDR notation 
            transformed.push(`${ip}/32`)
        }
        }
    }
    // skipping ipv 6 addresses may add later 
    return transformed;  
};

