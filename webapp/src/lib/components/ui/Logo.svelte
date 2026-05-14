<!-- src/lib/components/ui/Logo.svelte -->
<script lang="ts">
  export let href = '/';
  export let theme: 'light' | 'dark' = 'light'; 

  const themes = {
    light: '/logo-sanabel.jpeg',
    dark: '/logo-sanabel.jpeg'
  };
</script>

<div class="header-logo">
  <a class="header-logo__link" {href}>
    <img class="h-16" src={themes[theme]} alt="Sanabel Logo" />
  </a>
</div>