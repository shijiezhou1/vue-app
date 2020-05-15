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
                :date="cont.pubDate"
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
    computed: {
        contentsComputed() {
            console.log('I change when this.contents changes.', this.contents);
            return this.contents;
        }
    }
};
</script>

<style></style>
