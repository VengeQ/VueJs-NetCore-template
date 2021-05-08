<template>
    <div>
        {{myName}}
    </div>
</template>
<script>
    export default {
        data() {
            return {
                name:'Daniil'
            }
        },
        computed: {
            myName() {
                return this.name
            }
        }
    }
</script>