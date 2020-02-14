export default class PokemonMini {
	name='';
	id='';
	url='';

	constructor (mini) {
		this.name = mini?.name;
		this.id = mini?.url.split('/').reverse()[1];
		this.url = mini?.url.replace('https://pokeapi.co/api/v2', '');
	}

	get image () {
		return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`;
	}
}
