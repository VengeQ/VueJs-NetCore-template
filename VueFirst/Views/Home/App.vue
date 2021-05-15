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
    import { Prop} from 'vue-property-decorator'
    import { Options, Vue } from 'vue-class-component'
    import Name from './Name.vue'
    import Persons from './Persons.vue'
    import Colors from './Colors.vue'
    import HomeData from './HomeData'
    @Options({
        name: "App",
        components: {
            Name,
            Persons,
            Colors
        }
    })
    export default class App extends Vue {

        @Prop({ required: true })
        home!: HomeData;

        name = "Vasya";
        yellow = "Yellow";

    }


    //export default {
    //    props() {
    //        return {
    //            id!
    //        }
    //    },
    //    data() {
    //        return {
    //            name: "Vasya",
    //            yellow: "Yellow"
    //        }
    //    },
    //    components: {
    //        Name,
    //        Persons,
    //        Colors
    //    }
    //}
</script>   