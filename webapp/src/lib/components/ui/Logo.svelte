<!-- src/lib/components/ui/Logo.svelte -->
<script>
  export let href = '/';
  // Use 'dark' for the white logo on dark backgrounds, 'light' for the dark logo on light backgrounds
  export let theme = 'light'; 

  const themes = {
    light: '/logo-sanabel.jpeg', // Dark logo for light backgrounds
    dark: '/logo-sanabel.jpeg'  // White logo for dark backgrounds
  };
</script>

<div class="header-logo">
  <a class="header-logo__link" {href}>
    <img class="h-16" src={themes[theme]} alt="Sanabel Logo" />
  </a>
</div>