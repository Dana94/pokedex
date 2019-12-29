<template>
    <div class="light">
        <div class="bulb">
        </div>
    </div>
</template>
<script>
export default {
    name: 'Light'
}
</script>
<style lang="scss" scoped>
    .light {
        position: absolute;
        top: -4.8rem;
        left: 2rem;
        background-color: hsl(4, 93%, 32%);
        border-radius: 50%;
        width: 4rem;
        height: 4rem;

        .bulb {
            position: absolute;
            top: .5rem;
            left: .5rem;
            background-color: #d8db02;
            border-radius: 50%;
            width: 3rem;
            height: 3rem;
        }
    }
</style>