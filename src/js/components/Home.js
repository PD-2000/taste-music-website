import {templates, select} from '../settings.js';
import utils from '../utils.js';

class Home{
	constructor(element, app){
		const thisHome = this;

		thisHome.app = app;
		thisHome.render(element);
	}
	render(element){
		const thisHome = this;
		const generatedHTML = templates.homePage();
		const homeContainer = document.querySelector(select.containerOf.home);

		thisHome.element = utils.createDOMFromHTML(generatedHTML);
		homeContainer.appendChild(thisHome.element).innerHTML;

		thisHome.dom = {};
		thisHome.dom.wrapper = element;
	}
}

export default Home;