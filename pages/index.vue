<template>
	<div class="min-h-screen flex flex-col justify-center items-center text-center mx-auto">
		<div>
			<h1 class="block font-light text-6xl text-gray-700 tracking-wide">
				PokeAPI
			</h1>
			<h2 class="block pb-8 font-light text-2xl text-gray-700 tracking-tight">
				Select a pokemon to start <button type="button" @click="fetchNext">
					next
				</button>
			</h2>
		</div>
		<div class="flex flex-wrap justify-center">
			<pokemon-mini v-for="pokemon in pokemonList.list" :key="pokemon.id" :pokemon="pokemon" />
		</div>
	</div>
</template>

<script>
import PokemonList from '~/classes/PokemonList';

import PokemonMini from '~/components/PokemonMini';

export default {
	components: {
		PokemonMini
	},
	async asyncData ({ app }) {
		return {
			pokemonList: [],
			data: await PokemonList.get()
		};
	},
	computed: {
		apiLogs () {
			return this.$api.logs;
		}
	},
	created () {
		this.pokemonList = new PokemonList(this.data);
	},
	methods: {
		async fetchNext () {
			await this.pokemonList.fetchNext();
		}
	}
};
</script>

<style>

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
