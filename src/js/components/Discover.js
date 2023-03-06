import {templates, select} from '../settings.js';
import utils from '../utils.js';

class Discover{
	constructor(element, app){
		const thisDiscover = this;

		thisDiscover.app = app;
		thisDiscover.render(element);
	}
	render(element){
		const thisDiscover = this;
		const generatedHTML = templates.discoverPage();
		const discoverContainer = document.querySelector(select.containerOf.discover);

		thisDiscover.element = utils.createDOMFromHTML(generatedHTML);
		discoverContainer.appendChild(thisDiscover.element).innerHTML;

		thisDiscover.dom = {};
		thisDiscover.dom.wrapper = element;
	}
}

export default Discover;