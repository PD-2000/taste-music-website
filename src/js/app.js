import {select, classNames} from './settings.js';
import Home from './components/Home.js';
import Search from './components/Search.js';
import Discover from './components/Discover.js';
// import MusicPlayer from './components/Discover.js';

const app = {
	initPages: function(){
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
				
				// get page id from href attribute
				const id = clickedElement.getAttribute('href').replace('#', '');

				// run activatePage with this id
				thisApp.activatePage(id);

				// change URL hash
				window.location.hash = '#/' + id;
			});
		}
	},
	activatePage: function(pageId){
		const thisApp = this;

		// add 'active' class to matching pages, remove from non-matching ones
		for(let page of thisApp.pages)
			page.classList.toggle(classNames.pages.active, page.id == pageId);
		
		// add 'active' class to matching links, remove from non-matching ones
		for(let link of thisApp.navLinks)
			link.classList.toggle(classNames.nav.active, link.getAttribute('href') == '#' + pageId);
	},
	// initMusicPlayer: function(){
	// 	const thisApp = this;
	// 	const playerElem = document.querySelector(select.containerOf.player);

	// 	thisApp.playerElem = new MusicPlayer(playerElem, thisApp);

	// GreenAudioPlayer.init({
	// 	selector: '.player', // inits Green Audio Player on each audio container that has class "player"
	// 	stopOthersOnPlay: true
	// });
	// },
	initHome: function(){
		const thisApp = this;
		const homeElem = document.querySelector(select.containerOf.home);

		thisApp.homeElem = new Home(homeElem, thisApp);
	},
	initSearch: function(){
		const thisApp = this;
		const searchElem = document.querySelector(select.containerOf.search);

		thisApp.searchElem = new Search(searchElem, thisApp);
	},
	initDiscover: function(){
		const thisApp = this;
		const discoverElem = document.querySelector(select.containerOf.discover);

		thisApp.discoverElem = new Discover(discoverElem, thisApp);
	},
	init: function(){
		const thisApp = this;

		thisApp.initPages();
		// thisApp.initMusicPlayer();
		thisApp.initHome();
		thisApp.initSearch();
		thisApp.initDiscover();
	}
};

app.init();