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
    it('should have quick-start', () => {
      expect(docExists('tutorials/quick-start.mdx')).toBe(true);
    });
  });

  describe('How-To Guides', () => {
    const guides = [
      'coming-from-graft',
      'agent-integration',
      'your-team',
      'search-and-orient',
      'monorepos',
      'visualize-codebase',
      'development',
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
      'learning-file',
      'whats-in-a-node',
      'supported-languages',
      'what-runs-where',
      'what-stays-on-your-machine',
    ];

    for (const ref of refs) {
      it(`should have reference/${ref}`, () => {
        expect(docExists(`reference/${ref}.mdx`)).toBe(true);
      });
    }
  });

  describe('Explanation', () => {
    const explanations = [
      'how-it-works',
      'graft-map',
      'learnings',
      'how-the-graph-gets-built',
      'benchmarks',
      'faq',
    ];

    for (const exp of explanations) {
      it(`should have explanation/${exp}`, () => {
        expect(docExists(`explanation/${exp}.mdx`)).toBe(true);
      });
    }
  });
});
