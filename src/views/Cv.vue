<template>
    <div>
        <iframe :src="url" frameborder="0" width="100%" height="560"></iframe>
    </div>
</template>

<script>
export default {
    data() {
        return {
            url: "../static/pdf/resume.pdf"
        };
    }
};
</script>

<style>
</style>