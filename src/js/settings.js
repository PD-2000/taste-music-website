export const select = {
	templateOf: {
		home: '#template-home',
		search: '#template-search',
		discover: '#template-discover',
		player: '#template-player',
	},
	containerOf: {
		pages: '#pages',
		home: '.home-wrapper',
		search: '.search-wrapper',
		discover: '.discover-wrapper'
	},
	nav: {
		links: '.main-nav a'
	},
	home: {
		homeHeader: '.content'
	}
};

export const classNames = {
	nav: {
		active: 'active'
	},
	pages: {
		active: 'active'
	}
};

export const templates = {
	homePage: Handlebars.compile(document.querySelector(select.templateOf.home).innerHTML),
	searchPage: Handlebars.compile(document.querySelector(select.templateOf.search).innerHTML),
	discoverPage: Handlebars.compile(document.querySelector(select.templateOf.discover).innerHTML)
};