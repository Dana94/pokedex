<template>
    <div class="keyboard">
        <button class="" v-for="letter in alphabet" :key="letter.id" @click="$emit('update', name += letter)">{{ letter }}</button>
    </div>
</template>
<script>
export default {
    name: "Keyboard",
    data () {
        return {
            name: '',
            alphabet: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
        }
    }
}
</script>
<style lang="scss" scoped>
.keyboard {
    position: absolute;
    bottom: 1rem;
    right: 2rem;
    display: grid;
    grid-template-columns: repeat(7, 40px);
    grid-gap: 10px;

    button {
        padding: .5rem;
    }
    
}
</style>