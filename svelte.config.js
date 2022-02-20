import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexConfig = {
  extensions: ['.svx', '.md'],
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [preprocess({ postcss: true }), mdsvex(mdsvexConfig)],
  extensions: ['.svelte', ...mdsvexConfig.extensions],

  kit: {
    // https://github.com/sveltejs/kit/tree/master/packages/adapter-static#github-pages
    adapter: adapter(),
  },
};

export default config;
