const state = {
    pokemon: {},
    isData: false
}

const mutations = {
    'SET_POKEMON'(state, data){
        state.pokemon = data;
        state.isData = true;
    }
}

const getters = {
    getPokemon(state) {
        return state.pokemon;
    },
    getImage(state) {
        return state.pokemon.data.sprites.front_default;
    },
    isData(state) {
        return state.isData;
    }

}
export default {
    state,
    mutations,
    getters
}