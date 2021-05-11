<template>
    <div>
        <p>
            ПРЮВЕТ
        </p>
        <Name :myName='name'></Name>
        <Persons></Persons>
        <Colors v-model:color="yellow"></Colors>
    </div>
</template>

<script lang="ts">
    import Name from './Name.vue'
    import Persons from './Persons.vue'
    import Colors from './Colors.vue'
    export default {
        data() {
            return {
                name: "Vasya",
                yellow: "Yellow"
            }
        },
        components: {
            Name,
            Persons,
            Colors
        }
    }
</script>   