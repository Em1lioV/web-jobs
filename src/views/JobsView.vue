<template>
    <div>
        <h1>jobs</h1>
        <div v-for="job in jobs" :key="job.id" class="jobs">
            <router-link :to="{name: 'JobsDetails', params:{id:job.id} }" >
                <h2>{{ job.title }}</h2>
            </router-link>
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

<style>
    .jobs h2{
        background-color: #f4f4f4;
        padding: 20px;
        border-radius: 10px;
        margin: 10px auto;
        max-width: 600px;
        cursor: pointer;
        color: #2c3e50;
    }
    .jobs h2:hover{
        background-color: #ddd;
    }
    .jobs a{
        text-decoration: none;
    }
</style>