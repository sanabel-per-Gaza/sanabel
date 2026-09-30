import { privacyDefault } from './privacy-default';

/**
 * Testi e immagini del sito modificabili dal pannello /admin/contenuti.
 *
 * Tutti i valori vivono in un unico record della collection PocketBase
 * `sanabel_content` (singleton). Se la collection non esiste ancora, o un campo
 * è vuoto, il sito usa i valori di default definiti qui sotto.
 */

export type Cluster = { title: string; items: { verb: string; text: string }[] };
export type Card = { title: string; text: string };

export type SiteContent = {
	// Generali
	site_description: string;
	donation_url: string;
	menu_blurb: string;

	// Home — hero
	hero_eyebrow: string;
	hero_title: string;
	hero_text: string;
	hero_button_label: string;
	hero_image: string;

	// Home — chi siamo
	about_eyebrow: string;
	about_title: string;
	about_image: string;
	about_caption: string;
	about_body: string;
	about_clusters_title: string;
	about_clusters: Cluster[];

	// Home — attività
	activities_title: string;
	activities_intro: string;
	activities_subtitle: string;

	// Home — blog
	blog_eyebrow: string;
	blog_title: string;

	// Pagina Cosa facciamo
	activities_page_eyebrow: string;
	activities_page_title: string;
	activities_page_intro: string;

	// Pagina Chi siamo
	chisiamo_eyebrow: string;
	chisiamo_title: string;
	chisiamo_hero_image: string;
	chisiamo_intro_title: string;
	chisiamo_intro_body: string;
	chisiamo_intro_image: string;
	chisiamo_values_eyebrow: string;
	chisiamo_values_title: string;
	chisiamo_values: Card[];
	chisiamo_cta_title: string;
	chisiamo_cta_text: string;

	// Pagina Gaza
	gaza_eyebrow: string;
	gaza_title: string;
	gaza_hero_image: string;
	gaza_section1_title: string;
	gaza_section1_body: string;
	gaza_image: string;
	gaza_section2_title: string;
	gaza_section2_body: string;
	gaza_focus_title: string;
	gaza_focus: Card[];
	gaza_cta_title: string;
	gaza_cta_text: string;

	// Pagina Contatti
	contact_title: string;
	contact_intro: string;
	contact_org_name: string;
	contact_address: string;
	contact_email: string;
	contact_success: string;

	// Pagina Privacy
	privacy_title: string;
	privacy_body: string;

	// Footer
	footer_tagline: string;
	bank_iban: string;
	bank_reason: string;
	paypal_email: string;
	footer_bottom: string;
};

export const IMAGE_FIELDS = [
	'hero_image',
	'about_image',
	'chisiamo_hero_image',
	'chisiamo_intro_image',
	'gaza_hero_image',
	'gaza_image'
] as const;

export const JSON_FIELDS = ['about_clusters', 'chisiamo_values', 'gaza_focus'] as const;

export const defaults: SiteContent = {
	site_description:
		'Sanabel è una rete di amicizia e sostegno per le persone con disabilità e neurodivergenti nella Striscia di Gaza, nata dalla collaborazione tra il Centro Irada e i nodi Sanabel in Italia.',
	donation_url:
		'https://www.gofundme.com/f/sanabel-per-le-persone-con-disabilita-e-neurodivergentigaza',
	menu_blurb:
		'Sostieni una rete di cura condivisa per persone con disabilità e bambine e bambini neurodivergenti a Gaza.',

	hero_eyebrow: 'Sanabel',
	hero_title: 'spighe di solidarietà per Gaza',
	hero_text:
		'Sanabel non è beneficenza o assistenzialismo, non è un aiuto che parte da qui per arrivare là. È uno scambio profondo, un percorso comune e condiviso che unisce le nostre esperienze, competenze e desideri di giustizia. Ci sosteniamo a vicenda, ogni giorno, come spighe che si piegano insieme al vento senza spezzarsi.',
	hero_button_label: 'Scopri Sanabel',
	hero_image: '/hero-image.jpeg',

	about_eyebrow: 'Chi siamo',
	about_title: 'Sanabel: seminiamo umanità',
	about_image: '/abbraccio_spalle.jpeg',
	about_caption:
		'Le sanabel (سنبلة, sunbula, spighe di grano) sono forti e flessibili: crescono meglio quando si sostengono a vicenda e diventano un simbolo concreto della possibilità di resistere e rigenerare la vita attraverso legami comunitari e sociali.',
	about_body: `<p>Sanabel è un'iniziativa di amicizia e sostegno rivolta alle persone con disabilità fisiche, sensoriali e intellettive nella Striscia di Gaza, con un focus specifico dedicato ai bambini autistici, alle bambine autistiche e alle persone neurodivergenti. È anche un'Associazione che nasce a Gaza e che, a partire da aprile 2025, si è sviluppata in diverse città italiane attraverso la costituzione dei "nodi Sanabel".</p>
<p>Sanabel nasce tra le due sponde del Mediterraneo dalla collaborazione tra il Centro Irada per l'Educazione Inclusiva di Gaza e gruppi di professionisti e professioniste nel campo dell'educazione, del sostegno psico-sociale, delle disabilità e delle neurodivergenze, della ricerca universitaria, insegnanti, studenti e studentesse in tutta Italia.</p>
<p><strong>Sanabel non è beneficenza o assistenzialismo; non è un aiuto che parte da "qui" per arrivare "là". È uno scambio profondo, un percorso comune e condiviso che unisce le nostre esperienze, competenze e desideri di giustizia.</strong></p>
<p>Ci sosteniamo a vicenda, ogni giorno, come spighe che si piegano insieme al vento senza spezzarsi.</p>
<p>Dopo oltre due anni di ininterrotta violenza, da quel lato del mare le condizioni di vita sono diventate insostenibili e letali, segnate da un'esasperazione sistematica della brutalità e della privazione nel pieno di un contesto genocidario.</p>
<p>Le reti di supporto sono frammentate e i bambini e le bambine autistici e autistiche hanno perso ogni sicurezza.</p>
<p><strong>Per questo, Sanabel lavora sull'emergenza ma con uno sguardo teso verso il futuro.</strong></p>`,
	about_clusters_title: 'Cosa facciamo',
	about_clusters: [
		{
			title: 'Bisogni immediati',
			items: [
				{ verb: 'Distribuire', text: "kit per l'igiene e acqua potabile" },
				{ verb: 'Fornire', text: 'ausili per la mobilità' }
			]
		},
		{
			title: 'Supporto e cura',
			items: [
				{ verb: 'Realizzare', text: 'attività di supporto psico-sociale' },
				{ verb: 'Sostenere', text: 'bambini autistici e le loro famiglie' }
			]
		},
		{
			title: 'Inclusione e consapevolezza',
			items: [
				{ verb: 'Favorire', text: "l'inclusione delle persone con disabilità" },
				{ verb: 'Promuovere', text: 'campagne di sensibilizzazione' }
			]
		}
	],

	activities_title: 'Le attività Sanabel',
	activities_intro:
		'Sanabel vive attraverso una rete di solidarietà diffusa di persone, gruppi e realtà coinvolte in diverse città italiane. In questi territori nascono iniziative, incontri e attività di sensibilizzazione che contribuiscono a sostenere i nostri interventi e a costruire legami concreti di solidarietà con Gaza. Di seguito le nostre principali attività.',
	activities_subtitle: 'Vivi con noi ogni nuova iniziativa.',

	blog_eyebrow: 'Blog',
	blog_title: 'storie e aggiornamenti',

	activities_page_eyebrow: 'Le attività Sanabel',
	activities_page_title: 'quello che facciamo',
	activities_page_intro:
		'Interventi concreti a Gaza, costruiti insieme al Centro Irada e sostenuti dai nodi Sanabel in Italia.',

	chisiamo_eyebrow: 'Chi siamo',
	chisiamo_title: 'Insieme, per Seminare Umanità',
	chisiamo_hero_image: '/foto chi siamo 1.jpeg',
	chisiamo_intro_title: 'Un ponte di solidarietà tra Italia e Gaza',
	chisiamo_intro_body: `<p>Sanabel è un'iniziativa di amicizia, solidarietà e cooperazione nata per sostenere le persone con disabilità e neurodivergenti nella Striscia di Gaza.</p>
<p>Uniamo persone, famiglie e organizzazioni in Italia e a Gaza per costruire relazioni autentiche e offrire risposte concrete, capaci di restituire dignità, autonomia e speranza. Perché ogni persona possa sentirsi sostenuta, ascoltata e parte attiva della propria comunità.</p>`,
	chisiamo_intro_image: '/foto 2 chi siamo.jpeg',
	chisiamo_values_eyebrow: 'I nostri valori',
	chisiamo_values_title: 'Ciò in cui crediamo',
	chisiamo_values: [
		{
			title: 'Una rete che unisce',
			text: "Sanabel nasce dall'incontro tra organizzazioni palestinesi, operatrici e operatori, professionisti, ricercatori, insegnanti, studenti e volontari. Una rete di persone che condivide competenze, responsabilità e umanità."
		},
		{
			title: 'Un sostegno che diventa azione',
			text: 'Acqua pulita, strumenti di assistenza, supporto psicologico, attività educative e formazione: trasformiamo la solidarietà in interventi concreti, costruiti intorno ai bisogni delle persone e delle loro famiglie.'
		},
		{
			title: 'Dignità, autonomia e futuro',
			text: "Crediamo in una comunità nella quale le persone con disabilità e neurodivergenti siano visibili, ascoltate e protagoniste. Per questo lavoriamo non soltanto sulle necessità più urgenti, ma anche sull'inclusione e sull'autonomia nel lungo periodo."
		}
	],
	chisiamo_cta_title: 'Aiutaci a seminare umanità',
	chisiamo_cta_text:
		'Ogni contributo sostiene persone con disabilità e neurodivergenti a Gaza. Dona ora o esplora le nostre attività per scoprire come puoi fare la differenza.',

	gaza_eyebrow: 'Gaza',
	gaza_title: "Il Centro Al-Irada: un punto di riferimento per l'autismo a Gaza",
	gaza_hero_image: '/gaza-hero.jpg',
	gaza_section1_title: 'Una storia di competenza, educazione e inclusione',
	gaza_section1_body: `<p>Fondato a Gaza nel 2013, il Centro Al-Irada è stato il primo centro specializzato nell'assistenza e nell'educazione delle persone autistiche nella Striscia di Gaza. La sua nascita è stata il risultato di un importante percorso di ricerca e del contributo di istituzioni specializzate provenienti da tutto il mondo arabo.</p>
<p>Nel corso degli anni, il Centro ha ampliato progressivamente le proprie attività. Nel 2019 è stata inaugurata una nuova sede nel governatorato meridionale di Khan Younis, mentre nel 2020 è nata la prima scuola privata di Gaza dedicata ai bambini autistici e accreditata dal Ministero dell'Istruzione.</p>
<p>Grazie al lavoro di educatori, operatori specializzati e famiglie, decine di bambini hanno potuto intraprendere percorsi educativi personalizzati, partecipare alle attività sociali del territorio ed essere inseriti nelle scuole tradizionali e nella vita della comunità.</p>`,
	gaza_image: '/gaza-centro.jpeg',
	gaza_section2_title: 'Ripartire per restituire assistenza e futuro',
	gaza_section2_body: `<p>La guerra ha interrotto un percorso costruito in dieci anni di attività, provocando la distruzione del Centro e della sua scuola e costringendo bambini, famiglie e operatori a disperdersi in diverse aree della Striscia di Gaza.</p>
<p>Nonostante condizioni estremamente difficili, il Centro Al-Irada sta lavorando per costruire e rendere operativa una nuova struttura, con l'obiettivo di riprendere quanto prima i servizi educativi, terapeutici e assistenziali dedicati ai bambini autistici.</p>
<p>Uno degli ostacoli principali è rappresentato dalla mancanza di trasporti. La distruzione della maggior parte dei veicoli, la scarsità di carburante e l'elevato costo degli spostamenti impediscono alle famiglie di accompagnare i propri figli al Centro. Per questo motivo sono urgentemente necessari mezzi di trasporto e carburante, indispensabili per permettere ai bambini di tornare a ricevere assistenza.</p>`,
	gaza_focus_title: 'I nostri focus',
	gaza_focus: [
		{
			title: 'Assistenza specializzata',
			text: 'Percorsi educativi e servizi personalizzati costruiti sulle esigenze specifiche di ogni bambino, con il supporto di professionisti qualificati.'
		},
		{
			title: 'Educazione e inclusione',
			text: "Attività finalizzate a favorire l'apprendimento, l'autonomia e l'inserimento dei bambini nelle scuole e nella vita sociale della comunità."
		},
		{
			title: 'Trasporto e accessibilità',
			text: 'Mezzi di trasporto e carburante sono oggi indispensabili per permettere ai bambini e alle loro famiglie di raggiungere il Centro e ricevere assistenza.'
		}
	],
	gaza_cta_title: 'Sostieni il Centro Al-Irada',
	gaza_cta_text:
		'Ogni donazione aiuta i bambini autistici di Gaza a tornare a ricevere assistenza, educazione e cura.',

	contact_title: 'Contatti',
	contact_intro:
		'Vuoi saperne di più su Sanabel, organizzare un incontro nella tua città o entrare a far parte di un nodo? Scrivici: ti risponderemo il prima possibile.',
	contact_org_name: 'Sanabel APS',
	contact_address: 'Via Santa Cesarea 59 - 75100 Matera',
	contact_email: 'info@associazionesanabel.org',
	contact_success: 'Grazie, abbiamo ricevuto il tuo messaggio. Ti risponderemo il prima possibile.',

	privacy_title: 'Privacy e Cookie Policy',
	privacy_body: privacyDefault,

	footer_tagline: 'Sostieni Sanabel. Seminiamo Umanità.',
	bank_iban: 'IT23Q0501804000000020000463',
	bank_reason: 'Sanabel per Gaza',
	paypal_email: 'donazioni@associazionesanabel.org',
	footer_bottom: 'Sanabel APS — spighe di solidarietà per Gaza'
};
