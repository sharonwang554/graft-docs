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

    it('should have your-first-graph', () => {
      expect(docExists('tutorials/your-first-graph.mdx')).toBe(true);
    });

    it('should have your-first-learning', () => {
      expect(docExists('tutorials/your-first-learning.mdx')).toBe(true);
    });
  });

  describe('How-To Guides', () => {
    const guides = [
      'migrate-from-graft',
      'integrate-claude-code',
      'agent-integration',
      'set-up-mcp-server',
      'save-and-check-learnings',
      'work-with-your-team',
      'work-with-monorepos',
      'visualize-codebase',
      'run-in-ci',
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
      'environment-variables',
      'graph-structure',
      'mcp-tools',
      'agent-wiring',
      'learning-file-format',
      'supported-languages',
    ];

    for (const ref of refs) {
      it(`should have reference/${ref}`, () => {
        expect(docExists(`reference/${ref}.mdx`)).toBe(true);
      });
    }
  });

  describe('Explanation', () => {
    const explanations = [
      'why-trail-code-exists',
      'learnings',
      'how-the-graph-gets-built',
      'what-stays-on-your-machine',
      'benchmarks',
    ];

    for (const exp of explanations) {
      it(`should have explanation/${exp}`, () => {
        expect(docExists(`explanation/${exp}.mdx`)).toBe(true);
      });
    }
  });
});
