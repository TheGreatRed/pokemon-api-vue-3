<template>
    <div class="HomeView">
        <div class="container bg-light shadow-sm p-3 border rounded mt-5 mb-5">
            <FetchPokemonButton :fetchPokemonData="fetchPokemonData" :loading="loading" />
            <template v-if="pokemonData">
                <div class="col-md-12 d-flex justify-content-center mt-3">
                    <PokemonCard :pokemonData="pokemonData" />
                </div>
            </template>
            <template v-if="error">
                <div class="alert alert-danger mt-3">
                    {{ error }}
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import PokemonCard from "@/components/PokemonCard.vue";
import FetchPokemonButton from "@/components/FetchPokemonButton.vue";
export default {
    name: "HomeView",

    components: {
        PokemonCard,
        FetchPokemonButton
    },

    mounted() {
        document.title = "Pokémon API - Vue 3";
    },

    data() {
        return {
            pokemonData: null,
            error: null,
            loading: false,
        };
    },

    methods: {
        generateRandomNumber() {
            return Math.floor(Math.random() * 151) + 1;
        },

        async fetchPokemonData() {
            this.loading = true;
            this.pokemonData = null;
            this.error = null;
            try {
                const randomNumber = this.generateRandomNumber();
                const response = await axios.get(`https://us-central1-pokemon-api-vue-3.cloudfunctions.net/getPokemonData?pokemon=${randomNumber}`);
                this.pokemonData = response.data;
            } catch (error) {
                this.error = 'No se pudo obtener la información del Pokémon';
            } finally {
                this.loading = false;
            }
        }
    }
}
</script>

<style scoped>
.container {
    max-width: 1200px;
}

@media screen and (max-width: 600px) {
    .container {
        max-width: 400px;
    }
}
</style>