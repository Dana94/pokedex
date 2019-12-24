<template>
    <div class="keyboard">
        <button class="" v-for="letter in alphabet" :key="letter.id" @click="$emit('update', name += letter)" :disabled="disable">{{ letter }}</button>
    </div>
</template>
<script>
export default {
    name: "Keyboard",
    props: {disable: { type: Boolean, required: true}},
    data () {
        return {
            name: '',
            alphabet: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
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