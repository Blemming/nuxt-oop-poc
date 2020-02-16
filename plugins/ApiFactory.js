import Api from '~/classes/Api';
import PokemonList from '~/classes/PokemonList';
import Pokemon from '~/classes/Pokemon';

export default ({ $axios }, inject) => {
	const api = new Api($axios);

	Object.defineProperty(PokemonList, '_api', {
		value: api,
		writable: false
	});
	inject('ClassPokemonList', PokemonList);

	Object.defineProperty(Pokemon, '_api', {
		value: api,
		writable: false
	});
	inject('ClassPokemon', Pokemon);
};
