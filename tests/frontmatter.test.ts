import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { glob } from 'tinyglobby';

const DOCS_DIR = path.resolve(__dirname, '../src/content/docs');

/** Extract YAML frontmatter from a file */
function extractFrontmatter(filePath: string): Record<string, string> {
  const content = fs.readFileSync(filePath, 'utf-8');
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};

  const result: Record<string, string> = {};
  for (const line of match[1].split('\n')) {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      const value = line.slice(colonIndex + 1).trim();
      result[key] = value;
    }
  }
  return result;
}

describe('Frontmatter', () => {
  it('every .mdx file should have a title', async () => {
    const files = await glob(['**/*.mdx'], { cwd: DOCS_DIR, absolute: true });
    expect(files.length).toBeGreaterThan(0);

    for (const file of files) {
      const fm = extractFrontmatter(file);
      const relative = path.relative(DOCS_DIR, file);
      expect(fm.title, `${relative} is missing a title`).toBeTruthy();
    }
  });

  it('every .mdx file should have a description', async () => {
    const files = await glob(['**/*.mdx'], { cwd: DOCS_DIR, absolute: true });
    expect(files.length).toBeGreaterThan(0);

    for (const file of files) {
      const fm = extractFrontmatter(file);
      const relative = path.relative(DOCS_DIR, file);
      expect(fm.description, `${relative} is missing a description`).toBeTruthy();
    }
  });
});
