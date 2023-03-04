export const select = {
	templateOf: {
		discover: '#template-discover',
		home: '#template-home',
		search: '#template-search'
	}
};

export const classNames = {
	
};

export const settings = {
	
};

export const templates = {
	discover: Handlebars.compile(document.querySelector(select.templateOf.discover).innerHTML),
	home: Handlebars.compile(document.querySelector(select.templateOf.home).innerHTML),
	search: Handlebars.compile(document.querySelector(select.templateOf.search).innerHTML)
};