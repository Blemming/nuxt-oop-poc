<template>
	<div class="mx-2">
		<n-link :to="pokemon.url" class="capitalize font-semibold tracking-tight text-gray-600 hover:text-teal-500 cursor-pointer">
			<img class="w-16 h-auto mx-auto" :src="pokemon.image" :alt="pokemon.name">
			{{ pokemon.name }}
		</n-link>
	</div>
</template>

<script>
import PokemonMini from '~/classes/PokemonMini';
export default {
	props: {
		pokemon: PokemonMini
	}
};
</script>
