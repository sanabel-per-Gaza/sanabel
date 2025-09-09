<!-- src/lib/components/cards/ProjectCard.svelte -->
<script>
  export let imageUrl = 'img/projects_4.jpg';
  export let category = 'Education';
  export let title = 'Help for Children of the East';
  export let description = 'Murray cod clownfish American sole rockfish dojo loach gulper, trout-perch footballfish, pelican eel.';
  export let goal = "25 000$";
  export let date = "23 Jan'19";
  export let causeUrl = '#';

  // Map category to a background color
  const categoryColors = {
    Education: 'bg-green-500/80',
    Food: 'bg-yellow-500/80',
    Medicine: 'bg-pink-500/80',
    'Water Delivery': 'bg-blue-500/80',
  };
  const badgeColors = {
    Education: 'bg-green-500',
    Food: 'bg-yellow-500',
    Medicine: 'bg-pink-500',
    'Water Delivery': 'bg-blue-500',
  }

</script>

<div class="relative text-white overflow-hidden group">
  <img class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125" src={imageUrl} alt={title} />
  <div class="absolute inset-0 flex items-center justify-center p-8 text-center {categoryColors[category] || 'bg-helpo-purple/80'}">
    <div class="projects-masonry__inner">
      <span class="inline-block text-sm font-bold py-1.5 px-3.5 mb-5 rounded {badgeColors[category] || 'bg-helpo-purple'}">{category}</span>
      <h3 class="text-4xl font-bold leading-tight mb-4">
        <a href={causeUrl} class="text-white no-underline hover:text-helpo-yellow transition-colors">{title}</a>
      </h3>
      <p class="mb-7">{description}</p>
      <div class="flex justify-center space-x-6 text-sm">
        <div><span>Goal: </span><span class="font-bold">{goal}</span></div>
        <div><span>Date: </span><span class="font-bold">{date}</span></div>
      </div>
    </div>
  </div>
</div>