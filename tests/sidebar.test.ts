import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

const CONFIG_PATH = path.resolve(__dirname, '../astro.config.mjs');

describe('Sidebar configuration', () => {
  it('should have four Diataxis sections in astro.config.mjs', () => {
    const config = fs.readFileSync(CONFIG_PATH, 'utf-8');

    expect(config).toContain("label: 'Tutorials'");
    expect(config).toContain("label: 'How-To Guides'");
    expect(config).toContain("label: 'Reference'");
    expect(config).toContain("label: 'Explanation'");
  });

  it('should reference the correct tutorial slugs', () => {
    const config = fs.readFileSync(CONFIG_PATH, 'utf-8');

    expect(config).toContain('tutorials/getting-started');
    expect(config).toContain('tutorials/your-first-graph');
  });

  it('should autogenerate how-to, reference, and explanation sections', () => {
    const config = fs.readFileSync(CONFIG_PATH, 'utf-8');

    expect(config).toContain("directory: 'how-to'");
    expect(config).toContain("directory: 'reference'");
    expect(config).toContain("directory: 'explanation'");
  });
});
