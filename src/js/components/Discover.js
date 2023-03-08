import {templates, select} from '../settings.js';
import utils from '../utils.js';

class Discover{
	constructor(){
		const thisDiscover = this;

		thisDiscover.render();
	}
	render(){
		const generatedHTML = templates.discoverPage();
		const discoverContainer = document.querySelector(select.containerOf.discover);

		discoverContainer.appendChild(utils.createDOMFromHTML(generatedHTML)).innerHTML;

	}
}

export default Discover;