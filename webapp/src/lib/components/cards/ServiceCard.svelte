<!-- src/lib/components/cards/ServiceCard.svelte -->
<script>
  export let iconSrc = 'img/svg/icons_2/1_blood.svg';
  export let title = 'Medicine Help';
  export let description = 'Default description text goes here.';
</script>

<div class="text-center sm:text-left mb-12">
  <div class="w-36 mb-6 mx-auto">
    <img src={iconSrc} alt="{title} icon" class="h-full mx-auto sm:mx-0" />
  </div>
  <div>
    <p class="text-helpo-heading text-xl font-bold">{title}</p>
    <span class="text-helpo-gray-text text-base">{description}</span>
  </div>
</div>