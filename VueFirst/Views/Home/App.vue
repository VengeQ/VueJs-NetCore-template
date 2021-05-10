<template>
    <div>
        <p>
            ПРЮВЕТ
        </p>
        <Name :myName='name'></Name>
        <Persons></Persons>
        <!--<logo></logo>-->
    </div>
</template>

<script lang="ts">
    import Name from './Name.vue'
    import Persons from './Persons.vue'
    export default {
        data() {
            return {
                name:"Vasya"
            }
        },
        components: {
            Name,
            Persons
        }
    }
</script>   