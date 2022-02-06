<script lang="ts" context="module">
  import { pathFromSlug } from '$lib/utils/parse-slug';
  import type { Load } from '@sveltejs/kit';

  export const load: Load = async ({ fetch }) => {
    const response = await fetch('/api/posts', { method: 'GET' });
    return {
      status: response.status,
      props: {
        items: await response.json(),
      },
    };
  };
</script>

<script lang="ts">
  export let items;
</script>

<svelte:head>
  <title>my-blog</title>
</svelte:head>

<ul>
  {#each items as item}
    <li><a href={pathFromSlug(item.slug)}>{item.slug.title}</a></li>
  {/each}
</ul>
