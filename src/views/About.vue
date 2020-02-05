<template>
    <div id="about">
        <h1>About</h1>
        <BlockQuoteContent
            content="Every person has two education, one whihc he receive from other, and one, more important, which he gives himself."
            author="Edward Gibbon"
            occupation="British historian"
        ></BlockQuoteContent>
    </div>
</template>

<script>
import BlockQuoteContent from '../components/BlockQuoteContent.vue';
export default {
    components: { BlockQuoteContent }
};
</script>

<style lang="scss" scoped="scoped">
#about {
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
