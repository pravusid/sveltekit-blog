import type { RequestHandler } from '@sveltejs/kit';
import { posts } from '.';

export const get: RequestHandler = async ({ params }) => {
  return {
    body: posts.find((e) => e.path === decodeURIComponent(params.path)),
  };
};
