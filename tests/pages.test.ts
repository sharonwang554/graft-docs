import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

const DOCS_DIR = path.resolve(__dirname, '../src/content/docs');

/** Helper: check if a file exists relative to docs root */
function docExists(relativePath: string): boolean {
  return fs.existsSync(path.join(DOCS_DIR, relativePath));
}

describe('Page existence', () => {
  it('should have a landing page', () => {
    expect(docExists('index.mdx')).toBe(true);
  });

  describe('Tutorials', () => {
    it('should have getting-started', () => {
      expect(docExists('tutorials/getting-started.mdx')).toBe(true);
    });

    it('should have your-first-graph', () => {
      expect(docExists('tutorials/your-first-graph.mdx')).toBe(true);
    });
  });

  describe('How-To Guides', () => {
    const guides = [
      'integrate-claude-code',
      'set-up-mcp-server',
      'work-with-monorepos',
      'visualize-codebase',
    ];

    for (const guide of guides) {
      it(`should have how-to/${guide}`, () => {
        expect(docExists(`how-to/${guide}.mdx`)).toBe(true);
      });
    }
  });

  describe('Reference', () => {
    const refs = [
      'cli',
      'graph-structure',
    ];

    for (const ref of refs) {
      it(`should have reference/${ref}`, () => {
        expect(docExists(`reference/${ref}.mdx`)).toBe(true);
      });
    }
  });

  describe('Explanation', () => {
    const explanations = [
      'why-graft-exists',
      'how-the-graph-works',
      'benchmarks',
    ];

    for (const exp of explanations) {
      it(`should have explanation/${exp}`, () => {
        expect(docExists(`explanation/${exp}.mdx`)).toBe(true);
      });
    }
  });
});
