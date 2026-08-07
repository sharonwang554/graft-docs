import { describe, it, expect } from 'vitest';
import { execSync } from 'child_process';
import path from 'path';

const ROOT = path.resolve(__dirname, '..');

describe('Build', () => {
  it('should build without errors', () => {
    const result = execSync('npm run build', {
      cwd: ROOT,
      stdio: 'pipe',
      timeout: 120_000,
    });

    // If we got here without throwing, the build succeeded
    expect(result).toBeTruthy();
  }, 120_000);
});
