import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '../../');

// Simple function to load environment variables from .env file
export function loadEnv() {
  try {
    const envPath = path.join(rootDir, '.env');
    if (fs.existsSync(envPath)) {
      const envContent = fs.readFileSync(envPath, 'utf-8');
      const envLines = envContent.split('\n');
      
      envLines.forEach(line => {
        if (line.trim() && !line.startsWith('#')) {
          const [key, value] = line.split('=');
          if (key && value) {
            process.env[key.trim()] = value.trim();
          }
        }
      });
      
      console.log('Environment variables loaded from .env file');
    }
  } catch (error) {
    console.warn('Failed to load .env file:', error.message);
  }
}

// Export default AWS credentials that can be used if .env is not available
export const defaultAwsConfig = {
  region: 'us-east-1',
  // Add default credentials here if needed
}; 