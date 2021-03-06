import PokemonMini from './PokemonMini';

export default class PokemonList {
	list = [];
	static _api = {};

	constructor (data) {
		this.setList(data);
		this.api = PokemonList._api;
	}

	setList (data) {
		if (this.list.length) {
			this.list = [
				...this.list,
				...data?.results.map(pokemon => new PokemonMini(pokemon))
			];
		} else {
			this.list = data?.results.map(pokemon => new PokemonMini(pokemon));
		}
	}

	// get api () {
	// 	if (PokemonList.api) {
	// 		return PokemonList.api;
	// 	} else {
	// 		throw new Error('Api has not been instanced on PokemonList');
	// 	}
	// }

	async fetchNext () {
		const data = await this.api.fetch('/pokemon?offset=151&limit=151');
		this.setList(data);
	}

	static get () {
		return PokemonList._api.fetch('/pokemon?limit=151');
	}
}
