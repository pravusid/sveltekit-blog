<script lang="ts" context="module">
  import { pathFromSlug } from '$lib/utils/parse-slug';
  import type { Load } from '@sveltejs/kit';

  export const load: Load = async ({ fetch, url }) => {
    const page = url.searchParams.get('p') ?? 0;
    const response = await fetch(`/api/posts?p=${page}`, { method: 'GET' });
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
  {#each items.data as item}
    <li><a href={pathFromSlug(item.slug)}>{item.slug.title}</a></li>
  {/each}

  {#if items.page.current > 0}
    <a href="?p={items.page.current - 1}">prev page</a>
  {/if}
  {#if items.page.total > items.page.current}
    <a href="?p={items.page.current + 1}">next page</a>
  {/if}
</ul>
