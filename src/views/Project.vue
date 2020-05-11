<template>
    <div id="project">
    <title>{{title}}</title>
        <h1>Project:</h1>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
    </div>
</template>

<script>
import BlogCard from '../components/BlogCard.vue';

export default {
    components: {
        BlogCard: BlogCard
    },
    data() {
        return {
            title: "🔥｜ Project",
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
};
</script>

<style lang="scss" scoped="scoped">
#project {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) {
        & img {
            width: 100%;
        }
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
        & img {
            max-width: 768px;
        }
    }
    & img {
        max-width: 768px;
    }
    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        & img {
            max-width: 768px;
        }
    }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
        & img {
            max-width: 768px;
        }
    }
}
</style>
