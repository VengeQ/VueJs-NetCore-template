<template>
    <div>
        <p>
            ПРЮВЕТ
        </p>
        <Name :myName='name'></Name>
        <Persons></Persons>
        <Colors></Colors>
    </div>
</template>

<script lang="ts">
    import Name from './Name.vue'
    import Persons from './Persons.vue'
    import Colors from './Colors.vue'
    export default {
        data() {
            return {
                name:"Vasya"
            }
        },
        components: {
            Name,
            Persons,
            Colors
        }
    }
</script>   