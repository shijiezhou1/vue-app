<template>
    <div>
        <div v-for="cont in contents" :key="cont.guid">
            <BlogContainerCard 
                :name="cont.title"
                :category="cont.categories"
                :image="cont.content"
                :author="cont.creator"
                :desc="cont.contentSnippet"
                :link="cont.link"
            />
        </div>
    </div>
</template>
<script>
import BlogContainerCard from './BlogContainerCard.vue';

export default {
    components: {
        BlogContainerCard
    },
    props: {
        contents: {}
    },
    created() {
        console.log('contents will update, as this.property is now reactive.', this.contents);
    },
    mounted() {
        console.log('mounted', this.contents);
    },
    computed: {
        contentsComputed() {
            console.log('I change when this.contents changes.');
            return this.contents;
        }
    }
};
</script>

<style></style>
