import { describe, it, expect } from 'vitest';
import source from '../src/data/source.json';

describe('Source repo stamp', () => {
  it('should record a full commit SHA', () => {
    expect(source.commit).toMatch(/^[0-9a-f]{40}$/);
  });

  it('should record valid ISO timestamps', () => {
    expect(Number.isNaN(Date.parse(source.commitDate))).toBe(false);
    expect(Number.isNaN(Date.parse(source.generatedAt))).toBe(false);
  });

  it('should point at the source repo', () => {
    expect(source.url).toBe(`https://github.com/${source.repo}`);
  });
});
