<template>
    <div id="contact">
        <h1>Contact:</h1>
        <BlockQuoteContent
            content="Tough-minded optimists approach problems with a can-do philosophy and emerge stronger from tragedies"
            author="Lucius Annaeus Senca"
            occupation="Ancient Roman philosopher"
        ></BlockQuoteContent>
        <h2>Subscribe</h2>
        Emial Address:
        <input type="text" />
        <h2>Communication</h2>
        <h2>Social Media</h2>
        <div>Facebook</div>
        <div>Linkedin</div>
        <div>Medium</div>
        <div>Twitter</div>
        <div>Reddit</div>
    </div>
</template>

<script>
import BlockQuoteContent from '../components/BlockQuoteContent.vue';
export default {
    components: {
        BlockQuoteContent
    }
};
</script>

<style lang="scss" scoped="scoped">
#contact {
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
