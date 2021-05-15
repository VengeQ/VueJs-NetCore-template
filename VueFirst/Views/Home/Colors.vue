<template>
    <p>{{color}}</p>
    <button @click="doClick">click</button>
</template>

<script lang="ts">
    import { Vue } from 'vue-class-component'
    import Color from './Color'
    import { Prop } from 'vue-property-decorator'
    import { getResult } from 'core/http'
    import { Success, Result, Failure } from 'core/Result'
    import { match } from 'ts-pattern';

    export default class Colors extends Vue {

        @Prop({ required: true } )
        color!: string;

        async doClick() {
            const result: Result<any, String> = await getResult('/NextColor')
            console.log(result.value.data.description);
            match(result)
                .with({ type: "Success" }, (res) => {
                    const color: Color = res.value.data;
                    this.$emit('update:color', color.description)
                })
                .with({ type: "Failure" }, (res) => console.log(res))
                .exhaustive()
        }
    }

</script>