import {templates, select} from '../settings.js';
import utils from '../utils.js';
import MusicPlayer from './MusicPlayer.js';

class Discover{
	constructor(songs){
		const thisDiscover = this;

		thisDiscover.render();
		thisDiscover.randomSong(songs);
	}
	randomSong(songs){
		const playerContainer = document.querySelector(select.containerOf.playerDiscover);
		const songsAmount = songs.length;
		const randomSongId = Math.floor(Math.random() * songsAmount) + 1;
		playerContainer.innerHTML = '';
	
		for(const song of songs){
			const templateData = {
				id: song.id,
				title: song.title,
				author: song.author,
				categories: song.categories,
				ranking: song.ranking,
				file: song.filename,
				fileUrl: '<source src="./songs/' + song.filename + '" type="audio/mpeg">'
			};
			
			if(song.id == randomSongId){
				const generatedHTML = templates.greenAudioPlayer(templateData);
				const playerContainer = document.querySelector(select.containerOf.playerDiscover);
				
				playerContainer.innerHTML += generatedHTML;
			}
		}
	
		new MusicPlayer(select.containerOf.playerDiscoverSelector);
	}
	render(){
		const generatedHTML = templates.discoverPage();
		const discoverContainer = document.querySelector(select.containerOf.discover);

		discoverContainer.appendChild(utils.createDOMFromHTML(generatedHTML)).innerHTML;
	}
}

export default Discover;