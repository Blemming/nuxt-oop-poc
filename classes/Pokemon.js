import Ability from './Ability';

export default class Pokemon {
	id = '';
	name = '';
	weight = '';
	height = '';
	abilities = [];
	static _api = {};

	constructor (data, api) {
		this.id = data?.id;
		this.name = data?.name;
		this.weight = data?.weight;
		this.height = data?.height;
		if (data.abilities?.length) {
			this.abilities =
				data.abilities.map(abilityData => new Ability(abilityData)) ?? [];
		}
		this.api = Pokemon._api;
	}

	get image () {
		return `https://pokeres.bastionbot.org/images/pokemon/${this.id}.png`;
	}

	static fetch (params) {
		return [`/pokemon/${params.id}`];
	}

	static get (id) {
		return Pokemon._api.fetch(`/pokemon/${id}`);
	}
}
