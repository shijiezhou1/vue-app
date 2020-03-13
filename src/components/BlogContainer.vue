<template>
    <div>
        <div>{{ content }}</div>
    </div>
</template>

<script>
export default {
    props: {
        content: {}
    },
    created() {
        console.log('content will update, as this.property is now reactive.', this.content);
    },
    mounted() {
        console.log('mounted', this.content);
    },
    computed: {
        contentComputed() {
            console.log('I change when this.content changes.');
            return this.content;
        }
    }
};
</script>

<style></style>
