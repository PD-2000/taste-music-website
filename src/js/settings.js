export const select = {
	categories: {
		link: 'categories-list a'
	},
	containerOf: {
		discover: '.discover-wrapper',
		home: '.home-wrapper',
		pages: '#pages',
		player: '.player',
		playerHome: '.home-player-wrapper',
		playerHomeSelector: '.home-player-wrapper .player',
		search: '.search-wrapper'
	},
	nav: {
		links: '.main-nav a'
	},
	templateOf: {
		discover: '#template-discover',
		home: '#template-home',
		player: '#template-player',
		search: '#template-search'
	}
};

export const classNames = {
	categories: {
		active: 'active'
	},
	nav: {
		active: 'active'
	},
	pages: {
		active: 'active'
	}
};

export const db = {
	songs: 'songs',
	url: '//' + window.location.hostname + (window.location.hostname == 'localhost' ? ':3131' : '')
};

export const templates = {
	discoverPage: Handlebars.compile(document.querySelector(select.templateOf.discover).innerHTML),
	greenAudioPlayer: Handlebars.compile(document.querySelector(select.templateOf.player).innerHTML),
	homePage: Handlebars.compile(document.querySelector(select.templateOf.home).innerHTML),
	searchPage: Handlebars.compile(document.querySelector(select.templateOf.search).innerHTML)
};