<template>
    <div class="FetchPokemonButton">
        <button type="button" class="btn btn-dark fw-bold" :disabled="loading" @click="fetchPokemonData">
            <span v-if="loading" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            <span v-if="loading" class="sr-only">Buscando tu pokémon...</span>
            <span v-else>🥏 ¡Dame un Pokémon!</span>
        </button>
    </div>
</template>

<script>
export default {
    name: "FetchPokemonButton",

    props: {
        fetchPokemonData: {
            type: Function,
            required: true
        },
        loading: {
            type: Boolean,
            required: true
        }
    }
};
</script>

<style scoped>
.spinner-border {
    margin-right: 10px;
}
</style>