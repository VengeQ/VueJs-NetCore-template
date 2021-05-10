<template>
    <div>
        {{myName}}
    </div>
</template>
<script lang="ts">
    export default {
        name: "Name",
        data() {
            return{
                name: "Daniil",
                lastName:"B"
            }
        },
        props: {
            myName: {
                type: String,
                require: true
            }
        },
        methods: {
            changeName() {

            }
        }
    }
</script>