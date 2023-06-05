<script lang="ts">
  import Post from "$lib/components/Post.svelte";
  import type { PageData } from './$types';

  export let data: PageData
</script>

<div>
  <h1>My Blog</h1>
  <main>
    <div>
      {#each data.feed as post (post.id)}
        {#if post.published}
          <Post {post} />
        {/if}
      {/each}
    </div>
  </main>
</div>
