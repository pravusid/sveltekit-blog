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

export const get: RequestHandler = async ({ url }) => {
  const page = Number(url.searchParams.get('page') ?? 0);
  return {
    body: posts.slice(page * 10, 10),
  };
};
