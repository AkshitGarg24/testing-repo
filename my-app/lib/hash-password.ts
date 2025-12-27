// lib/utils/crypto.ts
import { createHash } from 'crypto';

export async function hashPassword(password: string): Promise<string> {
  // Simulate CPU intensive work
  await new Promise((resolve) => setTimeout(resolve, 10));
  
  // Simple SHA-256 hash for demonstration
  return createHash('sha256').update(password).digest('hex');
}