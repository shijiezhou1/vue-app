<template>
    <div id="pdfvuer">
        <pdf :src="pdfdata" v-for="i in numPages" :key="i" :id="i" :page="i" :scale.sync="scale" style="width:100%;margin:20px auto;">
            <template slot="loading">
                loading content here...
            </template>
        </pdf>
    </div>
</template>

<script>
// script is reference to advance pdfvuer
import pdfvuer from 'pdfvuer';

export default {
    components: {
        pdf: pdfvuer
    },
    data() {
        return {
            page: 1,
            numPages: 0,
            pdfdata: undefined,
            errors: [],
            scale: 'page-width'
        };
    },
    computed: {
        formattedZoom() {
            return Number.parseInt(this.scale * 100);
        }
    },
    mounted() {
        this.getPdf();
    },
    watch: {
        show: function(s) {
            if (s) {
                this.getPdf();
            }
        },
        page: function(p) {
            if (
                window.pageYOffset <= this.findPos(document.getElementById(p)) ||
                (document.getElementById(p + 1) && window.pageYOffset >= this.findPos(document.getElementById(p + 1)))
            ) {
                // window.scrollTo(0,this.findPos(document.getElementById(p)));
                document.getElementById(p).scrollIntoView();
            }
        }
    },
    methods: {
        getPdf() {
            var self = this;
            self.pdfdata = pdfvuer.createLoadingTask('./pdf/resume.pdf');
            self.pdfdata.then(pdf => {
                self.numPages = pdf.numPages;
            });
        },
        findPos(obj) {
            return obj.offsetTop;
        }
    }
};
</script>

<style lang="scss" scoped>
.content {
    padding: 16px;
}
</style>
