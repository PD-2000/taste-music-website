import {select, classNames, db} from './settings.js';
import Home from './components/Home.js';
import Search from './components/Search.js';
import Discover from './components/Discover.js';
// import MusicPlayer from './components/MusicPlayer.js';

const app = {
	initNavigation: function(){
		const thisApp = this;

		thisApp.pages = document.querySelector(select.containerOf.pages).children;
		thisApp.navLinks = document.querySelectorAll(select.nav.links);

		const idFromHash = window.location.hash.replace('#/', '');
		let pageMatchingHash = thisApp.pages[0].id;

		for(let page of thisApp.pages){
			if(page.id == idFromHash){
				pageMatchingHash = page.id;
				break;
			}
		}

		thisApp.activatePage(pageMatchingHash);

		for(let link of thisApp.navLinks){
			link.addEventListener('click', function(event){
				event.preventDefault();
				const clickedElement = this;
				const id = clickedElement.getAttribute('href').replace('#', '');

				thisApp.activatePage(id);

				window.location.hash = '#/' + id;
			});
		}
	},
	activatePage: function(pageId){
		const thisApp = this;

		for(let page of thisApp.pages)
			page.classList.toggle(classNames.pages.active, page.id == pageId);
		for(let link of thisApp.navLinks)
			link.classList.toggle(classNames.nav.active, link.getAttribute('href') == '#' + pageId);
	},
	initPages: function(){
		const url = db.url + '/' + db.songs;

		fetch(url)
			.then(function(response){
				return response.json();
			})
			.then(function(data){
				new Home(data);
				new Search(data);
				new Discover(data);
			});
	},
	init: function(){
		const thisApp = this;

		thisApp.initNavigation();
		thisApp.initPages();
	}
};

app.init();