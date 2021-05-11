<template>
    <p>{{color}}</p>
    <button @click="doClick">click</button>
</template>

<script lang="ts">
    import { Vue } from 'vue-class-component'
    import Color from './Color'
    const axios = require('axios').default

    export default class Colors extends Vue {
        color = "Nothing";
        async doClick() {
            const data = await axios.get('/NextColor')
            const result: Color = data.data;
            console.log(result)
            this.color = result.description
        }
    }

</script>