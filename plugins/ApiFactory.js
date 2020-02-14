import Api from '~/classes/Api';
import PokemonList from '~/classes/PokemonList';

export default ({ $axios }, inject) => {
	const api = new Api($axios);
	PokemonList.api = api;
};
