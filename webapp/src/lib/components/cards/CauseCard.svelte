<!-- src/lib/components/cards/CauseCard.svelte -->
<script>
  import ProgressBar from '$lib/components/ui/ProgressBar.svelte';

  export let imageUrl = 'img/causes_1.jpg';
  export let category = 'Water Delivery';
  export let categoryColor = '#49C2DF';
  export let title = 'Clean Water in Africa';
  export let description = 'Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail canthigaster rostrata.';
  export let goal = '25 000$';
  export let pledged = '20 350$';
  export let percentage = 78;
  export let causeUrl = '#';
  export let donateUrl = '#';
</script>

<div class="bg-white shadow-lg mb-12">
  <div class="p-1.5">
    <div class="lg:flex items-center">
      <div class="lg:w-1/3">
        <div class="relative pt-[51.2%] lg:pt-[74%]">
          <img class="absolute top-0 left-0 w-full h-full object-cover" src={imageUrl} alt={title} />
        </div>
      </div>
      <div class="lg:w-2/3 p-4 pt-8 md:p-8 lg:p-12">
        <div class="flex justify-between items-center mb-6">
          <div 
            class="inline-block text-white text-sm font-bold py-1 px-4 rounded" 
            style="background-color: {categoryColor};"
          >
            {category}
          </div>
          <a href={donateUrl} class="font-bold uppercase text-helpo-heading no-underline hover:text-helpo-yellow transition-colors relative after:content-['+'] after:absolute after:-left-2.5">
            Donate
          </a>
        </div>
        <div class="mb-6">
          <h6 class="text-2xl font-bold text-helpo-heading mb-2">
            <a href={causeUrl} class="no-underline text-inherit hover:opacity-75 transition-opacity">{title}</a>
          </h6>
          <p class="text-helpo-gray-text">{description}</p>
        </div>
        <div>
          <ProgressBar {percentage} />
          <div class="flex justify-between mt-8 text-sm">
            <div class="text-helpo-gray-text"><span>Goal: </span><span class="font-bold text-helpo-heading">{goal}</span></div>
            <div class="text-helpo-gray-text text-right"><span>Pledged: </span><span class="font-bold text-helpo-heading">{pledged}</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>