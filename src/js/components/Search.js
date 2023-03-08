import {templates, select} from '../settings.js';
import utils from '../utils.js';

class Search{
	constructor(){
		const thisSearch = this;

		thisSearch.render();
	}
	render(){
		const generatedHTML = templates.searchPage();
		const searchContainer = document.querySelector(select.containerOf.search);

		searchContainer.appendChild(utils.createDOMFromHTML(generatedHTML)).innerHTML;
	}
}

export default Search;