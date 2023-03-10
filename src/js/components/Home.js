import {templates, select} from '../settings.js';
import utils from '../utils.js';
import MusicPlayer from './MusicPlayer.js';

class Home{
	constructor(songs){
		const thisHome = this;
		const activeCategories = [];

		thisHome.render();
		thisHome.renderPlayer(songs, activeCategories);
	}
	renderPlayer(songs, activeCategories){
		const playerContainer = document.querySelector(select.containerOf.playerHome);
		let html = '';

		for(let song of songs){
			const templateData = {
				title: song.title,
				author: song.author,
				categories: song.categories,
				ranking: song.ranking,
				file: song.filename
			};

			if(activeCategories.length > 0){
				for(let activeCategory of activeCategories){
					const songToDisplay = song.categories.includes(activeCategory);

					if(songToDisplay)
						html += templates.greenAudioPlayer(templateData);
				}
			}else
				html += templates.greenAudioPlayer(templateData);
		}

		playerContainer.innerHTML = html;

		new MusicPlayer(select.containerOf.playerHomeSelector);
	}
	render(){
		const generatedHTML = templates.homePage();
		const homeContainer = document.querySelector(select.containerOf.home);

		homeContainer.appendChild(utils.createDOMFromHTML(generatedHTML)).innerHTML;
	}
}

export default Home;