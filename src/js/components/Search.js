import {templates, select} from '../settings.js';
import utils from '../utils.js';

class Search{
	constructor(element, app){
		const thisSearch = this;

		thisSearch.app = app;
		thisSearch.render(element);
	}
	render(element){
		const thisSearch = this;
		const generatedHTML = templates.searchPage();
		const searchContainer = document.querySelector(select.containerOf.search);

		thisSearch.element = utils.createDOMFromHTML(generatedHTML);
		searchContainer.appendChild(thisSearch.element).innerHTML;

		thisSearch.dom = {};
		thisSearch.dom.wrapper = element;
	}
}

export default Search;