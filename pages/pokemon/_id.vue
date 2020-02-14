<template>
	<div class="min-h-screen flex flex-col justify-center items-center text-center mx-auto">
		<div>
			<img class="max-w-sm" :src="pokemon.image" :alt="pokemon.name">
			<h1 class="block capitalize font-light text-6xl text-gray-700 tracking-wide">
				{{ pokemon.name }}
			</h1>
			<dl class="flex flex-wrap justify-center">
				<div class="mx-2">
					<dt class="lowercase font-light tracking-tight text-gray-700">
						id
					</dt>
					<dd class="uppercase text-xl font-semibold tracking-tight leading-none text-teal-400">
						{{ pokemon.id }}
					</dd>
				</div>
				<div class="mx-2">
					<dt class="lowercase font-light tracking-tight text-gray-700">
						Height
					</dt>
					<dd class="uppercase text-xl font-semibold tracking-tight leading-none text-teal-400">
						{{ pokemon.height }}
					</dd>
				</div>
				<div class="mx-2">
					<dt class="lowercase font-light tracking-tight text-gray-700">
						Weight
					</dt>
					<dd class="uppercase text-xl font-semibold tracking-tight leading-none text-teal-400">
						{{ pokemon.weight }}
					</dd>
				</div>
			</dl>
		</div>
	</div>
</template>

<script>
import Pokemon from '~/classes/Pokemon';
export default {
	async asyncData ({ app, params }) {
		return {
			pokemon: {},
			data: await app.$api.fetch(...Pokemon.fetch(params))
		};
	},
	created () {
		this.pokemon = new Pokemon(this.data);
	}
};
</script>
