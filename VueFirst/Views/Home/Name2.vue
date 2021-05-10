<template>
    <div>
        {{myName}}
    </div>
</template>
<script lang="ts">
    import { Vue } from 'vue-class-component'
    export default class HelloWorld extends Vue  {
        myName: String = "Hello World"
    }
</script>