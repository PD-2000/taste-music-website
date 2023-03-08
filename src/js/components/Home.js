import {templates, select} from '../settings.js';
import utils from '../utils.js';
import MusicPlayer from './MusicPlayer.js';

class Home{
	constructor(songs){
		const thisHome = this;
		const activeCategories = [];

		thisHome.render();
		thisHome.initPlayer(songs, activeCategories);
	}
	initPlayer(songs, activeCategories){
		const playerContainer = document.querySelector(select.containerOf.playerHome);

		for(let song of songs){
			const songFileUrl = '<source src="./songs/' + song.filename + '" type="audio/mpeg">';
			const templateData = {
				title: song.title,
				author: song.author,
				categories: song.categories,
				ranking: song.ranking,
				file: song.filename,
				fileUrl: songFileUrl
			};

			if(activeCategories.length > 0){
				for(let activeCategory of activeCategories){
					const songToDisplay = song.categories.includes(activeCategory);

					if(songToDisplay)
						playerContainer.innerHTML += templates.greenAudioPlayer(templateData);
				}
			}else
				playerContainer.innerHTML += templates.greenAudioPlayer(templateData);
		}

		new MusicPlayer(select.containerOf.playerHomeSelector);
	}
	render(){
		const generatedHTML = templates.homePage();
		const homeContainer = document.querySelector(select.containerOf.home);

		homeContainer.appendChild(utils.createDOMFromHTML(generatedHTML)).innerHTML;
	}
}

export default Home;