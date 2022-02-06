import { describe, expect, it } from 'vitest';
import { parseSlug } from '../parse-slug';

describe('Test Parsing Slug', () => {
  it('파일이름은 category/yyyy-mm-dd-제목.md 로 구성되어 있다', () => {
    const slug = '../../posts/test-cat/2022-02-22-test-title.md';

    const ret = parseSlug(slug);

    expect(ret.category).toEqual('test-cat');
    expect(ret.yyyy).toEqual('2022');
    expect(ret.title).toEqual('test-title');
  });
});
