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
            .get('https://shijiezhou.herokuapp.com/medium')
            .then(function(response) {
                self.mediumData = response.data;
            })
            .catch(function(error) {
                console.log(error);
            });
    }
}
</script>

<style>

</style>