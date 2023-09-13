<template>
    <div v-if="jobs.length">
        <h1>jobs</h1>
        <div v-for="job in jobs" :key="job.id" class="jobs">
            <router-link :to="{name: 'JobsDetails', params:{id:job.id} }" >
                <h2>{{ job.title }}</h2>
            </router-link>
        </div>
    </div>
    <div v-else>
        cargando trabajos...
    </div>
</template>
<script>


export default {
    name: 'JobsView',
    data() {
        return {
            jobs:[]
        }
    },
    mounted() {
        fetch('http://localhost:3000/jobs')
            .then((res) => res.json())
            .then(data => this.jobs = data)
            .catch(err => console.log(err))
    },
}
</script>

<style>

   
    /* Cambia el color de fondo y texto en hover */
    .tarjeta:hover {
        background-color: var(--color5);
        color: var(--color1);
    }

    .jobs h2{
        border: 1px solid #000;
        padding: 20px;
        border-radius: 10px;
        margin: 10px auto;
        max-width: 600px;
        cursor: pointer;
        background-color: var(--color3);
        color: white;
    }

    .jobs h2:hover{
        background-color: var(--color1);
        color:  var(--color5);
    }
    .jobs a{
        text-decoration: none;
    }
</style>