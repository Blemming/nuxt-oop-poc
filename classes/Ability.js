import PokemonMini from './PokemonMini';

export default class Ability {
	id='';
	name='';
	url='';
	pokemons = [];

	constructor (data, api) {
		this.id = data?.ability?.id ?? data?.id;
		this.name = data?.ability?.name ?? data?.name;
		this.url = data?.ability?.url ?? data?.url;
		if (data?.pokemon) {
			this.pokemons = (data?.pokemon ?? []).map(pokemon => new PokemonMini(pokemon));
		}
	}

	get idFromUrl () {
		return this.url.split('/').reverse()[1];
	}
}
