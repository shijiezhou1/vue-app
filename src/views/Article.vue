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
    created() {
        if(this.msg === undefined || this.html === undefined){
            this.$router.push({ name: 'home' })
        }
    }
    // beforeRouteEnter: (to, from, next) => {
    //     // console.log({to});
    //     console.log({from});
    //     next();
    // }
};
</script>

<style lang="scss" >
    #article {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: var(--text-color);

        .article_content {
            width: 50%;
            margin: 0 auto;
            text-align: left;

            img {
                width: 100%;
            }

            & * {
              width: 100%;
              word-break: break-word;
            }

        }

        @media (max-width: 576px) {
            .article_content {
                width: 96%;
                margin: 0 auto;
                text-align: left;
                > img {
                    width: 100%;
                }
            }
        }
    }

</style>
