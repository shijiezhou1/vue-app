<template>
    <div id="article">
        <title>{{ title }}</title>
        <h1>{{ msg }}</h1>
        <div class="article_content" v-html="html"></div>
    </div>
</template>

<script>
export default {
    props: ['msg', 'html'],
    data() {
        return {
            title: 'Article | 🏖'
        };
    },
    beforeRouteEnter: (to, from, next) => {
        console.log({to});
        console.log({from});
        next();
    }
};
</script>

<style lang="scss">
    #article {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;    
        
        .article_content {
            width: 50%;
            margin: 0 auto;
            text-align: left;
            
            & * {
              width: 100%;
              word-break: break-word;
            }
        }
        
        @media (max-width: 992px) {
            .article_content {
                width: 100%;
                margin: 0 auto;
                text-align: left;
            }
            
        }
    }
    
    
    
</style>
