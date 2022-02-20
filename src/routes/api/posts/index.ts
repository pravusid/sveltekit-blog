import type { RequestHandler } from '@sveltejs/kit';
import { parseSlug, pathFromSlug } from '../../../lib/utils/parse-slug';

const files = import.meta.globEager('../../../../posts/**/*.md');

export const posts = Object.entries(files).map(([k, e]) => {
  const slug = parseSlug(k);
  return {
    slug,
    path: pathFromSlug(slug),
    ...e.metadata,
    ...e.default.render(),
  };
});

const size = 10;

export const get: RequestHandler = async ({ url }) => {
  const page = Number(url.searchParams.get('p') ?? 0);
  const cursor = page * size;
  return {
    body: {
      page: {
        total: Math.floor(posts.length / 10),
        current: page,
      },
      data: posts.slice(cursor, cursor + size),
    },
  };
};
