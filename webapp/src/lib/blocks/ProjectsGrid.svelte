<!-- src/lib/blocks/ProjectsGrid.svelte -->
<script lang="ts">
	import ProjectCard from '$lib/components/cards/ProjectCard.svelte';
</script>

<section class="section p-0">
	<div class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3">
		<!-- Heading Block -->
		<div class="lg:col-span-2 p-8 md:p-12 flex items-center">
			<div>
				<span class="text-gray-400 font-bold mb-2.5 inline-block">What we Did</span>
				<h2 class="text-4xl md:text-5xl text-helpo-heading tracking-tight">
					<span>Helpo</span> <span class="font-light">Projects</span>
				</h2>
				<p class="text-helpo-gray-text mt-4">
					Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento
					splittail, Canthigaster rostrata. Midshipman dartfish Modoc sucker, yellowtai
				</p>
			</div>
		</div>

		<!-- Project Cards -->
		<ProjectCard
			imageUrl="img/projects_4.jpg"
			category="Education"
			title="Help for Children of the East"
		/>
		<ProjectCard
			imageUrl="img/projects_5.jpg"
			category="Education"
			title="Help for Children of the East"
		/>
		<ProjectCard imageUrl="img/projects_3.jpg" category="Food" title="Help for Children of the East" />
		<ProjectCard imageUrl="img/projects_6.jpg" category="Medicine" title="Helpo for Help" />
		<ProjectCard
			imageUrl="img/projects_1.jpg"
			category="Water Delivery"
			title="More than One Life Changed"
		/>
		<ProjectCard imageUrl="img/projects_2.jpg" category="Medicine" title="Helpo for Help" />

		<!-- Counter Block -->
		<div class="bg-helpo-light-gray flex flex-col items-center justify-center min-h-[400px]">
			<h6 class="text-sm font-bold text-helpo-heading mb-2">Closed Projects</h6>
			<div class="text-8xl font-bold text-helpo-purple">
				200<span class="text-6xl">+</span>
			</div>
		</div>
	</div>
</section>