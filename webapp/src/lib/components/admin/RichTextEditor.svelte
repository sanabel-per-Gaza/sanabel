<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import type { Editor } from '@tiptap/core';

	/** Contenuto HTML, aggiornato a ogni modifica */
	export let value = '';
	export let id = '';
	export let minHeight = '14rem';
	/** Mostra anche titoli, elenchi e citazioni (per articoli e pagine lunghe) */
	export let full = true;

	let element: HTMLDivElement;
	let editor: Editor | null = null;
	let tick = 0; // forza l'aggiornamento dello stato dei pulsanti

	onMount(async () => {
		const [{ Editor }, { default: StarterKit }] = await Promise.all([
			import('@tiptap/core'),
			import('@tiptap/starter-kit')
		]);
		editor = new Editor({
			element,
			extensions: [
				StarterKit.configure({
					heading: { levels: [2, 3] },
					link: { openOnClick: false, autolink: true, defaultProtocol: 'https' }
				})
			],
			content: value,
			editorProps: {
				attributes: {
					class: 'rich-text rich-text--compact focus:outline-none px-4 py-3',
					style: `min-height: ${minHeight}`,
					...(id ? { id } : {})
				}
			},
			onUpdate: ({ editor }) => {
				value = editor.isEmpty ? '' : editor.getHTML();
			},
			onTransaction: () => (tick += 1)
		});
	});

	onDestroy(() => editor?.destroy());

	function setLink() {
		if (!editor) return;
		const previous = editor.getAttributes('link').href ?? '';
		const url = window.prompt('Indirizzo del link (lascia vuoto per rimuoverlo)', previous);
		if (url === null) return;
		if (url.trim() === '') {
			editor.chain().focus().extendMarkRange('link').unsetLink().run();
		} else {
			editor.chain().focus().extendMarkRange('link').setLink({ href: url.trim() }).run();
		}
	}

	type Action = { label: string; title: string; run: () => void; active: () => boolean; full?: boolean };

	$: actions = [
		{ label: 'B', title: 'Grassetto', run: () => editor?.chain().focus().toggleBold().run(), active: () => !!editor?.isActive('bold') },
		{ label: 'I', title: 'Corsivo', run: () => editor?.chain().focus().toggleItalic().run(), active: () => !!editor?.isActive('italic') },
		{ label: 'Link', title: 'Inserisci o modifica link', run: setLink, active: () => !!editor?.isActive('link') },
		{ label: 'Titolo', title: 'Titolo di sezione', run: () => editor?.chain().focus().toggleHeading({ level: 2 }).run(), active: () => !!editor?.isActive('heading', { level: 2 }), full: true },
		{ label: 'Sottotitolo', title: 'Sottotitolo', run: () => editor?.chain().focus().toggleHeading({ level: 3 }).run(), active: () => !!editor?.isActive('heading', { level: 3 }), full: true },
		{ label: '• Elenco', title: 'Elenco puntato', run: () => editor?.chain().focus().toggleBulletList().run(), active: () => !!editor?.isActive('bulletList'), full: true },
		{ label: '1. Elenco', title: 'Elenco numerato', run: () => editor?.chain().focus().toggleOrderedList().run(), active: () => !!editor?.isActive('orderedList'), full: true },
		{ label: '“ Citazione', title: 'Citazione', run: () => editor?.chain().focus().toggleBlockquote().run(), active: () => !!editor?.isActive('blockquote'), full: true }
	] satisfies Action[];
</script>

<div class="border border-helpo-purple/20 bg-white focus-within:border-helpo-purple">
	<div class="flex flex-wrap gap-1 border-b border-helpo-purple/10 bg-helpo-light-gray p-1.5" role="toolbar" aria-label="Formattazione">
		{#each actions.filter((a) => full || !a.full) as action (action.label)}
			{@const isOn = tick >= 0 && action.active()}
			<button
				type="button"
				title={action.title}
				aria-pressed={isOn}
				on:click={action.run}
				class="rounded px-2.5 py-1 text-xs font-bold transition-colors {isOn
					? 'bg-helpo-purple text-white'
					: 'text-helpo-heading hover:bg-helpo-purple/10'} {action.label === 'I' ? 'italic' : ''}"
			>
				{action.label}
			</button>
		{/each}
		<span class="ml-auto self-center px-2 text-[11px] text-helpo-gray-text">Invio = nuovo paragrafo · Maiusc+Invio = a capo</span>
	</div>
	<div bind:this={element}></div>
</div>
