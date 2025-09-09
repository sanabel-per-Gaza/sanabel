<!-- src/lib/components/cards/TestimonialCard.svelte -->
<script>
    export let text = "Slickhead grunion lake trout. Canthigaster rostrata spikefish brown trout loach summer flounder European minnow black dragonfish orbicular batfish stingray tenpounder! Flying characin herring, Moses sole sea snail grouper discus.";
    export let author = "Jack Wolfskin";
    export let position = "Volunteer";
</script>

<div class="relative">
    <div class="absolute -top-4 left-0 text-helpo-yellow font-bold text-8xl leading-none">“</div>
    <div class="pl-0 sm:pl-16">
        <p class="text-lg md:text-xl text-helpo-heading">{text}</p>
        <div class="mt-8 font-bold text-base">
            <span class="text-helpo-heading">{author}, </span>
            <span class="text-helpo-gray-text">{position}</span>
        </div>
    </div>
</div>