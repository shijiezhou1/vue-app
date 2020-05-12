<template>
    <div>
        <title>{{Blog}}</title>
        <BlogContainer content="mediumData" />
    </div>
</template>

<script>

import axios from "axios";
import BlogContainer from '../components/BlogContainer.vue';

export default {
    components: {
        BlogContainer
    },
    data() {
        return {
            Blog: "🛹 | Blog",
            mediumData: null
        }
    },
    created() {
        const self = this;
        axios
            .get('https://shijiezhou.heroku.com/medium')
            .then(function(response) {
                // handle success
                // TODO Remove setTimeout 
                // setTimeout(function(){
                    self.mediumData = response.data;
                // }, 3000);
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            });
    }
}
</script>

<style>

</style>