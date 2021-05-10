<template>
    <div>
        <p v-for="person in persons" :key="person.name">
            {{ person.name }}
            {{ person.age }}
        </p>
    </div>
</template>
<script lang="ts">
    import { Vue } from 'vue-class-component'
    import Person from './Person';
    export default class Persons extends Vue {
        persons: Person[] = [{ name: "Vasya", age: 13 }, { name: "Petya", age: 24 }]
    }
</script>