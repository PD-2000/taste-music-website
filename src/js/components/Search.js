import {templates, select} from '../settings.js';
import utils from '../utils.js';
import MusicPlayer from './MusicPlayer.js';

class Search{
	constructor(songs){
		const thisSearch = this;

		thisSearch.render();
		thisSearch.generateCategory(songs);
	}
	generateCategory(songs){
		const thisSearch = this;
		const categoriesContainer = document.getElementById(select.containerOf.searchCategories);
		const songsCategories = [];
		let html = '<option value="clean"></option>';

		for(const song of songs){
			for(const category of song.categories){
				if(!songsCategories.includes(category))
					songsCategories.push(category);
			}
		}

		for(let songCategory of songsCategories){
			const linkHTML = '<option value="' + songCategory + '">' + songCategory + '</option>';
		
			html = html + ' ' + linkHTML;
		}

		categoriesContainer.innerHTML = html;
	
		thisSearch.search(songs);
	}
	search(songs){
		const form = document.querySelector(select.search.form);
		const search = document.querySelector(select.search.input);
		const searchCategories = document.getElementById(select.containerOf.searchCategories);
		const playerContainer = document.querySelector(select.containerOf.playerSearch);
		let selectedCategory;
	
		searchCategories.addEventListener('input', function(event){
			event.preventDefault();
			selectedCategory = event.target.value;
		});
	
		form.addEventListener('submit', function(event){
			event.preventDefault();
			const searchData = search.value.toLowerCase();
			let searchResultsNumber = 0;
			playerContainer.innerHTML = '';

			for(const song of songs){
				const templateData = {
					title: song.title,
					author: song.author,
					categories: song.categories,
					ranking: song.ranking,
					file: song.filename
				};
		
				const songToDisplay =
					(song.title.toLowerCase().includes(searchData)
					|| song.author.toLowerCase().includes(searchData))
					&
					(song.categories.includes(selectedCategory)
					|| selectedCategory == undefined
					|| selectedCategory.includes('clean'));
		
				if(songToDisplay){
					const generatedHTML = templates.greenAudioPlayer(templateData);
					playerContainer.innerHTML += generatedHTML;
					searchResultsNumber += 1;
				}
			}

			const searchResultsNumberContainter = document.querySelector(select.containerOf.searchResultsNumber);

			searchResultsNumberContainter.innerText = 'We have found ' + searchResultsNumber + ' song(s)...';

			new MusicPlayer(select.containerOf.playerSearchSelector);
		});
	}
	render(){
		const generatedHTML = templates.searchPage();
		const searchContainer = document.querySelector(select.containerOf.search);

		searchContainer.appendChild(utils.createDOMFromHTML(generatedHTML)).innerHTML;
	}
}

export default Search;