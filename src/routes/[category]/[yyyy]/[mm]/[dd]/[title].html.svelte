<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';
  import { pathFromSlug, SlugObject } from '../../../../../lib/utils/parse-slug';

  export const load: Load = async ({ params, fetch }) => {
    const response = await fetch(`/api/posts/${encodeURIComponent(pathFromSlug(params as SlugObject))}`);
    return {
      props: {
        status: response.status,
        item: await response.json(),
      },
    };
  };
</script>

<script lang="ts">
  export let item;
</script>

<svelte:head>
  <title>{item.slug.title}</title>
</svelte:head>

<article>{@html item.html}</article>
