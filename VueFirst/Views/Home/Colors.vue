<template>
    <p>{{color}}</p>
    <button @click="doClick">click</button>
</template>

<script lang="ts">
    import { Vue } from 'vue-class-component'
    import Color from './Color'
    import { Prop } from 'vue-property-decorator'
    const axios = require('axios').default
    import { get } from 'core/http'
    import { Success, Result, Failure } from 'core/Result'
    import { match, select } from 'ts-pattern';

    export default class Colors extends Vue {

        @Prop({ required: true } )
        color!: string;

        async doClick() {
            const result: Result<any, any> = await get('/NextColor')
            console.log(result.value.data.description);
            match(result)
                .with({ type: "Success" }, (res) => this.$emit('update:color', res.value.data.description))
                .with({ type: "Failure" }, (res) => console.log(res))
                .exhaustive()

            //const result: Color = data.data;
           // this.$emit('update:color', result.description)
 
        }
    }

</script>