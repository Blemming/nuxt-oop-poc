import Pokemon from '~/classes/Pokemon';

export default class Interface {
	constructor (className, data) {
		switch (className) {
			case 'Pokemon':
				return new Pokemon(data);
		}
	}
}
