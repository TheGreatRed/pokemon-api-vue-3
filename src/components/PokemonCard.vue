<template>
    <div class="PokemonCard">
        <div class="card">
            <div class="text-center bg-light border">
                <img :src="pokemonData.sprites.front_default" width="250px" :alt="pokemonData.name" />
            </div>
            <div class="card-body">
                <h5 class="card-title text-center mb-4">{{ pokemonData.name }} #{{ pokemonData.id }}</h5>
                <p class="card-text text-start mb-0">
                    <strong>🩺 Peso</strong>
                </p>
                <div class="size text-start mt-3 mb-3">
                    {{ pokemonData.weight }} hectogramos
                </div>
                <p class="text-start">
                    <strong>🎖 Tipos</strong>
                </p>
                <ul class="text-start">
                    <li v-for="type in pokemonData.types" :key="type.name">
                        {{ type.type.name }}
                    </li>
                </ul>
                <p class="text-start">
                    <strong>🏋🏻‍♂️ Habilidades</strong>
                </p>
                <ul class="text-start">
                    <li v-for="ability in pokemonData.abilities" :key="ability.name">
                        {{ ability.ability.name }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PokemonCard',

    props: {
        pokemonData: Object
    },
};
</script>

<style scoped>
.card {
    margin: 10px;
    width: 400px;
    max-width: 400px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
}

.card:hover {
    transform: translateY(-5px);
}

.card-title {
    font-size: 1.2rem;
    font-weight: bold;
}

.size {
    background-color: #f0f0f0;
    padding: 5px;
    margin-bottom: 5px;
    border-radius: 4px;
}

ul {
    list-style-type: none;
    padding: 0;
}

ul li {
    background-color: #f0f0f0;
    padding: 5px;
    margin-bottom: 5px;
    border-radius: 4px;
}

@media screen and (max-width: 600px) {
    .card {
        max-width: 350px;
    }
}
</style>