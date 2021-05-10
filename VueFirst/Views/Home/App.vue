<template>
    <div>
        <p>
            ПРЮВЕТ
        </p>
        <Name :myName='name'></Name>
        <Name2></Name2>
        <!--<logo></logo>-->
    </div>
</template>

<script lang="ts">
    import Name from './Name.vue'
    import Name2 from './Name2.vue'
    export default {
        data() {
            return {
                name:"Vasya"
            }
        },
        components: {
            Name,
            Name2
        }
    }
</script>   