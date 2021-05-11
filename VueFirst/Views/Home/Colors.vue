<template>
    <p>{{color}}</p>
    <button @click="doClick">click</button>
</template>

<script lang="ts">
    import { Vue } from 'vue-class-component'
    import Color from './Color'
    import { Prop } from 'vue-property-decorator'
    const axios = require('axios').default

    export default class Colors extends Vue {

        @Prop({ required: true } )
        color!: String;

        async doClick() {
            const data = await axios.get('/NextColor')
            const result: Color = data.data;
            console.log(result)
            this.$emit('update:color', result.description)
 
        }
    }

</script>