<template>
    <div>
        <h1>jobs</h1>
        <div v-for="job in jobs" :key="job.id">
            <h2>{{ job.title }}</h2>
            <p>{{ job.detail }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'JobsView',
    data() {
        return {
            jobs:[
                {title: 'ux designer', id:1, detail:'lorem'},
                {title: 'frontend developer', id:2, detail:'lorem'},
                {title: 'backend developer', id:2, detail:'lorem'}
            ]
        }
    },
}
</script>
<style lang="">
    
</style>