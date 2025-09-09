<!-- src/lib/components/cards/EventCard.svelte -->
<script>
  export let imageUrl = 'img/event_1.jpg';
  export let title = 'Help for Language. Voluanteer';
  export let location = 'Dark Spurt, San Francisco, CA 94528, USA';
  export let dates = 'September 30 - October 31, 2019';
  export let times = '10:00 AM - 18:00 PM, Everyday';
  export let href = '#';
</script>

<div class="bg-white p-1.5 shadow-lg mb-12">
  <div class="relative overflow-hidden">
    <img class="w-full object-cover" src={imageUrl} alt="img" />
  </div>
  <div class="p-6 md:p-8">
    <h6 class="text-xl font-bold text-helpo-heading mb-2">
      <a href={href} class="no-underline text-inherit hover:opacity-75 transition-opacity">{title}</a>
    </h6>
    <p class="text-base text-helpo-gray-text leading-relaxed mb-0">
      <strong class="text-helpo-heading">{@html location}</strong><br>
      <strong class="text-helpo-heading">{@html dates}</strong><br>
      <strong class="text-helpo-heading">{@html times}</strong>
    </p>
  </div>
</div>