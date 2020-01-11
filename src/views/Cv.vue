<template>
    <div>
        <pdf src="./pdf/resume.pdf" :page="page" ref="myPdfComponent"></pdf>
    </div>
</template>

<script>
import pdf from 'vue-pdf';

export default {
    components: {
        pdf
    }
};
</script>

<style></style>
