<template>
    <div>
        <h1>job details page</h1>
        <p>job id is {{ id }}</p>

    </div>
</template>
<script>
export default {
    name: 'JobsDetailView',
    data() {
       return{
        id: this.$route.params.id
       }
    },
}
</script>
<style lang="">
    
</style>